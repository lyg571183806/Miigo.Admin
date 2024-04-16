
using Microsoft.AspNetCore.Authentication;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text.Encodings.Web;
namespace Miigo.Admin.Core.Service;

/// <summary>
/// Signature 身份验证处理
/// </summary>
public sealed class SimpleSignatureAuthenticationHandler : AuthenticationHandler<SignatureAuthenticationOptions>
{
    private SysCacheService _cacheService;

    public SimpleSignatureAuthenticationHandler(IOptionsMonitor<SignatureAuthenticationOptions> options,
        ILoggerFactory logger,
        UrlEncoder encoder,
        ISystemClock clock,
        SysCacheService cacheService)
        : base(options, logger, encoder, clock)
    {
        _cacheService = cacheService;
    }

    private new SignatureAuthenticationEvent Events
    {
        get => (SignatureAuthenticationEvent)base.Events;
        set => base.Events = value;
    }

    /// <summary>
    /// 确保创建的 Event 类型是 DigestEvents
    /// </summary>
    /// <returns></returns>
    protected override Task<object> CreateEventsAsync() => throw new NotImplementedException($"{nameof(SignatureAuthenticationOptions)}.{nameof(SignatureAuthenticationOptions.Events)} 需要提供一个实例");

    protected override async Task<AuthenticateResult> HandleAuthenticateAsync()
    {
        var accessSecret = Request.Headers["AccessSecret"].FirstOrDefault();

        if (string.IsNullOrEmpty(accessSecret))
            return await AuthenticateResultFailAsync("accessSecret 不能为空");

        // 获取 accessSecret
        var getAccessSecretContext = new GetAccessSecretContext(Context, Scheme, Options) { AccessSecret = accessSecret };
        var accessModel = await Events.GetAccessModel(getAccessSecretContext);
        if (accessModel == null)
            return await AuthenticateResultFailAsync("accessSecret 无效");

        // 已验证成功
        var signatureValidatedContext = new SignatureValidatedContext(Context, Scheme, Options)
        {
            Principal = new ClaimsPrincipal(new ClaimsIdentity(SignatureAuthenticationDefaults.SimpleAuthenticationScheme)),
            AccessSecret = accessSecret,
            OpenAccess = accessModel
        };
        await Events.Validated(signatureValidatedContext);
        // ReSharper disable once ConditionIsAlwaysTrueOrFalse
        if (signatureValidatedContext.Result != null)
            return signatureValidatedContext.Result;

        // ReSharper disable once HeuristicUnreachableCode
        signatureValidatedContext.Success();
        return signatureValidatedContext.Result;
    }

    protected override async Task HandleChallengeAsync(AuthenticationProperties properties)
    {
        var authResult = await HandleAuthenticateOnceSafeAsync();
        var challengeContext = new SignatureChallengeContext(Context, Scheme, Options, properties)
        {
            AuthenticateFailure = authResult.Failure,
        };
        await Events.Challenge(challengeContext);
        // 质询已处理
        if (challengeContext.Handled) return;

        await base.HandleChallengeAsync(properties);
    }

    /// <summary>
    /// 获取用于签名的消息
    /// </summary>
    /// <returns></returns>
    private static string GetMessageForSign(HttpContext context)
    {
        var method = context.Request.Method; // 请求方法（大写）
        var url = context.Request.Path; // 请求 url，去除协议、域名、参数，以 / 开头
        var accessKey = context.Request.Headers["accessKey"].FirstOrDefault(); // 身份标识
        var timestamp = context.Request.Headers["timestamp"].FirstOrDefault(); // 时间戳，精确到秒
        var nonce = context.Request.Headers["nonce"].FirstOrDefault(); // 唯一随机数

        return $"{method}&{url}&{accessKey}&{timestamp}&{nonce}";
    }

    /// <summary>
    /// 对数据进行签名
    /// </summary>
    /// <param name="secret"></param>
    /// <param name="data"></param>
    /// <returns></returns>
    private static string SignData(byte[] secret, string data)
    {
        if (secret == null)
            throw new ArgumentNullException(nameof(secret));

        if (data == null)
            throw new ArgumentNullException(nameof(data));

        using HMAC hmac = new HMACSHA256();
        hmac.Key = secret;
        return Convert.ToBase64String(hmac.ComputeHash(Encoding.UTF8.GetBytes(data)));
    }

    /// <summary>
    /// 返回验证失败结果，并在 Items 中增加 <see cref="SignatureAuthenticationDefaults.AuthenticateFailMsgKey"/>，记录身份验证失败消息
    /// </summary>
    /// <param name="message"></param>
    /// <returns></returns>
    private Task<AuthenticateResult> AuthenticateResultFailAsync(string message)
    {
        // 写入身份验证失败消息
        Context.Items[SignatureAuthenticationDefaults.AuthenticateFailMsgKey] = message;
        return Task.FromResult(AuthenticateResult.Fail(message));
    }
}
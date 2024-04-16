
using Microsoft.AspNetCore.Authentication;
namespace Miigo.Admin.Core;

/// <summary>
/// Signature 身份验证扩展
/// </summary>
public static class SimpleSignatureAuthenticationExtensions
{
    /// <summary>
    /// 注册 Signature 身份验证处理模块
    /// </summary>
    /// <param name="builder"></param>
    /// <returns></returns>
    public static AuthenticationBuilder AddSimpleSignatureAuthentication(this AuthenticationBuilder builder)
    {
        return builder.AddSimpleSignatureAuthentication(options => { });
    }

    /// <summary>
    /// 注册 Signature 身份验证处理模块
    /// </summary>
    /// <param name="builder"></param>
    /// <param name="options"></param>
    /// <returns></returns>
    public static AuthenticationBuilder AddSimpleSignatureAuthentication(this AuthenticationBuilder builder, Action<SignatureAuthenticationOptions> options)
    {
        return builder.AddScheme<SignatureAuthenticationOptions, SimpleSignatureAuthenticationHandler>(SignatureAuthenticationDefaults.SimpleAuthenticationScheme, options);
    }
}






using Flurl;
using Flurl.Http;
using Flurl.Http.Configuration;
namespace Miigo.Admin.Core.Service;

/// <summary>
/// 微信API客户端
/// </summary>
public partial class WechatApiHttpClientFactory : ISingleton
{
    public readonly WechatOptions _wechatOptions;

    public WechatApiHttpClientFactory(IOptions<WechatOptions> wechatOptions,
        System.Net.Http.IHttpClientFactory httpClientFactory)
    {
        _wechatOptions = wechatOptions.Value;

        FlurlHttp.GlobalSettings.FlurlClientFactory = new DelegatingFlurlClientFactory(httpClientFactory);
    }

    /// <summary>
    /// 微信公众号
    /// </summary>
    /// <returns></returns>
    public WechatApiClient CreateWechatClient()
    {
        if (string.IsNullOrEmpty(_wechatOptions.WechatAppId) || string.IsNullOrEmpty(_wechatOptions.WechatAppSecret))
            throw Oops.Oh("微信公众号配置错误");

        var wechatApiClient = new WechatApiClient(new WechatApiClientOptions()
        {
            AppId = _wechatOptions.WechatAppId,
            AppSecret = _wechatOptions.WechatAppSecret,
        });

        wechatApiClient.Configure(settings =>
        {
            settings.JsonSerializer = new FlurlNewtonsoftJsonSerializer();
        });

        return wechatApiClient;
    }

    /// <summary>
    /// 微信小程序
    /// </summary>
    /// <returns></returns>
    public WechatApiClient CreateWxOpenClient()
    {
        if (string.IsNullOrEmpty(_wechatOptions.WxOpenAppId) || string.IsNullOrEmpty(_wechatOptions.WxOpenAppSecret))
            throw Oops.Oh("微信小程序配置错误");

        var WechatApiClient = new WechatApiClient(new WechatApiClientOptions()
        {
            AppId = _wechatOptions.WxOpenAppId,
            AppSecret = _wechatOptions.WxOpenAppSecret
        });

        WechatApiClient.Configure(settings =>
        {
            settings.JsonSerializer = new FlurlNewtonsoftJsonSerializer();
        });

        return WechatApiClient;
    }
}

public partial class WechatApiHttpClientFactory
{
    internal class DelegatingFlurlClientFactory : IFlurlClientFactory
    {
        private readonly System.Net.Http.IHttpClientFactory _httpClientFactory;

        public DelegatingFlurlClientFactory(System.Net.Http.IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory ?? throw new ArgumentNullException(nameof(httpClientFactory));
        }

        public IFlurlClient Get(Url url)
        {
            return new FlurlClient(_httpClientFactory.CreateClient(url.ToUri().Host));
        }

        public void Dispose()
        {
            // Do Nothing
        }
    }
}
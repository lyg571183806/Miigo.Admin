





using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
namespace Miigo.Admin.Core;

public static class OAuthSetup
{
    /// <summary>
    /// 三方授权登录OAuth注册
    /// </summary>
    /// <param name="services"></param>
    public static void AddOAuth(this IServiceCollection services)
    {
        var authOpt = App.GetOptions<OAuthOptions>();
        services.AddAuthentication(options =>
            {
                options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddCookie(options =>
            {
                options.Cookie.SameSite = Microsoft.AspNetCore.Http.SameSiteMode.None;
                options.Cookie.SecurePolicy = Microsoft.AspNetCore.Http.CookieSecurePolicy.Always;
            })
            .AddWeixin(options =>
            {
                options.ClientId = authOpt.Weixin?.ClientId;
                options.ClientSecret = authOpt.Weixin?.ClientSecret;
            })
            .AddGitee(options =>
            {
                options.ClientId = authOpt.Gitee?.ClientId;
                options.ClientSecret = authOpt.Gitee?.ClientSecret;

                options.ClaimActions.MapJsonKey(OAuthClaim.GiteeAvatarUrl, "avatar_url");
            });
    }
}
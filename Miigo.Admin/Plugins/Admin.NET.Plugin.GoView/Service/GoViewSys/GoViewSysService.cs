
namespace Miigo.Admin.Plugin.GoView.Service;

/// <summary>
/// 系统登录服务
/// </summary>
[UnifyProvider("GoView")]
[ApiDescriptionSettings(GoViewConst.GroupName, Module = "goview", Name = "sys", Order = 500)]
public class GoViewSysService : IDynamicApiController
{
    private readonly SysAuthService _sysAuthService;
    private readonly SqlSugarRepository<SysUser> _sysUserRep;
    private readonly SysCacheService _sysCacheService;

    public GoViewSysService(SysAuthService sysAuthService,
        SqlSugarRepository<SysUser> sysUserRep,
        SysCacheService sysCacheService)
    {
        _sysAuthService = sysAuthService;
        _sysUserRep = sysUserRep;
        _sysCacheService = sysCacheService;
    }

    /// <summary>
    /// GoView 登录
    /// </summary>
    /// <returns></returns>
    [AllowAnonymous]
    [DisplayName("GoView 登录")]
    public async Task<GoViewLoginOutput> Login(GoViewLoginInput input)
    {
        _sysCacheService.Set(CommonConst.SysCaptcha, false);

        var loginResult = await _sysAuthService.Login(new LoginInput()
        {
            Account = input.Username,
            Password = input.Password,
        });

        _sysCacheService.Remove(CommonConst.SysCaptcha);

        var sysUser = await _sysUserRep.AsQueryable().Filter(null, true).FirstAsync(u => u.Account.Equals(input.Username));
        return new GoViewLoginOutput()
        {
            Userinfo = new GoViewLoginUserInfo
            {
                Id = sysUser.Id.ToString(),
                Username = sysUser.Account,
                Nickname = sysUser.NickName,
            },
            Token = new GoViewLoginToken
            {
                TokenValue = $"Bearer {loginResult.AccessToken}"
            }
        };
    }

    /// <summary>
    /// GoView 退出
    /// </summary>
    [DisplayName("GoView 退出")]
    public void GetLogout()
    {
        _sysAuthService.Logout();
    }

    /// <summary>
    /// 获取 OSS 上传接口
    /// </summary>
    /// <returns></returns>
    [AllowAnonymous]
    [ApiDescriptionSettings(Name = "GetOssInfo")]
    [DisplayName("获取 OSS 上传接口")]
    public Task<GoViewOssUrlOutput> GetOssInfo()
    {
        return Task.FromResult(new GoViewOssUrlOutput { BucketURL = "" });
    }
}
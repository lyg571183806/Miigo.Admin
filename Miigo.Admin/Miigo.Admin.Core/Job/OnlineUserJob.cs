
namespace Miigo.Admin.Core;

/// <summary>
/// 清理在线用户作业任务
/// </summary>
[JobDetail("job_onlineUser", Description = "清理在线用户", GroupName = "default", Concurrent = false)]
[PeriodSeconds(1, TriggerId = "trigger_onlineUser", Description = "清理在线用户", MaxNumberOfRuns = 1, RunOnStart = true)]
public class OnlineUserJob : IJob
{
    private readonly IServiceScopeFactory _scopeFactory;

    public OnlineUserJob(IServiceScopeFactory scopeFactory)
    {
        _scopeFactory = scopeFactory;
    }

    public async Task ExecuteAsync(JobExecutingContext context, CancellationToken stoppingToken)
    {
        using var serviceScope = _scopeFactory.CreateScope();

        var rep = serviceScope.ServiceProvider.GetService<SqlSugarRepository<SysOnlineUser>>();
        await rep.CopyNew().AsDeleteable().ExecuteCommandAsync(stoppingToken);

        var originColor = Console.ForegroundColor;
        Console.ForegroundColor = ConsoleColor.Red;
        Console.WriteLine("【" + DateTime.Now + "】服务重启清空在线用户");
        Console.ForegroundColor = originColor;

        // 缓存租户列表
        await serviceScope.ServiceProvider.GetService<SysTenantService>().CacheTenant();
    }
}
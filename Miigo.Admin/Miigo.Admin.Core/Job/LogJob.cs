
namespace Miigo.Admin.Core;

/// <summary>
/// 清理日志作业任务
/// </summary>
[JobDetail("job_log", Description = "清理操作日志", GroupName = "default", Concurrent = false)]
[Daily(TriggerId = "trigger_log", Description = "清理操作日志")]
public class LogJob : IJob
{
    private readonly IServiceScopeFactory _scopeFactory;

    public LogJob(IServiceScopeFactory scopeFactory)
    {
        _scopeFactory = scopeFactory;
    }

    public async Task ExecuteAsync(JobExecutingContext context, CancellationToken stoppingToken)
    {
        using var serviceScope = _scopeFactory.CreateScope();

        var logVisRep = serviceScope.ServiceProvider.GetService<SqlSugarRepository<SysLogVis>>();
        var logOpRep = serviceScope.ServiceProvider.GetService<SqlSugarRepository<SysLogOp>>();
        var logDiffRep = serviceScope.ServiceProvider.GetService<SqlSugarRepository<SysLogDiff>>();

        var daysAgo = 30; // 删除30天以前
        await logVisRep.CopyNew().AsDeleteable().Where(u => (DateTime)u.CreateTime < DateTime.Now.AddDays(-daysAgo)).ExecuteCommandAsync(stoppingToken); // 删除访问日志
        await logOpRep.CopyNew().AsDeleteable().Where(u => (DateTime)u.CreateTime < DateTime.Now.AddDays(-daysAgo)).ExecuteCommandAsync(stoppingToken); // 删除操作日志
        await logDiffRep.CopyNew().AsDeleteable().Where(u => (DateTime)u.CreateTime < DateTime.Now.AddDays(-daysAgo)).ExecuteCommandAsync(stoppingToken); // 删除差异日志
    }
}
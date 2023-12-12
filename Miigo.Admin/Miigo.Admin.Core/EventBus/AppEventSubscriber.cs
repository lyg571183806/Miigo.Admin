
namespace Miigo.Admin.Core;

/// <summary>
/// 事件订阅
/// </summary>
public class AppEventSubscriber : IEventSubscriber, ISingleton, IDisposable
{
    private readonly IServiceScope _serviceScope;

    public AppEventSubscriber(IServiceScopeFactory scopeFactory)
    {
        _serviceScope = scopeFactory.CreateScope();
    }

    /// <summary>
    /// 增加异常日志
    /// </summary>
    /// <param name="context"></param>
    /// <returns></returns>
    [EventSubscribe("Add:ExLog")]
    public async Task CreateExLog(EventHandlerExecutingContext context)
    {
        var rep = _serviceScope.ServiceProvider.GetRequiredService<SqlSugarRepository<SysLogEx>>();
        await rep.InsertAsync((SysLogEx)context.Source.Payload);
    }

    /// <summary>
    /// 发送异常邮件
    /// </summary>
    /// <param name="context"></param>
    /// <returns></returns>
    [EventSubscribe("Send:ErrorMail")]
    public async Task SendOrderErrorMail(EventHandlerExecutingContext context)
    {
        //var mailTempPath = Path.Combine(App.WebHostEnvironment.WebRootPath, "Temp\\ErrorMail.tp");
        //var mailTemp = File.ReadAllText(mailTempPath);
        //var mail = await _serviceScope.ServiceProvider.GetRequiredService<IViewEngine>().RunCompileFromCachedAsync(mailTemp, );

        var title = "Miigo.Admin 框架异常";
        await _serviceScope.ServiceProvider.GetRequiredService<SysMessageService>().SendEmail(JSON.Serialize(context.Source.Payload), title, true);
    }

    /// <summary>
    /// 释放服务作用域
    /// </summary>
    public void Dispose()
    {
        _serviceScope.Dispose();
    }
}
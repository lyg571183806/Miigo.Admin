
namespace Miigo.Admin.Core;

public static class CacheSetup
{
    /// <summary>
    /// 缓存注册（新生命Redis组件）
    /// </summary>
    /// <param name="services"></param>
    public static void AddCache(this IServiceCollection services)
    {
        ICache cache = Cache.Default;

        var cacheOptions = App.GetOptions<CacheOptions>();
        if (cacheOptions.CacheType == CacheTypeEnum.Redis.ToString())
        {
            cache = new FullRedis(new RedisOptions
            {
                Configuration = cacheOptions.Redis.Configuration,
                Prefix = cacheOptions.Redis.Prefix
            });
            if (cacheOptions.Redis.MaxMessageSize > 0)
                ((FullRedis)cache).MaxMessageSize = cacheOptions.Redis.MaxMessageSize;
        }

        services.AddSingleton(cache);
    }
}
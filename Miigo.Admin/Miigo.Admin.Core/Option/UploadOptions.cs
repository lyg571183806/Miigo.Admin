
namespace Miigo.Admin.Core;

/// <summary>
/// 文件上传配置选项
/// </summary>
public sealed class UploadOptions : IConfigurableOptions
{
    /// <summary>
    /// 路径
    /// </summary>
    public string Path { get; set; }

    /// <summary>
    /// 大小
    /// </summary>
    public long MaxSize { get; set; }

    /// <summary>
    /// 上传格式
    /// </summary>
    public List<string> ContentType { get; set; }

    /// <summary>
    /// 启用文件MD5验证
    /// </summary>
    /// <remarks>防止重复上传</remarks>
    public bool EnableMd5 { get; set; }
}
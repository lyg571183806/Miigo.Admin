
namespace Miigo.Admin.Core.Service;

public class FileInput : BaseIdInput
{
    /// <summary>
    /// 文件名称
    /// </summary>
    public string FileName { get; set; }

    /// <summary>
    /// 文件Url
    /// </summary>
    public string? Url { get; set; }
}

public class PageFileInput : BasePageInput
{
    /// <summary>
    /// 文件名称
    /// </summary>
    public string FileName { get; set; }

    /// <summary>
    /// 开始时间
    /// </summary>
    public DateTime? StartTime { get; set; }

    /// <summary>
    /// 结束时间
    /// </summary>
    public DateTime? EndTime { get; set; }
}

public class DeleteFileInput : BaseIdInput
{
}

public class UploadFileFromBase64Input
{
    /// <summary>
    /// 文件内容
    /// </summary>
    public string FileDataBase64 { get; set; }

    /// <summary>
    /// 文件类型( "image/jpeg",)
    /// </summary>
    public string ContentType { get; set; }

    /// <summary>
    /// 文件名称
    /// </summary>
    public string FileName { get; set; }

    /// <summary>
    /// 保存路径
    /// </summary>
    public string Path { get; set; }
}
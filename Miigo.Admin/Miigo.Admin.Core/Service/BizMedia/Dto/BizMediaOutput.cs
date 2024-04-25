
namespace Miigo.Admin.Core;

/// <summary>
/// 媒体输出参数
/// </summary>
public class BizMediaOutput
{
    /// <summary>
    /// 主键Id
    /// </summary>
    public long Id { get; set; }
    
    /// <summary>
    /// 文件名
    /// </summary>
    public string? Name { get; set; }
    
    /// <summary>
    /// 文件id
    /// </summary>
    public long? FileId { get; set; }
    
    /// <summary>
    /// 大小KB
    /// </summary>
    public string? Size { get; set; }
    
    /// <summary>
    /// 文件
    /// </summary>
    public string? Url { get; set; }
    public SysFile UrlAttachment { get; set; }
    
    /// <summary>
    /// 创建者姓名
    /// </summary>
    public string? CreateUserName { get; set; }
    
    /// <summary>
    /// 封面
    /// </summary>
    public string? Cover { get; set; }
    public SysFile CoverAttachment { get; set; }
    
    /// <summary>
    /// 修改者姓名
    /// </summary>
    public string? UpdateUserName { get; set; }
    
    /// <summary>
    /// 分类
    /// </summary>
    public long? Catalog { get; set; } 
    
    /// <summary>
    /// 分类 描述
    /// </summary>
    public string? CatalogName { get; set; } 
    
    /// <summary>
    /// 专辑
    /// </summary>
    public long? Album { get; set; } 
    
    /// <summary>
    /// 专辑 描述
    /// </summary>
    public string? AlbumName { get; set; } 
    
    /// <summary>
    /// 描述
    /// </summary>
    public string? Desc { get; set; }
    public DateTime? CreateTime { get;  set; }

    /// <summary>
    /// 观看数
    /// </summary>
    public int ViewNum { get; set; }

    /// <summary>
    /// 状态
    /// </summary>
    public string? Status { get; set; }

    /// <summary>
    /// 是否发布
    /// </summary>
    public bool IsPublish { get; set; }
}
 


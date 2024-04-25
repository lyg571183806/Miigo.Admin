namespace Miigo.Admin.Core;

/// <summary>
/// 媒体
/// </summary>
[SugarTable("BizMedia","媒体")]
public class BizMedia  : EntityTenant
{
    /// <summary>
    /// 文件id
    /// </summary>
    [SugarColumn(ColumnName = "FileId", ColumnDescription = "文件id")]
    public long? FileId { get; set; }
    
    /// <summary>
    /// 文件
    /// </summary>
    [SugarColumn(ColumnName = "Url", ColumnDescription = "文件", Length = 512)]
    public string? Url { get; set; }
    
    /// <summary>
    /// 封面
    /// </summary>
    [SugarColumn(ColumnName = "Cover", ColumnDescription = "封面", Length = 512)]
    public string? Cover { get; set; }
    
    /// <summary>
    /// 分类
    /// </summary>
    [SugarColumn(ColumnName = "Catalog", ColumnDescription = "分类")]
    public long? Catalog { get; set; }
    
    /// <summary>
    /// 专辑
    /// </summary>
    [SugarColumn(ColumnName = "Album", ColumnDescription = "专辑")]
    public long? Album { get; set; }
    
    /// <summary>
    /// 文件名
    /// </summary>
    [SugarColumn(ColumnName = "Name", ColumnDescription = "文件名", Length = 256)]
    public string? Name { get; set; }
    
    /// <summary>
    /// 描述
    /// </summary>
    [SugarColumn(ColumnName = "Desc", ColumnDescription = "描述", Length = 256)]
    public string? Desc { get; set; }
    
    /// <summary>
    /// 大小KB
    /// </summary>
    [SugarColumn(ColumnName = "Size", ColumnDescription = "大小KB", Length = 16)]
    public string? Size { get; set; }
    
    /// <summary>
    /// 创建者姓名
    /// </summary>
    [SugarColumn(ColumnName = "CreateUserName", ColumnDescription = "创建者姓名", Length = 64)]
    public string? CreateUserName { get; set; }
    
    /// <summary>
    /// 修改者姓名
    /// </summary>
    [SugarColumn(ColumnName = "UpdateUserName", ColumnDescription = "修改者姓名", Length = 64)]
    public string? UpdateUserName { get; set; }
    
    /// <summary>
    /// 观看数
    /// </summary>
    [Required]
    [SugarColumn(ColumnName = "ViewNum", ColumnDescription = "观看数")]
    public int ViewNum { get; set; }
    
    /// <summary>
    /// 状态
    /// </summary>
    [SugarColumn(ColumnName = "Status", ColumnDescription = "状态", Length = 50)]
    public string? Status { get; set; }
    
    /// <summary>
    /// 是否发布
    /// </summary>
    [Required]
    [SugarColumn(ColumnName = "IsPublish", ColumnDescription = "是否发布")]
    public bool IsPublish { get; set; }
    
}

namespace Miigo.Admin.Core;

/// <summary>
/// 媒体分类
/// </summary>
[SugarTable("BizCatalog","媒体分类")]
public class BizCatalog  : EntityTenant
{
    /// <summary>
    /// 名称
    /// </summary>
    [SugarColumn(ColumnName = "Name", ColumnDescription = "名称", Length = 128)]
    public string? Name { get; set; }
    
    /// <summary>
    /// 描述
    /// </summary>
    [SugarColumn(ColumnName = "Desc", ColumnDescription = "描述", Length = 256)]
    public string? Desc { get; set; }
    
    /// <summary>
    /// 图标
    /// </summary>
    [SugarColumn(ColumnName = "Logo", ColumnDescription = "图标", Length = 128)]
    public string? Logo { get; set; }
    
    /// <summary>
    /// 排序
    /// </summary>
    [SugarColumn(ColumnName = "Sort", ColumnDescription = "排序")]
    public int? Sort { get; set; }
    
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
    
}

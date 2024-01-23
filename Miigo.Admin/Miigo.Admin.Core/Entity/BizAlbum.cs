namespace Miigo.Admin.Core;

/// <summary>
/// 专辑
/// </summary>
[SugarTable("BizAlbum","专辑")]
public class BizAlbum  : EntityTenant
{
    /// <summary>
    /// 名称
    /// </summary>
    [SugarColumn(ColumnName = "name", ColumnDescription = "名称", Length = 32)]
    public string? name { get; set; }
    
    /// <summary>
    /// 描述
    /// </summary>
    [SugarColumn(ColumnName = "desc", ColumnDescription = "描述", Length = 256)]
    public string? desc { get; set; }
    
    /// <summary>
    /// 图标
    /// </summary>
    [SugarColumn(ColumnName = "logo", ColumnDescription = "图标", Length = 32)]
    public string? logo { get; set; }
    
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

namespace Miigo.Admin.Core;

/// <summary>
/// 系统文件表
/// </summary>
[SugarTable("SysFile","系统文件表")]
public class SysFile  : EntityTenant
{
    /// <summary>
    /// 提供者
    /// </summary>
    [SugarColumn(ColumnName = "Provider", ColumnDescription = "提供者", Length = 128)]
    public string? Provider { get; set; }
    
    /// <summary>
    /// 仓储名称
    /// </summary>
    [SugarColumn(ColumnName = "BucketName", ColumnDescription = "仓储名称", Length = 128)]
    public string? BucketName { get; set; }
    
    /// <summary>
    /// 文件名称
    /// </summary>
    [SugarColumn(ColumnName = "FileName", ColumnDescription = "文件名称", Length = 128)]
    public string? FileName { get; set; }
    
    /// <summary>
    /// 文件后缀
    /// </summary>
    [SugarColumn(ColumnName = "Suffix", ColumnDescription = "文件后缀", Length = 16)]
    public string? Suffix { get; set; }
    
    /// <summary>
    /// 存储路径
    /// </summary>
    [SugarColumn(ColumnName = "FilePath", ColumnDescription = "存储路径", Length = 128)]
    public string? FilePath { get; set; }
    
    /// <summary>
    /// 文件大小KB
    /// </summary>
    [SugarColumn(ColumnName = "SizeKb", ColumnDescription = "文件大小KB", Length = 16)]
    public string? SizeKb { get; set; }
    
    /// <summary>
    /// 文件大小信息
    /// </summary>
    [SugarColumn(ColumnName = "SizeInfo", ColumnDescription = "文件大小信息", Length = 64)]
    public string? SizeInfo { get; set; }
    
    /// <summary>
    /// 外链地址
    /// </summary>
    [SugarColumn(ColumnName = "Url", ColumnDescription = "外链地址", Length = 512)]
    public string? Url { get; set; }
    
    /// <summary>
    /// 文件MD5
    /// </summary>
    [SugarColumn(ColumnName = "FileMd5", ColumnDescription = "文件MD5", Length = 128)]
    public string? FileMd5 { get; set; }
    
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

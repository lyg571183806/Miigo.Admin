
namespace Miigo.Admin.Core.Service;

public class CreateSeedDataInput
{
    /// <summary>
    /// 库标识
    /// </summary>
    public string ConfigId { get; set; }

    /// <summary>
    /// 表名
    /// </summary>
    /// <example>student</example>
    public string TableName { get; set; }

    /// <summary>
    /// 实体名称
    /// </summary>
    /// <example>Student</example>
    public string EntityName { get; set; }

    /// <summary>
    /// 种子名称
    /// </summary>
    /// <example>Student</example>
    public string SeedDataName { get; set; }

    /// <summary>
    /// 导出位置
    /// </summary>
    /// <example>Web.Application</example>
    public string Position { get; set; }

    /// <summary>
    /// 后缀
    /// </summary>
    /// <example>Web.Application</example>
    public string Suffix { get; set; }
}
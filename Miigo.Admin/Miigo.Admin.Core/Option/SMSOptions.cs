
namespace Miigo.Admin.Core;

/// <summary>
/// 短信配置选项
/// </summary>
public sealed class SMSOptions : IConfigurableOptions
{
    /// <summary>
    /// Aliyun
    /// </summary>
    public SMSSettings Aliyun { get; set; }
}

public sealed class SMSSettings
{
    /// <summary>
    /// AccessKey ID
    /// </summary>
    public string AccessKeyId { get; set; }

    /// <summary>
    /// AccessKey Secret
    /// </summary>
    public string AccessKeySecret { get; set; }

    /// <summary>
    /// 短信签名
    /// </summary>
    public string SignName { get; set; }

    /// <summary>
    /// 短信模板
    /// </summary>
    public string TemplateCode { get; set; }
}
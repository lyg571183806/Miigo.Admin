using Miigo.Admin.Core;
using System.ComponentModel.DataAnnotations;
namespace Miigo.Admin.Core;

    /// <summary>
    /// 媒体基础输入参数
    /// </summary>
    public class BizMediaBaseInput
    {
        /// <summary>
        /// 文件名
        /// </summary>
        public virtual string? Name { get; set; }
        
        /// <summary>
        /// 文件id
        /// </summary>
        public virtual long? FileId { get; set; }
        
        /// <summary>
        /// 大小KB
        /// </summary>
        public virtual string? Size { get; set; }
        
        /// <summary>
        /// 文件
        /// </summary>
        public virtual string? Url { get; set; }
        
        /// <summary>
        /// 创建者姓名
        /// </summary>
        public virtual string? CreateUserName { get; set; }
        
        /// <summary>
        /// 封面
        /// </summary>
        public virtual string? Cover { get; set; }
        
        /// <summary>
        /// 修改者姓名
        /// </summary>
        public virtual string? UpdateUserName { get; set; }
        
        /// <summary>
        /// 分类
        /// </summary>
        public virtual long? Catalog { get; set; }
        
        /// <summary>
        /// 专辑
        /// </summary>
        public virtual long? Album { get; set; }
        
        /// <summary>
        /// 描述
        /// </summary>
        public virtual string? Desc { get; set; }
        
    }

    /// <summary>
    /// 媒体分页查询输入参数
    /// </summary>
    public class BizMediaInput : BasePageInput
    {
        /// <summary>
        /// 关键字查询
        /// </summary>
        public string? SearchKey { get; set; }

        /// <summary>
        /// 文件名
        /// </summary>
        public string? Name { get; set; }
        
        /// <summary>
        /// 文件id
        /// </summary>
        public long? FileId { get; set; }
        
        /// <summary>
        /// 文件
        /// </summary>
        public string? Url { get; set; }
        
        /// <summary>
        /// 创建者姓名
        /// </summary>
        public string? CreateUserName { get; set; }
        
        /// <summary>
        /// 修改者姓名
        /// </summary>
        public string? UpdateUserName { get; set; }
        
        /// <summary>
        /// 分类
        /// </summary>
        public long? Catalog { get; set; }
        
        /// <summary>
        /// 专辑
        /// </summary>
        public long? Album { get; set; }
        
        /// <summary>
        /// 描述
        /// </summary>
        public string? Desc { get; set; }
        
    }

    /// <summary>
    /// 媒体增加输入参数
    /// </summary>
    public class AddBizMediaInput : BizMediaBaseInput
    {
    }

    /// <summary>
    /// 媒体删除输入参数
    /// </summary>
    public class DeleteBizMediaInput : BaseIdInput
    {
    }

    /// <summary>
    /// 媒体更新输入参数
    /// </summary>
    public class UpdateBizMediaInput : BizMediaBaseInput
    {
        /// <summary>
        /// 主键Id
        /// </summary>
        [Required(ErrorMessage = "主键Id不能为空")]
        public long Id { get; set; }
        
    }

    /// <summary>
    /// 媒体主键查询输入参数
    /// </summary>
    public class QueryByIdBizMediaInput : DeleteBizMediaInput
    {

    }

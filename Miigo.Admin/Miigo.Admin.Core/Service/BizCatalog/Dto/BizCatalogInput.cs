using Miigo.Admin.Core;
using System.ComponentModel.DataAnnotations;
namespace Miigo.Admin.Core;

    /// <summary>
    /// 分类基础输入参数
    /// </summary>
    public class BizCatalogBaseInput
    {
        /// <summary>
        /// 名称
        /// </summary>
        public virtual string? Name { get; set; }
        
        /// <summary>
        /// 描述
        /// </summary>
        public virtual string? Desc { get; set; }
        
        /// <summary>
        /// 图标
        /// </summary>
        public virtual string? Logo { get; set; }
        
        /// <summary>
        /// 排序
        /// </summary>
        public virtual int? Sort { get; set; }
        
        /// <summary>
        /// 创建者姓名
        /// </summary>
        public virtual string? CreateUserName { get; set; }
        
        /// <summary>
        /// 修改者姓名
        /// </summary>
        public virtual string? UpdateUserName { get; set; }
        
    }

    /// <summary>
    /// 分类分页查询输入参数
    /// </summary>
    public class BizCatalogInput : BasePageInput
    {
        /// <summary>
        /// 关键字查询
        /// </summary>
        public string? SearchKey { get; set; }

        /// <summary>
        /// 名称
        /// </summary>
        public string? Name { get; set; }
        
        /// <summary>
        /// 描述
        /// </summary>
        public string? Desc { get; set; }
        
    }

    /// <summary>
    /// 分类增加输入参数
    /// </summary>
    public class AddBizCatalogInput : BizCatalogBaseInput
    {
    }

    /// <summary>
    /// 分类删除输入参数
    /// </summary>
    public class DeleteBizCatalogInput : BaseIdInput
    {
    }

    /// <summary>
    /// 分类更新输入参数
    /// </summary>
    public class UpdateBizCatalogInput : BizCatalogBaseInput
    {
        /// <summary>
        /// 主键Id
        /// </summary>
        [Required(ErrorMessage = "主键Id不能为空")]
        public long Id { get; set; }
        
    }

    /// <summary>
    /// 分类主键查询输入参数
    /// </summary>
    public class QueryByIdBizCatalogInput : DeleteBizCatalogInput
    {

    }

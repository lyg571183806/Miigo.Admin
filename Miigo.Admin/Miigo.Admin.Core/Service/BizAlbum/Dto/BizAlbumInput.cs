using Miigo.Admin.Core;
using System.ComponentModel.DataAnnotations;
namespace Miigo.Admin.Core;

    /// <summary>
    /// 专辑基础输入参数
    /// </summary>
    public class BizAlbumBaseInput
    {
        /// <summary>
        /// 名称
        /// </summary>
        public virtual string? name { get; set; }
        
        /// <summary>
        /// 描述
        /// </summary>
        public virtual string? desc { get; set; }
        
        /// <summary>
        /// 图标
        /// </summary>
        public virtual string? logo { get; set; }
        
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
    /// 专辑分页查询输入参数
    /// </summary>
    public class BizAlbumInput : BasePageInput
    {
        /// <summary>
        /// 关键字查询
        /// </summary>
        public string? SearchKey { get; set; }

        /// <summary>
        /// 名称
        /// </summary>
        public string? name { get; set; }
        
        /// <summary>
        /// 描述
        /// </summary>
        public string? desc { get; set; }
        
        /// <summary>
        /// 图标
        /// </summary>
        public string? logo { get; set; }
        
        /// <summary>
        /// 创建者姓名
        /// </summary>
        public string? CreateUserName { get; set; }
        
        /// <summary>
        /// 修改者姓名
        /// </summary>
        public string? UpdateUserName { get; set; }
        
    }

    /// <summary>
    /// 专辑增加输入参数
    /// </summary>
    public class AddBizAlbumInput : BizAlbumBaseInput
    {
    }

    /// <summary>
    /// 专辑删除输入参数
    /// </summary>
    public class DeleteBizAlbumInput : BaseIdInput
    {
    }

    /// <summary>
    /// 专辑更新输入参数
    /// </summary>
    public class UpdateBizAlbumInput : BizAlbumBaseInput
    {
        /// <summary>
        /// 主键Id
        /// </summary>
        [Required(ErrorMessage = "主键Id不能为空")]
        public long Id { get; set; }
        
    }

    /// <summary>
    /// 专辑主键查询输入参数
    /// </summary>
    public class QueryByIdBizAlbumInput : DeleteBizAlbumInput
    {

    }

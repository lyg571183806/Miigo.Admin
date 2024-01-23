namespace Miigo.Admin.Core;

    /// <summary>
    /// 分类输出参数
    /// </summary>
    public class BizCatalogDto
    {
        /// <summary>
        /// 主键Id
        /// </summary>
        public long Id { get; set; }
        
        /// <summary>
        /// 名称
        /// </summary>
        public string? Name { get; set; }
        
        /// <summary>
        /// 描述
        /// </summary>
        public string? Desc { get; set; }
        
        /// <summary>
        /// 图标
        /// </summary>
        public string? Logo { get; set; }
        
        /// <summary>
        /// 排序
        /// </summary>
        public int? Sort { get; set; }
        
        /// <summary>
        /// 创建者姓名
        /// </summary>
        public string? CreateUserName { get; set; }
        
        /// <summary>
        /// 修改者姓名
        /// </summary>
        public string? UpdateUserName { get; set; }
        
    }

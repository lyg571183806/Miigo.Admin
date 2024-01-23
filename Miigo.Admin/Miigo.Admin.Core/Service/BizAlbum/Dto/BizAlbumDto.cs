namespace Miigo.Admin.Core;

    /// <summary>
    /// 专辑输出参数
    /// </summary>
    public class BizAlbumDto
    {
        /// <summary>
        /// 主键Id
        /// </summary>
        public long Id { get; set; }
        
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

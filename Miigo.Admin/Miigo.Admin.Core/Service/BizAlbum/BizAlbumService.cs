
namespace Miigo.Admin.Core.Service;
/// <summary>
/// 专辑服务
/// </summary>
[ApiDescriptionSettings(Order = 100)]
public class BizAlbumService : IDynamicApiController, ITransient
{
    private readonly SqlSugarRepository<BizAlbum> _rep;
    public BizAlbumService(SqlSugarRepository<BizAlbum> rep)
    {
        _rep = rep;
    }

    /// <summary>
    /// 分页查询专辑
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Page")]
    public async Task<SqlSugarPagedList<BizAlbumOutput>> Page(BizAlbumInput input)
    {
        var query= _rep.AsQueryable()
            .WhereIF(!string.IsNullOrWhiteSpace(input.SearchKey), u =>
                u.Name.Contains(input.SearchKey.Trim())
                || u.Desc.Contains(input.SearchKey.Trim())
                || u.Logo.Contains(input.SearchKey.Trim())
                || u.CreateUserName.Contains(input.SearchKey.Trim())
                || u.UpdateUserName.Contains(input.SearchKey.Trim())
            )
            .WhereIF(!string.IsNullOrWhiteSpace(input.name), u => u.Name.Contains(input.name.Trim()))
            .WhereIF(!string.IsNullOrWhiteSpace(input.desc), u => u.Desc.Contains(input.desc.Trim()))
            .WhereIF(!string.IsNullOrWhiteSpace(input.logo), u => u.Logo.Contains(input.logo.Trim()))
            .WhereIF(!string.IsNullOrWhiteSpace(input.CreateUserName), u => u.CreateUserName.Contains(input.CreateUserName.Trim()))
            .WhereIF(!string.IsNullOrWhiteSpace(input.UpdateUserName), u => u.UpdateUserName.Contains(input.UpdateUserName.Trim()))
            //处理外键和TreeSelector相关字段的连接
            .Select((u)=> new BizAlbumOutput{
                Id = u.Id, 
                name = u.Name, 
                desc = u.Desc, 
                logo = u.Logo, 
                CreateUserName = u.CreateUserName, 
                UpdateUserName = u.UpdateUserName, 
            })
            //.Mapper(c => c.logoAttachment, c => c.logo)
;
        query = query.OrderBuilder(input, "", "CreateTime");
        return await query.ToPagedListAsync(input.Page, input.PageSize);
    }

    /// <summary>
    /// 增加专辑
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Add")]
    public async Task Add(AddBizAlbumInput input)
    {
        var entity = input.Adapt<BizAlbum>();
        await _rep.InsertAsync(entity);
    }

    /// <summary>
    /// 删除专辑
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Delete")]
    public async Task Delete(DeleteBizAlbumInput input)
    {
        var entity = await _rep.GetFirstAsync(u => u.Id == input.Id) ?? throw Oops.Oh(ErrorCodeEnum.D1002);
        await _rep.FakeDeleteAsync(entity);   //假删除
        //await _rep.DeleteAsync(entity);   //真删除
    }

    /// <summary>
    /// 更新专辑
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Update")]
    public async Task Update(UpdateBizAlbumInput input)
    {
        var entity = input.Adapt<BizAlbum>();
        await _rep.AsUpdateable(entity).IgnoreColumns(ignoreAllNullColumns: true).ExecuteCommandAsync();
    }

    /// <summary>
    /// 获取专辑
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "Detail")]
    public async Task<BizAlbum> Get([FromQuery] QueryByIdBizAlbumInput input)
    {
        return await _rep.GetFirstAsync(u => u.Id == input.Id);
    }

    /// <summary>
    /// 获取专辑列表
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "List")]
    public async Task<List<BizAlbumOutput>> List([FromQuery] BizAlbumInput input)
    {
        return await _rep.AsQueryable().Select<BizAlbumOutput>().ToListAsync();
    }


    /// <summary>
    /// 上传图标
    /// </summary>
    /// <param name="file"></param>
    /// <returns></returns>
    [ApiDescriptionSettings(Name = "Uploadlogo"), HttpPost]
    public async Task<FileOutput> Uploadlogo([Required] IFormFile file)
    {
            var service = App.GetService<SysFileService>();
            return await service.UploadFile(file, "upload/logo"); 
    } 



}


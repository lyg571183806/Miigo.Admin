
namespace Miigo.Admin.Core.Service;
/// <summary>
/// 媒体服务
/// </summary>
[ApiDescriptionSettings(Order = 100)]
public class BizMediaService : IDynamicApiController, ITransient
{
    private readonly SqlSugarRepository<BizMedia> _rep;
    public BizMediaService(SqlSugarRepository<BizMedia> rep)
    {
        _rep = rep;
    }

    /// <summary>
    /// 分页查询媒体
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Page")]
    public async Task<SqlSugarPagedList<BizMediaOutput>> Page(BizMediaInput input)
    {
        var query= _rep.AsQueryable()
            .Where(u=>!u.IsDelete)
            .WhereIF(!string.IsNullOrWhiteSpace(input.SearchKey), u =>
                u.Name.Contains(input.SearchKey.Trim())
                || u.Url.Contains(input.SearchKey.Trim())
                || u.CreateUserName.Contains(input.SearchKey.Trim())
                || u.UpdateUserName.Contains(input.SearchKey.Trim())
                || u.Desc.Contains(input.SearchKey.Trim())
            )
            .WhereIF(!string.IsNullOrWhiteSpace(input.Name), u => u.Name.Contains(input.Name.Trim()))
            .WhereIF(input.FileId>0, u => u.FileId == input.FileId)
            .WhereIF(!string.IsNullOrWhiteSpace(input.Url), u => u.Url.Contains(input.Url.Trim()))
            .WhereIF(!string.IsNullOrWhiteSpace(input.CreateUserName), u => u.CreateUserName.Contains(input.CreateUserName.Trim()))
            .WhereIF(!string.IsNullOrWhiteSpace(input.UpdateUserName), u => u.UpdateUserName.Contains(input.UpdateUserName.Trim()))
            .WhereIF(input.Catalog>0, u => u.Catalog == input.Catalog)
            .WhereIF(input.Album>0, u => u.Album == input.Album)
            .WhereIF(!string.IsNullOrWhiteSpace(input.Desc), u => u.Desc.Contains(input.Desc.Trim()))
            //处理外键和TreeSelector相关字段的连接
            .LeftJoin<BizCatalog>((u, catalog) => u.Catalog == catalog.Id )
            .LeftJoin<BizAlbum>((u, catalog, album) => u.Album == album.Id )
            .Select((u, catalog, album)=> new BizMediaOutput{
                Id = u.Id, 
                Name = u.Name, 
                FileId = u.FileId, 
                Size = u.Size, 
                Url = u.Url, 
                CreateUserName = u.CreateUserName, 
                Cover = u.Cover, 
                UpdateUserName = u.UpdateUserName, 
                Catalog = u.Catalog, 
                CatalogName = catalog.Name,
                Album = u.Album, 
                AlbumName = album.Name,
                Desc = u.Desc,
                CreateTime = u.CreateTime
            })
            //.Mapper(c => c.UrlAttachment, c => c.Url)
            //.Mapper(c => c.CoverAttachment, c => c.Cover)
;
        query = query.OrderBuilder(input, "", "CreateTime");
        return await query.ToPagedListAsync(input.Page, input.PageSize);
    }

    /// <summary>
    /// 增加媒体
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Add")]
    public async Task Add(AddBizMediaInput input)
    {
        var entity = input.Adapt<BizMedia>();
        await _rep.InsertAsync(entity);
    }

    /// <summary>
    /// 批量增加媒体
    /// </summary>
    /// <param name="inputList"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "BatchAdd")]
    public async Task BatchAdd(List<AddBizMediaInput> inputList)
    {
        var entityList = inputList.Adapt<List<BizMedia>>();
        await _rep.InsertRangeAsync(entityList);
    }

    /// <summary>
    /// 删除媒体
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Delete")]
    public async Task Delete(DeleteBizMediaInput input)
    {
        var entity = await _rep.GetFirstAsync(u => u.Id == input.Id) ?? throw Oops.Oh(ErrorCodeEnum.D1002);
        await _rep.FakeDeleteAsync(entity);   //假删除
        //await _rep.DeleteAsync(entity);   //真删除
    }

    /// <summary>
    /// 更新媒体
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Update")]
    public async Task Update(UpdateBizMediaInput input)
    {
        var entity = input.Adapt<BizMedia>();
        await _rep.AsUpdateable(entity).IgnoreColumns(ignoreAllNullColumns: true).ExecuteCommandAsync();
    }

    /// <summary>
    /// 获取媒体
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "Detail")]
    public async Task<BizMedia> Get([FromQuery] QueryByIdBizMediaInput input)
    {
        return await _rep.GetFirstAsync(u => u.Id == input.Id);
    }

    /// <summary>
    /// 获取媒体列表
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "List")]
    public async Task<List<BizMediaOutput>> List([FromQuery] BizMediaInput input)
    {
        return await _rep.AsQueryable().Select<BizMediaOutput>().ToListAsync();
    }

    /// <summary>
    /// 获取分类列表
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [ApiDescriptionSettings(Name = "BizCatalogCatalogDropdown"), HttpGet]
    public async Task<dynamic> BizCatalogCatalogDropdown()
    {
        return await _rep.Context.Queryable<BizCatalog>()
                .Select(u => new
                {
                    Label = u.Name,
                    Value = u.Id
                }
                ).ToListAsync();
    }
    /// <summary>
    /// 获取专辑列表
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [ApiDescriptionSettings(Name = "BizAlbumAlbumDropdown"), HttpGet]
    public async Task<dynamic> BizAlbumAlbumDropdown()
    {
        return await _rep.Context.Queryable<BizAlbum>()
                .Select(u => new
                {
                    Label = u.Name,
                    Value = u.Id
                }
                ).ToListAsync();
    }

    /// <summary>
    /// 上传文件
    /// </summary>
    /// <param name="file"></param>
    /// <returns></returns>
    [ApiDescriptionSettings(Name = "UploadUrl"), HttpPost]
    public async Task<FileOutput> UploadUrl([Required] IFormFile file)
    {
            var service = App.GetService<SysFileService>();
            return await service.UploadFile(file, "upload/Url"); 
    } 
    /// <summary>
    /// 上传封面
    /// </summary>
    /// <param name="file"></param>
    /// <returns></returns>
    [ApiDescriptionSettings(Name = "UploadCover"), HttpPost]
    public async Task<FileOutput> UploadCover([Required] IFormFile file)
    {
            var service = App.GetService<SysFileService>();
            return await service.UploadFile(file, "upload/Cover"); 
    } 



}


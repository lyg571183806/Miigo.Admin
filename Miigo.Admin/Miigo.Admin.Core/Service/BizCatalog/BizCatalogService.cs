
using AngleSharp.Io;
using Microsoft.AspNetCore.Http.Headers;
using Microsoft.Extensions.Primitives;
using Nest;

namespace Miigo.Admin.Core.Service;
/// <summary>
/// 分类服务
/// </summary>
[ApiDescriptionSettings(Order = 100)]
public class BizCatalogService : IDynamicApiController, ITransient
{
    private readonly SqlSugarRepository<BizCatalog> _rep;
    public BizCatalogService(SqlSugarRepository<BizCatalog> rep)
    {
        _rep = rep;
    }

    /// <summary>
    /// 分页查询分类
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Page")]
    public async Task<SqlSugarPagedList<BizCatalogOutput>> Page(BizCatalogInput input)
    {
        var query= _rep.AsQueryable()
            .WhereIF(!string.IsNullOrWhiteSpace(input.SearchKey), u =>
                u.Name.Contains(input.SearchKey.Trim())
                || u.Desc.Contains(input.SearchKey.Trim())
            )
            .WhereIF(!string.IsNullOrWhiteSpace(input.Name), u => u.Name.Contains(input.Name.Trim()))
            .WhereIF(!string.IsNullOrWhiteSpace(input.Desc), u => u.Desc.Contains(input.Desc.Trim()))
            //处理外键和TreeSelector相关字段的连接
            .Select((u)=> new BizCatalogOutput{
                Id = u.Id, 
                Name = u.Name, 
                Desc = u.Desc, 
                Logo = u.Logo, 
                Sort = u.Sort, 
                CreateUserName = u.CreateUserName, 
                UpdateUserName = u.UpdateUserName, 
            })
            //.Mapper(c => c.LogoAttachment, c => c.Logo)
;
        query = query.OrderBuilder(input, "", "CreateTime");
        return await query.ToPagedListAsync(input.Page, input.PageSize);
    }

    /// <summary>
    /// 增加分类
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Add")]
    public async Task Add(AddBizCatalogInput input)
    {
        var entity = input.Adapt<BizCatalog>();
        await _rep.InsertAsync(entity);
    }

    /// <summary>
    /// 删除分类
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Delete")]
    public async Task Delete(DeleteBizCatalogInput input)
    {
        var entity = await _rep.GetFirstAsync(u => u.Id == input.Id) ?? throw Oops.Oh(ErrorCodeEnum.D1002);
        await _rep.FakeDeleteAsync(entity);   //假删除
        //await _rep.DeleteAsync(entity);   //真删除
    }

    /// <summary>
    /// 更新分类
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Update")]
    public async Task Update(UpdateBizCatalogInput input)
    {
        var entity = input.Adapt<BizCatalog>();
        await _rep.AsUpdateable(entity).IgnoreColumns(ignoreAllNullColumns: true).ExecuteCommandAsync();
    }

    /// <summary>
    /// 获取分类
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "Detail")]
    public async Task<BizCatalog> Get([FromQuery] QueryByIdBizCatalogInput input)
    {
        return await _rep.GetFirstAsync(u => u.Id == input.Id);
    }

    /// <summary>
    /// 获取分类列表
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "List")]
    public async Task<List<BizCatalogOutput>> List([FromQuery] BizCatalogInput input)
    {
        return await _rep.AsQueryable().Select<BizCatalogOutput>().ToListAsync();
    }


    /// <summary>
    /// 上传图标
    /// </summary>
    /// <param name="file"></param>
    /// <returns></returns>
    [ApiDescriptionSettings(Name = "UploadLogo"), HttpPost]
    public async Task<FileOutput> UploadLogo([Required] IFormFile file)
    {
            var service = App.GetService<SysFileService>();
            return await service.UploadFile(file, "upload/Logo"); 
    }


    /// <summary>
    /// 分页查询分类
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "GetList")]
    //[AllowAnonymous]
    [Authorize(AuthenticationSchemes = SignatureAuthenticationDefaults.SimpleAuthenticationScheme)]
    public async Task<SqlSugarPagedList<BizCatalogOutput>> GetList(BizCatalogInput input)
    {

        var query = _rep.AsQueryable()
            .WhereIF(!string.IsNullOrWhiteSpace(input.SearchKey), u =>
                u.Name.Contains(input.SearchKey.Trim())
                || u.Desc.Contains(input.SearchKey.Trim())
            )
            .WhereIF(!string.IsNullOrWhiteSpace(input.Name), u => u.Name.Contains(input.Name.Trim()))
            .WhereIF(!string.IsNullOrWhiteSpace(input.Desc), u => u.Desc.Contains(input.Desc.Trim()))
            //处理外键和TreeSelector相关字段的连接
            .Select((u) => new BizCatalogOutput
            {
                Id = u.Id,
                Name = u.Name,
                Desc = u.Desc,
                Logo = u.Logo,
                Sort = u.Sort,
                CreateUserName = u.CreateUserName,
                UpdateUserName = u.UpdateUserName,
            })
//.Mapper(c => c.LogoAttachment, c => c.Logo)
;
        query = query.OrderBuilder(input, "", "CreateTime");
        return await query.ToPagedListAsync(input.Page, input.PageSize);
    }


}


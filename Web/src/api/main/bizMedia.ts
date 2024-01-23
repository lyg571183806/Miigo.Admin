import request from '/@/utils/request';
enum Api {
  AddBizMedia = '/api/bizMedia/add',
  DeleteBizMedia = '/api/bizMedia/delete',
  UpdateBizMedia = '/api/bizMedia/update',
  PageBizMedia = '/api/bizMedia/page',
  UploadUrl = '/api/bizMedia/UploadUrl',
  UploadCover = '/api/bizMedia/UploadCover',
  GetBizCatalogCatalogDropdown = '/api/bizMedia/BizCatalogCatalogDropdown',
  GetBizAlbumAlbumDropdown = '/api/bizMedia/BizAlbumAlbumDropdown',
}

// 增加媒体
export const addBizMedia = (params?: any) =>
	request({
		url: Api.AddBizMedia,
		method: 'post',
		data: params,
	});

// 删除媒体
export const deleteBizMedia = (params?: any) => 
	request({
			url: Api.DeleteBizMedia,
			method: 'post',
			data: params,
		});

// 编辑媒体
export const updateBizMedia = (params?: any) => 
	request({
			url: Api.UpdateBizMedia,
			method: 'post',
			data: params,
		});

// 分页查询媒体
export const pageBizMedia = (params?: any) => 
	request({
			url: Api.PageBizMedia,
			method: 'post',
			data: params,
		});

	/**
	* 上传文件 
	*/
export const uploadUrl = (params: any) =>
		uploadFileHandle(params, Api.UploadUrl)
	/**
	* 上传封面 
	*/
export const uploadCover = (params: any) =>
		uploadFileHandle(params, Api.UploadCover)
export const getBizCatalogCatalogDropdown = () =>
		request({
		url: Api.GetBizCatalogCatalogDropdown,
		method: 'get'
		});
export const getBizAlbumAlbumDropdown = () =>
		request({
		url: Api.GetBizAlbumAlbumDropdown,
		method: 'get'
		});

	export const uploadFileHandle = (params: any, url: string) => { 
	const formData = new window.FormData();
	formData.append('file', params.file);
	//自定义参数
	if (params.data) {
		Object.keys(params.data).forEach((key) => {
			const value = params.data![key];
			if (Array.isArray(value)) {
				value.forEach((item) => {
					formData.append(`${key}[]`, item);
				});
				return;
			}
			formData.append(key, params.data![key]);
		});
	}
	return request({
		url: url,
		method: 'POST',
		data: formData,
		headers: {
			'Content-type': 'multipart/form-data;charset=UTF-8',
			// ts-ignore
			ignoreCancelToken: true,
		},
	});
};

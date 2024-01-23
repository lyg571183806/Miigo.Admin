import request from '/@/utils/request';
enum Api {
  AddBizCatalog = '/api/bizCatalog/add',
  DeleteBizCatalog = '/api/bizCatalog/delete',
  UpdateBizCatalog = '/api/bizCatalog/update',
  PageBizCatalog = '/api/bizCatalog/page',
  UploadLogo = '/api/bizCatalog/UploadLogo',
}

// 增加分类
export const addBizCatalog = (params?: any) =>
	request({
		url: Api.AddBizCatalog,
		method: 'post',
		data: params,
	});

// 删除分类
export const deleteBizCatalog = (params?: any) => 
	request({
			url: Api.DeleteBizCatalog,
			method: 'post',
			data: params,
		});

// 编辑分类
export const updateBizCatalog = (params?: any) => 
	request({
			url: Api.UpdateBizCatalog,
			method: 'post',
			data: params,
		});

// 分页查询分类
export const pageBizCatalog = (params?: any) => 
	request({
			url: Api.PageBizCatalog,
			method: 'post',
			data: params,
		});

	/**
	* 上传图标 
	*/
export const uploadLogo = (params: any) =>
		uploadFileHandle(params, Api.UploadLogo)

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

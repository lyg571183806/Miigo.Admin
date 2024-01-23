import request from '/@/utils/request';
enum Api {
  AddBizAlbum = '/api/bizAlbum/add',
  DeleteBizAlbum = '/api/bizAlbum/delete',
  UpdateBizAlbum = '/api/bizAlbum/update',
  PageBizAlbum = '/api/bizAlbum/page',
  Uploadlogo = '/api/bizAlbum/Uploadlogo',
}

// 增加专辑
export const addBizAlbum = (params?: any) =>
	request({
		url: Api.AddBizAlbum,
		method: 'post',
		data: params,
	});

// 删除专辑
export const deleteBizAlbum = (params?: any) => 
	request({
			url: Api.DeleteBizAlbum,
			method: 'post',
			data: params,
		});

// 编辑专辑
export const updateBizAlbum = (params?: any) => 
	request({
			url: Api.UpdateBizAlbum,
			method: 'post',
			data: params,
		});

// 分页查询专辑
export const pageBizAlbum = (params?: any) => 
	request({
			url: Api.PageBizAlbum,
			method: 'post',
			data: params,
		});

	/**
	* 上传图标 
	*/
export const uploadlogo = (params: any) =>
		uploadFileHandle(params, Api.Uploadlogo)

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

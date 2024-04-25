/* tslint:disable */
/* eslint-disable */
/**
 * Miigo.Admin
 * 前后端分离架构(.NET8/Vue3)<br/>
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AddBizAlbumInput } from '../models';
import { AdminResultBizAlbum } from '../models';
import { AdminResultFileOutput } from '../models';
import { AdminResultListBizAlbumOutput } from '../models';
import { AdminResultSqlSugarPagedListBizAlbumOutput } from '../models';
import { BizAlbumInput } from '../models';
import { DeleteBizAlbumInput } from '../models';
import { UpdateBizAlbumInput } from '../models';
/**
 * BizAlbumApi - axios parameter creator
 * @export
 */
export const BizAlbumApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 增加专辑
         * @param {AddBizAlbumInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiBizAlbumAddPost: async (body?: AddBizAlbumInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/bizAlbum/add`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 删除专辑
         * @param {DeleteBizAlbumInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiBizAlbumDeletePost: async (body?: DeleteBizAlbumInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/bizAlbum/delete`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 获取专辑
         * @param {number} id 主键Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiBizAlbumDetailGet: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiBizAlbumDetailGet.');
            }
            const localVarPath = `/api/bizAlbum/detail`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (id !== undefined) {
                localVarQueryParameter['Id'] = id;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 分页查询专辑
         * @param {BizAlbumInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiBizAlbumGetListPost: async (body?: BizAlbumInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/bizAlbum/getList`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 获取专辑列表
         * @param {string} [searchKey] 关键字查询
         * @param {string} [name] 名称
         * @param {string} [desc] 描述
         * @param {string} [logo] 图标
         * @param {string} [createUserName] 创建者姓名
         * @param {string} [updateUserName] 修改者姓名
         * @param {number} [page] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [field] 排序字段
         * @param {string} [order] 排序方向
         * @param {string} [descStr] 降序排序
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiBizAlbumListGet: async (searchKey?: string, name?: string, desc?: string, logo?: string, createUserName?: string, updateUserName?: string, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/bizAlbum/list`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (searchKey !== undefined) {
                localVarQueryParameter['SearchKey'] = searchKey;
            }

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (desc !== undefined) {
                localVarQueryParameter['desc'] = desc;
            }

            if (logo !== undefined) {
                localVarQueryParameter['logo'] = logo;
            }

            if (createUserName !== undefined) {
                localVarQueryParameter['CreateUserName'] = createUserName;
            }

            if (updateUserName !== undefined) {
                localVarQueryParameter['UpdateUserName'] = updateUserName;
            }

            if (page !== undefined) {
                localVarQueryParameter['Page'] = page;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['PageSize'] = pageSize;
            }

            if (field !== undefined) {
                localVarQueryParameter['Field'] = field;
            }

            if (order !== undefined) {
                localVarQueryParameter['Order'] = order;
            }

            if (descStr !== undefined) {
                localVarQueryParameter['DescStr'] = descStr;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 分页查询专辑
         * @param {BizAlbumInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiBizAlbumPagePost: async (body?: BizAlbumInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/bizAlbum/page`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 更新专辑
         * @param {UpdateBizAlbumInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiBizAlbumUpdatePost: async (body?: UpdateBizAlbumInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/bizAlbum/update`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 上传图标
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiBizAlbumUploadlogoPostForm: async (file?: Blob, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/bizAlbum/uploadlogo`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }


            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }

            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BizAlbumApi - functional programming interface
 * @export
 */
export const BizAlbumApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 增加专辑
         * @param {AddBizAlbumInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiBizAlbumAddPost(body?: AddBizAlbumInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await BizAlbumApiAxiosParamCreator(configuration).apiBizAlbumAddPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 删除专辑
         * @param {DeleteBizAlbumInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiBizAlbumDeletePost(body?: DeleteBizAlbumInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await BizAlbumApiAxiosParamCreator(configuration).apiBizAlbumDeletePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取专辑
         * @param {number} id 主键Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiBizAlbumDetailGet(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultBizAlbum>>> {
            const localVarAxiosArgs = await BizAlbumApiAxiosParamCreator(configuration).apiBizAlbumDetailGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 分页查询专辑
         * @param {BizAlbumInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiBizAlbumGetListPost(body?: BizAlbumInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultSqlSugarPagedListBizAlbumOutput>>> {
            const localVarAxiosArgs = await BizAlbumApiAxiosParamCreator(configuration).apiBizAlbumGetListPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取专辑列表
         * @param {string} [searchKey] 关键字查询
         * @param {string} [name] 名称
         * @param {string} [desc] 描述
         * @param {string} [logo] 图标
         * @param {string} [createUserName] 创建者姓名
         * @param {string} [updateUserName] 修改者姓名
         * @param {number} [page] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [field] 排序字段
         * @param {string} [order] 排序方向
         * @param {string} [descStr] 降序排序
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiBizAlbumListGet(searchKey?: string, name?: string, desc?: string, logo?: string, createUserName?: string, updateUserName?: string, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultListBizAlbumOutput>>> {
            const localVarAxiosArgs = await BizAlbumApiAxiosParamCreator(configuration).apiBizAlbumListGet(searchKey, name, desc, logo, createUserName, updateUserName, page, pageSize, field, order, descStr, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 分页查询专辑
         * @param {BizAlbumInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiBizAlbumPagePost(body?: BizAlbumInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultSqlSugarPagedListBizAlbumOutput>>> {
            const localVarAxiosArgs = await BizAlbumApiAxiosParamCreator(configuration).apiBizAlbumPagePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 更新专辑
         * @param {UpdateBizAlbumInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiBizAlbumUpdatePost(body?: UpdateBizAlbumInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await BizAlbumApiAxiosParamCreator(configuration).apiBizAlbumUpdatePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 上传图标
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiBizAlbumUploadlogoPostForm(file?: Blob, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultFileOutput>>> {
            const localVarAxiosArgs = await BizAlbumApiAxiosParamCreator(configuration).apiBizAlbumUploadlogoPostForm(file, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * BizAlbumApi - factory interface
 * @export
 */
export const BizAlbumApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 增加专辑
         * @param {AddBizAlbumInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiBizAlbumAddPost(body?: AddBizAlbumInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return BizAlbumApiFp(configuration).apiBizAlbumAddPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 删除专辑
         * @param {DeleteBizAlbumInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiBizAlbumDeletePost(body?: DeleteBizAlbumInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return BizAlbumApiFp(configuration).apiBizAlbumDeletePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取专辑
         * @param {number} id 主键Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiBizAlbumDetailGet(id: number, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultBizAlbum>> {
            return BizAlbumApiFp(configuration).apiBizAlbumDetailGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 分页查询专辑
         * @param {BizAlbumInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiBizAlbumGetListPost(body?: BizAlbumInput, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultSqlSugarPagedListBizAlbumOutput>> {
            return BizAlbumApiFp(configuration).apiBizAlbumGetListPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取专辑列表
         * @param {string} [searchKey] 关键字查询
         * @param {string} [name] 名称
         * @param {string} [desc] 描述
         * @param {string} [logo] 图标
         * @param {string} [createUserName] 创建者姓名
         * @param {string} [updateUserName] 修改者姓名
         * @param {number} [page] 当前页码
         * @param {number} [pageSize] 页码容量
         * @param {string} [field] 排序字段
         * @param {string} [order] 排序方向
         * @param {string} [descStr] 降序排序
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiBizAlbumListGet(searchKey?: string, name?: string, desc?: string, logo?: string, createUserName?: string, updateUserName?: string, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultListBizAlbumOutput>> {
            return BizAlbumApiFp(configuration).apiBizAlbumListGet(searchKey, name, desc, logo, createUserName, updateUserName, page, pageSize, field, order, descStr, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 分页查询专辑
         * @param {BizAlbumInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiBizAlbumPagePost(body?: BizAlbumInput, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultSqlSugarPagedListBizAlbumOutput>> {
            return BizAlbumApiFp(configuration).apiBizAlbumPagePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 更新专辑
         * @param {UpdateBizAlbumInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiBizAlbumUpdatePost(body?: UpdateBizAlbumInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return BizAlbumApiFp(configuration).apiBizAlbumUpdatePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 上传图标
         * @param {Blob} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiBizAlbumUploadlogoPostForm(file?: Blob, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultFileOutput>> {
            return BizAlbumApiFp(configuration).apiBizAlbumUploadlogoPostForm(file, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BizAlbumApi - object-oriented interface
 * @export
 * @class BizAlbumApi
 * @extends {BaseAPI}
 */
export class BizAlbumApi extends BaseAPI {
    /**
     * 
     * @summary 增加专辑
     * @param {AddBizAlbumInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BizAlbumApi
     */
    public async apiBizAlbumAddPost(body?: AddBizAlbumInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return BizAlbumApiFp(this.configuration).apiBizAlbumAddPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 删除专辑
     * @param {DeleteBizAlbumInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BizAlbumApi
     */
    public async apiBizAlbumDeletePost(body?: DeleteBizAlbumInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return BizAlbumApiFp(this.configuration).apiBizAlbumDeletePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取专辑
     * @param {number} id 主键Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BizAlbumApi
     */
    public async apiBizAlbumDetailGet(id: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultBizAlbum>> {
        return BizAlbumApiFp(this.configuration).apiBizAlbumDetailGet(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 分页查询专辑
     * @param {BizAlbumInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BizAlbumApi
     */
    public async apiBizAlbumGetListPost(body?: BizAlbumInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultSqlSugarPagedListBizAlbumOutput>> {
        return BizAlbumApiFp(this.configuration).apiBizAlbumGetListPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取专辑列表
     * @param {string} [searchKey] 关键字查询
     * @param {string} [name] 名称
     * @param {string} [desc] 描述
     * @param {string} [logo] 图标
     * @param {string} [createUserName] 创建者姓名
     * @param {string} [updateUserName] 修改者姓名
     * @param {number} [page] 当前页码
     * @param {number} [pageSize] 页码容量
     * @param {string} [field] 排序字段
     * @param {string} [order] 排序方向
     * @param {string} [descStr] 降序排序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BizAlbumApi
     */
    public async apiBizAlbumListGet(searchKey?: string, name?: string, desc?: string, logo?: string, createUserName?: string, updateUserName?: string, page?: number, pageSize?: number, field?: string, order?: string, descStr?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultListBizAlbumOutput>> {
        return BizAlbumApiFp(this.configuration).apiBizAlbumListGet(searchKey, name, desc, logo, createUserName, updateUserName, page, pageSize, field, order, descStr, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 分页查询专辑
     * @param {BizAlbumInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BizAlbumApi
     */
    public async apiBizAlbumPagePost(body?: BizAlbumInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultSqlSugarPagedListBizAlbumOutput>> {
        return BizAlbumApiFp(this.configuration).apiBizAlbumPagePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 更新专辑
     * @param {UpdateBizAlbumInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BizAlbumApi
     */
    public async apiBizAlbumUpdatePost(body?: UpdateBizAlbumInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return BizAlbumApiFp(this.configuration).apiBizAlbumUpdatePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 上传图标
     * @param {Blob} [file] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BizAlbumApi
     */
    public async apiBizAlbumUploadlogoPostForm(file?: Blob, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultFileOutput>> {
        return BizAlbumApiFp(this.configuration).apiBizAlbumUploadlogoPostForm(file, options).then((request) => request(this.axios, this.basePath));
    }
}

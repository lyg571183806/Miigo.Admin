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

import { SysFile } from './sys-file';
 /**
 * 分页泛型集合
 *
 * @export
 * @interface SqlSugarPagedListSysFile
 */
export interface SqlSugarPagedListSysFile {

    /**
     * 页码
     *
     * @type {number}
     * @memberof SqlSugarPagedListSysFile
     */
    page?: number;

    /**
     * 页容量
     *
     * @type {number}
     * @memberof SqlSugarPagedListSysFile
     */
    pageSize?: number;

    /**
     * 总条数
     *
     * @type {number}
     * @memberof SqlSugarPagedListSysFile
     */
    total?: number;

    /**
     * 总页数
     *
     * @type {number}
     * @memberof SqlSugarPagedListSysFile
     */
    totalPages?: number;

    /**
     * 当前页集合
     *
     * @type {Array<SysFile>}
     * @memberof SqlSugarPagedListSysFile
     */
    items?: Array<SysFile> | null;

    /**
     * 是否有上一页
     *
     * @type {boolean}
     * @memberof SqlSugarPagedListSysFile
     */
    hasPrevPage?: boolean;

    /**
     * 是否有下一页
     *
     * @type {boolean}
     * @memberof SqlSugarPagedListSysFile
     */
    hasNextPage?: boolean;
}

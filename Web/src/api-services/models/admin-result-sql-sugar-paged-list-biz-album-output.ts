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

import { SqlSugarPagedListBizAlbumOutput } from './sql-sugar-paged-list-biz-album-output';
import {
    SqlSugarPagedListBizAlbumOutput,
} from ".";

/**
 * 全局返回结果
 *
 * @export
 * @interface AdminResultSqlSugarPagedListBizAlbumOutput
 */
export interface AdminResultSqlSugarPagedListBizAlbumOutput {

    /**
     * 状态码
     *
     * @type {number}
     * @memberof AdminResultSqlSugarPagedListBizAlbumOutput
     */
    code?: number;

    /**
     * 类型success、warning、error
     *
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListBizAlbumOutput
     */
    type?: string | null;

    /**
     * 错误信息
     *
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListBizAlbumOutput
     */
    message?: string | null;

    /**
     * @type {SqlSugarPagedListBizAlbumOutput}
     * @memberof AdminResultSqlSugarPagedListBizAlbumOutput
     */
    result?: SqlSugarPagedListBizAlbumOutput;

    /**
     * 附加数据
     *
     * @type {any}
     * @memberof AdminResultSqlSugarPagedListBizAlbumOutput
     */
    extras?: any | null;

    /**
     * 时间
     *
     * @type {Date}
     * @memberof AdminResultSqlSugarPagedListBizAlbumOutput
     */
    time?: Date;
}
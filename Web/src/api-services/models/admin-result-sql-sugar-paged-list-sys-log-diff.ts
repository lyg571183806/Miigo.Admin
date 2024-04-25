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

import { SqlSugarPagedListSysLogDiff } from './sql-sugar-paged-list-sys-log-diff';
 /**
 * 全局返回结果
 *
 * @export
 * @interface AdminResultSqlSugarPagedListSysLogDiff
 */
export interface AdminResultSqlSugarPagedListSysLogDiff {

    /**
     * 状态码
     *
     * @type {number}
     * @memberof AdminResultSqlSugarPagedListSysLogDiff
     */
    code?: number;

    /**
     * 类型success、warning、error
     *
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysLogDiff
     */
    type?: string | null;

    /**
     * 错误信息
     *
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysLogDiff
     */
    message?: string | null;

    /**
     * @type {SqlSugarPagedListSysLogDiff}
     * @memberof AdminResultSqlSugarPagedListSysLogDiff
     */
    result?: SqlSugarPagedListSysLogDiff;

    /**
     * 附加数据
     *
     * @type {any}
     * @memberof AdminResultSqlSugarPagedListSysLogDiff
     */
    extras?: any | null;

    /**
     * 时间
     *
     * @type {Date}
     * @memberof AdminResultSqlSugarPagedListSysLogDiff
     */
    time?: Date;
}

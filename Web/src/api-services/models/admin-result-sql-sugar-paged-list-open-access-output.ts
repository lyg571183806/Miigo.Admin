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

import { SqlSugarPagedListOpenAccessOutput } from './sql-sugar-paged-list-open-access-output';
 /**
 * 全局返回结果
 *
 * @export
 * @interface AdminResultSqlSugarPagedListOpenAccessOutput
 */
export interface AdminResultSqlSugarPagedListOpenAccessOutput {

    /**
     * 状态码
     *
     * @type {number}
     * @memberof AdminResultSqlSugarPagedListOpenAccessOutput
     */
    code?: number;

    /**
     * 类型success、warning、error
     *
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListOpenAccessOutput
     */
    type?: string | null;

    /**
     * 错误信息
     *
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListOpenAccessOutput
     */
    message?: string | null;

    /**
     * @type {SqlSugarPagedListOpenAccessOutput}
     * @memberof AdminResultSqlSugarPagedListOpenAccessOutput
     */
    result?: SqlSugarPagedListOpenAccessOutput;

    /**
     * 附加数据
     *
     * @type {any}
     * @memberof AdminResultSqlSugarPagedListOpenAccessOutput
     */
    extras?: any | null;

    /**
     * 时间
     *
     * @type {Date}
     * @memberof AdminResultSqlSugarPagedListOpenAccessOutput
     */
    time?: Date;
}

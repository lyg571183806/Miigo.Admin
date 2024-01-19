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

import { SqlSugarPagedListSysRole } from './sql-sugar-paged-list-sys-role';
import {
    SqlSugarPagedListSysRole,
} from ".";

/**
 * 全局返回结果
 *
 * @export
 * @interface AdminResultSqlSugarPagedListSysRole
 */
export interface AdminResultSqlSugarPagedListSysRole {

    /**
     * 状态码
     *
     * @type {number}
     * @memberof AdminResultSqlSugarPagedListSysRole
     */
    code?: number;

    /**
     * 类型success、warning、error
     *
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysRole
     */
    type?: string | null;

    /**
     * 错误信息
     *
     * @type {string}
     * @memberof AdminResultSqlSugarPagedListSysRole
     */
    message?: string | null;

    /**
     * @type {SqlSugarPagedListSysRole}
     * @memberof AdminResultSqlSugarPagedListSysRole
     */
    result?: SqlSugarPagedListSysRole;

    /**
     * 附加数据
     *
     * @type {any}
     * @memberof AdminResultSqlSugarPagedListSysRole
     */
    extras?: any | null;

    /**
     * 时间
     *
     * @type {Date}
     * @memberof AdminResultSqlSugarPagedListSysRole
     */
    time?: Date;
}

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

import { SysJobTrigger } from './sys-job-trigger';
import {
    SysJobTrigger,
} from ".";

/**
 * 全局返回结果
 *
 * @export
 * @interface AdminResultListSysJobTrigger
 */
export interface AdminResultListSysJobTrigger {

    /**
     * 状态码
     *
     * @type {number}
     * @memberof AdminResultListSysJobTrigger
     */
    code?: number;

    /**
     * 类型success、warning、error
     *
     * @type {string}
     * @memberof AdminResultListSysJobTrigger
     */
    type?: string | null;

    /**
     * 错误信息
     *
     * @type {string}
     * @memberof AdminResultListSysJobTrigger
     */
    message?: string | null;

    /**
     * 数据
     *
     * @type {Array<SysJobTrigger>}
     * @memberof AdminResultListSysJobTrigger
     */
    result?: Array<SysJobTrigger> | null;

    /**
     * 附加数据
     *
     * @type {any}
     * @memberof AdminResultListSysJobTrigger
     */
    extras?: any | null;

    /**
     * 时间
     *
     * @type {Date}
     * @memberof AdminResultListSysJobTrigger
     */
    time?: Date;
}

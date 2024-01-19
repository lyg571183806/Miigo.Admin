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

import {
    
} from ".";

/**
 * 全局返回结果
 *
 * @export
 * @interface AdminResultListObject
 */
export interface AdminResultListObject {

    /**
     * 状态码
     *
     * @type {number}
     * @memberof AdminResultListObject
     */
    code?: number;

    /**
     * 类型success、warning、error
     *
     * @type {string}
     * @memberof AdminResultListObject
     */
    type?: string | null;

    /**
     * 错误信息
     *
     * @type {string}
     * @memberof AdminResultListObject
     */
    message?: string | null;

    /**
     * 数据
     *
     * @type {Array<any>}
     * @memberof AdminResultListObject
     */
    result?: Array<any> | null;

    /**
     * 附加数据
     *
     * @type {any}
     * @memberof AdminResultListObject
     */
    extras?: any | null;

    /**
     * 时间
     *
     * @type {Date}
     * @memberof AdminResultListObject
     */
    time?: Date;
}

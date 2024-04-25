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

import { BizCatalog } from './biz-catalog';
 /**
 * 全局返回结果
 *
 * @export
 * @interface AdminResultBizCatalog
 */
export interface AdminResultBizCatalog {

    /**
     * 状态码
     *
     * @type {number}
     * @memberof AdminResultBizCatalog
     */
    code?: number;

    /**
     * 类型success、warning、error
     *
     * @type {string}
     * @memberof AdminResultBizCatalog
     */
    type?: string | null;

    /**
     * 错误信息
     *
     * @type {string}
     * @memberof AdminResultBizCatalog
     */
    message?: string | null;

    /**
     * @type {BizCatalog}
     * @memberof AdminResultBizCatalog
     */
    result?: BizCatalog;

    /**
     * 附加数据
     *
     * @type {any}
     * @memberof AdminResultBizCatalog
     */
    extras?: any | null;

    /**
     * 时间
     *
     * @type {Date}
     * @memberof AdminResultBizCatalog
     */
    time?: Date;
}

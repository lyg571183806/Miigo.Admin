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

import { WxPhoneOutput } from './wx-phone-output';
import {
    WxPhoneOutput,
} from ".";

/**
 * 全局返回结果
 *
 * @export
 * @interface AdminResultWxPhoneOutput
 */
export interface AdminResultWxPhoneOutput {

    /**
     * 状态码
     *
     * @type {number}
     * @memberof AdminResultWxPhoneOutput
     */
    code?: number;

    /**
     * 类型success、warning、error
     *
     * @type {string}
     * @memberof AdminResultWxPhoneOutput
     */
    type?: string | null;

    /**
     * 错误信息
     *
     * @type {string}
     * @memberof AdminResultWxPhoneOutput
     */
    message?: string | null;

    /**
     * @type {WxPhoneOutput}
     * @memberof AdminResultWxPhoneOutput
     */
    result?: WxPhoneOutput;

    /**
     * 附加数据
     *
     * @type {any}
     * @memberof AdminResultWxPhoneOutput
     */
    extras?: any | null;

    /**
     * 时间
     *
     * @type {Date}
     * @memberof AdminResultWxPhoneOutput
     */
    time?: Date;
}

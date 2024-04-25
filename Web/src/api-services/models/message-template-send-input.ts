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

import { DataItem } from './data-item';
 /**
 * 获取消息模板列表
 *
 * @export
 * @interface MessageTemplateSendInput
 */
export interface MessageTemplateSendInput {

    /**
     * 订阅模板Id
     *
     * @type {string}
     * @memberof MessageTemplateSendInput
     */
    templateId: string;

    /**
     * 接收者的OpenId
     *
     * @type {string}
     * @memberof MessageTemplateSendInput
     */
    toUserOpenId: string;

    /**
     * 模板数据，格式形如 { \"key1\": { \"value\": any }, \"key2\": { \"value\": any } }
     *
     * @type {{ [key: string]: DataItem; }}
     * @memberof MessageTemplateSendInput
     */
    data: { [key: string]: DataItem; };

    /**
     * 模板跳转链接
     *
     * @type {string}
     * @memberof MessageTemplateSendInput
     */
    url?: string | null;

    /**
     * 所需跳转到小程序的具体页面路径，支持带参数,（示例index?foo=bar）
     *
     * @type {string}
     * @memberof MessageTemplateSendInput
     */
    miniProgramPagePath?: string | null;
}

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

import { NoticeTypeEnum } from './notice-type-enum';
 /**
 * 
 *
 * @export
 * @interface PageNoticeInput
 */
export interface PageNoticeInput {

    /**
     * 当前页码
     *
     * @type {number}
     * @memberof PageNoticeInput
     */
    page?: number;

    /**
     * 页码容量
     *
     * @type {number}
     * @memberof PageNoticeInput
     */
    pageSize?: number;

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof PageNoticeInput
     */
    field?: string | null;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof PageNoticeInput
     */
    order?: string | null;

    /**
     * 降序排序
     *
     * @type {string}
     * @memberof PageNoticeInput
     */
    descStr?: string | null;

    /**
     * 标题
     *
     * @type {string}
     * @memberof PageNoticeInput
     */
    title?: string | null;

    /**
     * @type {NoticeTypeEnum}
     * @memberof PageNoticeInput
     */
    type?: NoticeTypeEnum;
}

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
 * 
 *
 * @export
 * @interface FileInput
 */
export interface FileInput {

    /**
     * 主键Id
     *
     * @type {number}
     * @memberof FileInput
     */
    id: number;

    /**
     * 文件名称
     *
     * @type {string}
     * @memberof FileInput
     */
    fileName?: string | null;

    /**
     * 文件Url
     *
     * @type {string}
     * @memberof FileInput
     */
    url?: string | null;
}

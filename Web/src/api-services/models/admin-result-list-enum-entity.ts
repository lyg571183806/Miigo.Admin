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

import { EnumEntity } from './enum-entity';
import {
    EnumEntity,
} from ".";

/**
 * 全局返回结果
 *
 * @export
 * @interface AdminResultListEnumEntity
 */
export interface AdminResultListEnumEntity {

    /**
     * 状态码
     *
     * @type {number}
     * @memberof AdminResultListEnumEntity
     */
    code?: number;

    /**
     * 类型success、warning、error
     *
     * @type {string}
     * @memberof AdminResultListEnumEntity
     */
    type?: string | null;

    /**
     * 错误信息
     *
     * @type {string}
     * @memberof AdminResultListEnumEntity
     */
    message?: string | null;

    /**
     * 数据
     *
     * @type {Array<EnumEntity>}
     * @memberof AdminResultListEnumEntity
     */
    result?: Array<EnumEntity> | null;

    /**
     * 附加数据
     *
     * @type {any}
     * @memberof AdminResultListEnumEntity
     */
    extras?: any | null;

    /**
     * 时间
     *
     * @type {Date}
     * @memberof AdminResultListEnumEntity
     */
    time?: Date;
}

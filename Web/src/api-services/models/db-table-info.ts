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

import { DbObjectType } from './db-object-type';
import {
    DbObjectType,
} from ".";

/**
 * 
 *
 * @export
 * @interface DbTableInfo
 */
export interface DbTableInfo {

    /**
     * @type {string}
     * @memberof DbTableInfo
     */
    name?: string | null;

    /**
     * @type {string}
     * @memberof DbTableInfo
     */
    description?: string | null;

    /**
     * @type {DbObjectType}
     * @memberof DbTableInfo
     */
    dbObjectType?: DbObjectType;
}

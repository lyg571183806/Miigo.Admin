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
 * @interface UpdateDbTableInput
 */
export interface UpdateDbTableInput {

    /**
     * @type {string}
     * @memberof UpdateDbTableInput
     */
    configId?: string | null;

    /**
     * @type {string}
     * @memberof UpdateDbTableInput
     */
    tableName?: string | null;

    /**
     * @type {string}
     * @memberof UpdateDbTableInput
     */
    oldTableName?: string | null;

    /**
     * @type {string}
     * @memberof UpdateDbTableInput
     */
    description?: string | null;
}

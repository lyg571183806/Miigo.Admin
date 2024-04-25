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

 /**
 * 
 *
 * @export
 * @interface DbColumnOutput
 */
export interface DbColumnOutput {

    /**
     * @type {string}
     * @memberof DbColumnOutput
     */
    tableName?: string | null;

    /**
     * @type {number}
     * @memberof DbColumnOutput
     */
    tableId?: number;

    /**
     * @type {string}
     * @memberof DbColumnOutput
     */
    dbColumnName?: string | null;

    /**
     * @type {string}
     * @memberof DbColumnOutput
     */
    propertyName?: string | null;

    /**
     * @type {string}
     * @memberof DbColumnOutput
     */
    dataType?: string | null;

    /**
     * @type {any}
     * @memberof DbColumnOutput
     */
    propertyType?: any | null;

    /**
     * @type {number}
     * @memberof DbColumnOutput
     */
    length?: number;

    /**
     * @type {string}
     * @memberof DbColumnOutput
     */
    columnDescription?: string | null;

    /**
     * @type {string}
     * @memberof DbColumnOutput
     */
    defaultValue?: string | null;

    /**
     * @type {boolean}
     * @memberof DbColumnOutput
     */
    isNullable?: boolean;

    /**
     * @type {boolean}
     * @memberof DbColumnOutput
     */
    isIdentity?: boolean;

    /**
     * @type {boolean}
     * @memberof DbColumnOutput
     */
    isPrimarykey?: boolean;

    /**
     * @type {any}
     * @memberof DbColumnOutput
     */
    value?: any | null;

    /**
     * @type {number}
     * @memberof DbColumnOutput
     */
    decimalDigits?: number;

    /**
     * @type {number}
     * @memberof DbColumnOutput
     */
    scale?: number;

    /**
     * @type {boolean}
     * @memberof DbColumnOutput
     */
    isArray?: boolean;

    /**
     * @type {boolean}
     * @memberof DbColumnOutput
     */
    isJson?: boolean;

    /**
     * @type {boolean}
     * @memberof DbColumnOutput
     */
    isUnsigned?: boolean | null;

    /**
     * @type {number}
     * @memberof DbColumnOutput
     */
    createTableFieldSort?: number;
}

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

import { DataScopeEnum } from './data-scope-enum';
import { StatusEnum } from './status-enum';
import { SysUser } from './sys-user';
 /**
 * 
 *
 * @export
 * @interface UpdateRoleInput
 */
export interface UpdateRoleInput {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof UpdateRoleInput
     */
    id?: number;

    /**
     * 创建时间
     *
     * @type {Date}
     * @memberof UpdateRoleInput
     */
    createTime?: Date | null;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof UpdateRoleInput
     */
    updateTime?: Date | null;

    /**
     * 创建者Id
     *
     * @type {number}
     * @memberof UpdateRoleInput
     */
    createUserId?: number | null;

    /**
     * @type {SysUser}
     * @memberof UpdateRoleInput
     */
    createUser?: SysUser;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof UpdateRoleInput
     */
    createUserName?: string | null;

    /**
     * 修改者Id
     *
     * @type {number}
     * @memberof UpdateRoleInput
     */
    updateUserId?: number | null;

    /**
     * @type {SysUser}
     * @memberof UpdateRoleInput
     */
    updateUser?: SysUser;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof UpdateRoleInput
     */
    updateUserName?: string | null;

    /**
     * 软删除
     *
     * @type {boolean}
     * @memberof UpdateRoleInput
     */
    isDelete?: boolean;

    /**
     * 租户Id
     *
     * @type {number}
     * @memberof UpdateRoleInput
     */
    tenantId?: number | null;

    /**
     * 编码
     *
     * @type {string}
     * @memberof UpdateRoleInput
     */
    code?: string | null;

    /**
     * 排序
     *
     * @type {number}
     * @memberof UpdateRoleInput
     */
    orderNo?: number;

    /**
     * @type {DataScopeEnum}
     * @memberof UpdateRoleInput
     */
    dataScope?: DataScopeEnum;

    /**
     * 备注
     *
     * @type {string}
     * @memberof UpdateRoleInput
     */
    remark?: string | null;

    /**
     * @type {StatusEnum}
     * @memberof UpdateRoleInput
     */
    status?: StatusEnum;

    /**
     * 名称
     *
     * @type {string}
     * @memberof UpdateRoleInput
     */
    name: string;

    /**
     * 菜单Id集合
     *
     * @type {Array<number>}
     * @memberof UpdateRoleInput
     */
    menuIdList?: Array<number> | null;
}

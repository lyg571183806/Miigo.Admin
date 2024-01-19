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

import { DbType } from './db-type';
import { StatusEnum } from './status-enum';
import { SysUser } from './sys-user';
import { TenantTypeEnum } from './tenant-type-enum';
import {
    DbType,StatusEnum,SysUser,TenantTypeEnum,
} from ".";

/**
 * 系统租户表
 *
 * @export
 * @interface SysTenant
 */
export interface SysTenant {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof SysTenant
     */
    id?: number;

    /**
     * 创建时间
     *
     * @type {Date}
     * @memberof SysTenant
     */
    createTime?: Date | null;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof SysTenant
     */
    updateTime?: Date | null;

    /**
     * 创建者Id
     *
     * @type {number}
     * @memberof SysTenant
     */
    createUserId?: number | null;

    /**
     * @type {SysUser}
     * @memberof SysTenant
     */
    createUser?: SysUser;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof SysTenant
     */
    createUserName?: string | null;

    /**
     * 修改者Id
     *
     * @type {number}
     * @memberof SysTenant
     */
    updateUserId?: number | null;

    /**
     * @type {SysUser}
     * @memberof SysTenant
     */
    updateUser?: SysUser;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof SysTenant
     */
    updateUserName?: string | null;

    /**
     * 软删除
     *
     * @type {boolean}
     * @memberof SysTenant
     */
    isDelete?: boolean;

    /**
     * 用户Id
     *
     * @type {number}
     * @memberof SysTenant
     */
    userId?: number;

    /**
     * 机构Id
     *
     * @type {number}
     * @memberof SysTenant
     */
    orgId?: number;

    /**
     * 主机
     *
     * @type {string}
     * @memberof SysTenant
     */
    host?: string | null;

    /**
     * @type {TenantTypeEnum}
     * @memberof SysTenant
     */
    tenantType?: TenantTypeEnum;

    /**
     * @type {DbType}
     * @memberof SysTenant
     */
    dbType?: DbType;

    /**
     * 数据库连接
     *
     * @type {string}
     * @memberof SysTenant
     */
    connection?: string | null;

    /**
     * 数据库标识
     *
     * @type {string}
     * @memberof SysTenant
     */
    configId?: string | null;

    /**
     * 排序
     *
     * @type {number}
     * @memberof SysTenant
     */
    orderNo?: number;

    /**
     * 备注
     *
     * @type {string}
     * @memberof SysTenant
     */
    remark?: string | null;

    /**
     * @type {StatusEnum}
     * @memberof SysTenant
     */
    status?: StatusEnum;
}

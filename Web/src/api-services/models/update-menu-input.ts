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

import { MenuTypeEnum } from './menu-type-enum';
import { StatusEnum } from './status-enum';
import { SysMenu } from './sys-menu';
import { SysUser } from './sys-user';
import {
    MenuTypeEnum,StatusEnum,SysMenu,SysUser,
} from ".";

/**
 * 
 *
 * @export
 * @interface UpdateMenuInput
 */
export interface UpdateMenuInput {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof UpdateMenuInput
     */
    id?: number;

    /**
     * 创建时间
     *
     * @type {Date}
     * @memberof UpdateMenuInput
     */
    createTime?: Date | null;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof UpdateMenuInput
     */
    updateTime?: Date | null;

    /**
     * 创建者Id
     *
     * @type {number}
     * @memberof UpdateMenuInput
     */
    createUserId?: number | null;

    /**
     * @type {SysUser}
     * @memberof UpdateMenuInput
     */
    createUser?: SysUser;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof UpdateMenuInput
     */
    createUserName?: string | null;

    /**
     * 修改者Id
     *
     * @type {number}
     * @memberof UpdateMenuInput
     */
    updateUserId?: number | null;

    /**
     * @type {SysUser}
     * @memberof UpdateMenuInput
     */
    updateUser?: SysUser;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof UpdateMenuInput
     */
    updateUserName?: string | null;

    /**
     * 软删除
     *
     * @type {boolean}
     * @memberof UpdateMenuInput
     */
    isDelete?: boolean;

    /**
     * 父Id
     *
     * @type {number}
     * @memberof UpdateMenuInput
     */
    pid?: number;

    /**
     * @type {MenuTypeEnum}
     * @memberof UpdateMenuInput
     */
    type?: MenuTypeEnum;

    /**
     * 路由名称
     *
     * @type {string}
     * @memberof UpdateMenuInput
     */
    name?: string | null;

    /**
     * 路由地址
     *
     * @type {string}
     * @memberof UpdateMenuInput
     */
    path?: string | null;

    /**
     * 组件路径
     *
     * @type {string}
     * @memberof UpdateMenuInput
     */
    component?: string | null;

    /**
     * 重定向
     *
     * @type {string}
     * @memberof UpdateMenuInput
     */
    redirect?: string | null;

    /**
     * 权限标识
     *
     * @type {string}
     * @memberof UpdateMenuInput
     */
    permission?: string | null;

    /**
     * 图标
     *
     * @type {string}
     * @memberof UpdateMenuInput
     */
    icon?: string | null;

    /**
     * 是否内嵌
     *
     * @type {boolean}
     * @memberof UpdateMenuInput
     */
    isIframe?: boolean;

    /**
     * 外链链接
     *
     * @type {string}
     * @memberof UpdateMenuInput
     */
    outLink?: string | null;

    /**
     * 是否隐藏
     *
     * @type {boolean}
     * @memberof UpdateMenuInput
     */
    isHide?: boolean;

    /**
     * 是否缓存
     *
     * @type {boolean}
     * @memberof UpdateMenuInput
     */
    isKeepAlive?: boolean;

    /**
     * 是否固定
     *
     * @type {boolean}
     * @memberof UpdateMenuInput
     */
    isAffix?: boolean;

    /**
     * 排序
     *
     * @type {number}
     * @memberof UpdateMenuInput
     */
    orderNo?: number;

    /**
     * @type {StatusEnum}
     * @memberof UpdateMenuInput
     */
    status?: StatusEnum;

    /**
     * 备注
     *
     * @type {string}
     * @memberof UpdateMenuInput
     */
    remark?: string | null;

    /**
     * 菜单子项
     *
     * @type {Array<SysMenu>}
     * @memberof UpdateMenuInput
     */
    children?: Array<SysMenu> | null;

    /**
     * 名称
     *
     * @type {string}
     * @memberof UpdateMenuInput
     */
    title: string;
}

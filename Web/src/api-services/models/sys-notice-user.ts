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

import { NoticeUserStatusEnum } from './notice-user-status-enum';
import { SysNotice } from './sys-notice';
 /**
 * 系统通知公告用户表
 *
 * @export
 * @interface SysNoticeUser
 */
export interface SysNoticeUser {

    /**
     * 通知公告Id
     *
     * @type {number}
     * @memberof SysNoticeUser
     */
    noticeId?: number;

    /**
     * @type {SysNotice}
     * @memberof SysNoticeUser
     */
    sysNotice?: SysNotice;

    /**
     * 用户Id
     *
     * @type {number}
     * @memberof SysNoticeUser
     */
    userId?: number;

    /**
     * 阅读时间
     *
     * @type {Date}
     * @memberof SysNoticeUser
     */
    readTime?: Date | null;

    /**
     * @type {NoticeUserStatusEnum}
     * @memberof SysNoticeUser
     */
    readStatus?: NoticeUserStatusEnum;
}

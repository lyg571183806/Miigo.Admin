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

import { SysFile } from './sys-file';
import {
    SysFile,
} from ".";

/**
 * 专辑输出参数
 *
 * @export
 * @interface BizAlbumOutput
 */
export interface BizAlbumOutput {

    /**
     * 主键Id
     *
     * @type {number}
     * @memberof BizAlbumOutput
     */
    id?: number;

    /**
     * 名称
     *
     * @type {string}
     * @memberof BizAlbumOutput
     */
    name?: string | null;

    /**
     * 描述
     *
     * @type {string}
     * @memberof BizAlbumOutput
     */
    desc?: string | null;

    /**
     * 图标
     *
     * @type {string}
     * @memberof BizAlbumOutput
     */
    logo?: string | null;

    /**
     * @type {SysFile}
     * @memberof BizAlbumOutput
     */
    logoAttachment?: SysFile;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof BizAlbumOutput
     */
    createUserName?: string | null;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof BizAlbumOutput
     */
    updateUserName?: string | null;
}
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
 * 专辑增加输入参数
 *
 * @export
 * @interface AddBizAlbumInput
 */
export interface AddBizAlbumInput {

    /**
     * 名称
     *
     * @type {string}
     * @memberof AddBizAlbumInput
     */
    name?: string | null;

    /**
     * 描述
     *
     * @type {string}
     * @memberof AddBizAlbumInput
     */
    desc?: string | null;

    /**
     * 图标
     *
     * @type {string}
     * @memberof AddBizAlbumInput
     */
    logo?: string | null;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof AddBizAlbumInput
     */
    createUserName?: string | null;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof AddBizAlbumInput
     */
    updateUserName?: string | null;
}

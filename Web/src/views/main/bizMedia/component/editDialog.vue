<template>
	<div class="bizMedia-container">
		<el-dialog v-model="isShowDialog" :width="800" draggable="">
			<template #header>
				<div style="color: #fff">
					<!--<el-icon size="16" style="margin-right: 3px; display: inline; vertical-align: middle"> <ele-Edit /> </el-icon>-->
					<span>{{ props.title }}</span>
				</div>
			</template>
			<el-form :model="ruleForm" ref="ruleFormRef" label-width="auto" :rules="rules">
				<el-row :gutter="35">
					<el-form-item v-show="false">
						<el-input v-model="ruleForm.id" />
					</el-form-item>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="文件" prop="url">
							<el-upload
							list-type="picture-card"
							:show-file-list="false"
							:http-request="uploadUrlHandle">
								<img
								v-if="ruleForm.url"
								:src="ruleForm.url"
								@click="ruleForm.url=''"
								style="width: 100%; height: 100%; object-fit: contain"/>
								<el-icon v-else><Plus /></el-icon>
								
							</el-upload>
							
						</el-form-item>
						
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="封面" prop="cover">
							<el-upload
							list-type="picture-card"
							:show-file-list="false"
							:http-request="uploadCoverHandle">
								<img
								v-if="ruleForm.cover"
								:src="ruleForm.cover"
								@click="ruleForm.cover=''"
								style="width: 100%; height: 100%; object-fit: contain"/>
								<el-icon v-else><Plus /></el-icon>
								
							</el-upload>
							
						</el-form-item>
						
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="文件名" prop="name">
							<el-input v-model="ruleForm.name" placeholder="请输入文件名" maxlength="256" show-word-limit clearable />
							
						</el-form-item>
						
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
						<el-form-item label="描述" prop="desc">
							<el-input v-model="ruleForm.desc" placeholder="请输入描述" type="textarea" maxlength="256" show-word-limit clearable />
							
						</el-form-item>
						
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="分类" prop="catalog">
							<el-select clearable filterable v-model="ruleForm.catalog" placeholder="请选择分类">
								<el-option v-for="(item,index) in bizCatalogCatalogDropdownList" :key="index" :value="item.value" :label="item.label" />
								
							</el-select>
							
						</el-form-item>
						
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="专辑" prop="album">
							<el-select clearable filterable v-model="ruleForm.album" placeholder="请选择专辑">
								<el-option v-for="(item,index) in bizAlbumAlbumDropdownList" :key="index" :value="item.value" :label="item.label" />
								
							</el-select>
							
						</el-form-item>
						
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="是否发布" prop="isPublish">
							<el-checkbox v-model="ruleForm.isPublish" />
						</el-form-item>						
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="观看数" prop="viewNum">
							<el-input-number v-model="ruleForm.viewNum" min="0" placeholder="请输入观看数" clearable />
						</el-form-item>						
					</el-col>
				</el-row>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="cancel">取 消</el-button>
					<el-button type="primary" @click="submit">确 定</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>
<style scoped>
:deep(.el-select),
:deep(.el-input-number) {
	width: 100%;
}
</style>
<script lang="ts" setup>
	import { ref,onMounted } from "vue";
	import { getDictDataItem as di, getDictDataList as dl } from '/@/utils/dict-utils';
	import { ElMessage } from "element-plus";
	import type { FormRules } from "element-plus";
    import { Plus } from "@element-plus/icons-vue";
    import { UploadRequestOptions } from "element-plus";
    import {uploadUrl,uploadCover} from '/@/api/main/bizMedia';
	import { addBizMedia, updateBizMedia } from "/@/api/main/bizMedia";
	import { getBizCatalogCatalogDropdown } from '/@/api/main/bizMedia';
	import { getBizAlbumAlbumDropdown } from '/@/api/main/bizMedia';

	//父级传递来的参数
	var props = defineProps({
		title: {
		type: String,
		default: "",
	},
	});
	//父级传递来的函数，用于回调
	const emit = defineEmits(["reloadTable"]);
	const ruleFormRef = ref();
	const isShowDialog = ref(false);
	const ruleForm = ref<any>({});
	//自行添加其他规则
	const rules = ref<FormRules>({
	});

	// 打开弹窗
	const openDialog = (row: any) => {
		ruleForm.value = JSON.parse(JSON.stringify(row));
		isShowDialog.value = true;
	};

	// 关闭弹窗
	const closeDialog = () => {
		emit("reloadTable");
		isShowDialog.value = false;
	};

	// 取消
	const cancel = () => {
		isShowDialog.value = false;
	};

	// 提交
	const submit = async () => {
		ruleFormRef.value.validate(async (isValid: boolean, fields?: any) => {
			if (isValid) {
				let values = ruleForm.value;
				if (ruleForm.value.id == undefined || ruleForm.value.id == null || ruleForm.value.id == "" || ruleForm.value.id == 0) {
					await addBizMedia(values);
				} else {
					await updateBizMedia(values);
				}
				closeDialog();
			} else {
				ElMessage({
					message: `表单有${Object.keys(fields).length}处验证失败，请修改后再提交`,
					type: "error",
				});
			}
		});
	};

	const bizCatalogCatalogDropdownList = ref<any>([]); 
	const getBizCatalogCatalogDropdownList = async () => {
		let list = await getBizCatalogCatalogDropdown();
		bizCatalogCatalogDropdownList.value = list.data.result ?? [];
	};
	getBizCatalogCatalogDropdownList();
	
	const bizAlbumAlbumDropdownList = ref<any>([]); 
	const getBizAlbumAlbumDropdownList = async () => {
		let list = await getBizAlbumAlbumDropdown();
		bizAlbumAlbumDropdownList.value = list.data.result ?? [];
	};
	getBizAlbumAlbumDropdownList();
	




	const uploadUrlHandle = async (options: UploadRequestOptions) => {
		const res = await uploadUrl(options);
		ruleForm.value.url = res.data.result?.url;
	};
	const uploadCoverHandle = async (options: UploadRequestOptions) => {
		const res = await uploadCover(options);
		ruleForm.value.cover = res.data.result?.url;
	};


	// 页面加载时
	onMounted(async () => {
	});

	//将属性或者函数暴露给父组件
	defineExpose({ openDialog });
</script>





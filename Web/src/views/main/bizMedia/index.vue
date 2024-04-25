<template>
  <div class="bizMedia-container">
    <el-card shadow="hover" :body-style="{ paddingBottom: '0' }">
      <el-form :model="queryParams" ref="queryForm" :inline="true">
        <el-form-item label="关键字">
          <el-input v-model="queryParams.searchKey" clearable="" placeholder="请输入模糊查询关键字" />
        </el-form-item>
        <el-form-item label="分类">
          <el-select clearable="" filterable="" v-model="queryParams.catalog" placeholder="请选择分类">
            <el-option v-for="(item, index) in  bizCatalogCatalogDropdownList" :key="index" :value="item.value"
              :label="item.label" />
          </el-select>
        </el-form-item>
        <el-form-item label="专辑">
          <el-select clearable="" filterable="" v-model="queryParams.album" placeholder="请选择专辑">
            <el-option v-for="(item, index) in  bizAlbumAlbumDropdownList" :key="index" :value="item.value"
              :label="item.label" />
          </el-select>
        </el-form-item>
        <el-form-item label="文件id" v-if="showAdvanceQueryUI">
          <el-input v-model="queryParams.fileId" clearable="" placeholder="请输入文件id" />
        </el-form-item>
        <el-form-item label="描述" v-if="showAdvanceQueryUI">
          <el-input v-model="queryParams.desc" clearable="" placeholder="请输入描述" />
        </el-form-item>
        <el-form-item label="创建者姓名" v-if="showAdvanceQueryUI">
          <el-input v-model="queryParams.createUserName" clearable="" placeholder="请输入创建者姓名" />
        </el-form-item>
        <el-form-item label="修改者姓名" v-if="showAdvanceQueryUI">
          <el-input v-model="queryParams.updateUserName" clearable="" placeholder="请输入修改者姓名" />
        </el-form-item>

        <el-form-item>
          <el-button-group>
            <el-button type="primary" icon="ele-Search" @click="handleQuery" v-auth="'bizMedia:page'"> 查询 </el-button>
            <el-button icon="ele-Refresh" @click="() => queryParams = {}"> 重置 </el-button>
            <el-button icon="ele-ZoomIn" @click="changeAdvanceQueryUI" v-if="!showAdvanceQueryUI"> 高级 </el-button>
            <el-button icon="ele-ZoomOut" @click="changeAdvanceQueryUI" v-if="showAdvanceQueryUI"> 隐藏 </el-button>
          </el-button-group>

          <el-button-group style="margin-left:20px">
            <el-button type="primary" icon="ele-Plus" @click="openAddBizMedia" v-auth="'bizMedia:add'"> 新增 </el-button>
          </el-button-group>
          <el-button-group style="margin-left:10px">
            <el-button type="primary" icon="ele-Plus" @click="openMultiUploadDialog" v-auth="'sysFile:uploadFile'"> 上传
            </el-button>
          </el-button-group>
        </el-form-item>

      </el-form>
    </el-card>
    <el-card class="full-table" shadow="hover" style="margin-top: 8px">
      <el-table :data="tableData" style="width: 100%" v-loading="loading" tooltip-effect="light" row-key="id" border="">
        <el-table-column type="index" label="序号" width="55" align="center" />
        <el-table-column prop="url" label="文件" width="120" show-overflow-tooltip="">
          <template #default="scope">
            <el-image v-if="scope.row.url" style="width: 60px; height: 60px" :src="scope.row.url" :lazy="true"
              :hide-on-click-modal="true" :preview-src-list="[scope.row.url]" :initial-index="0" fit="scale-down"
              preview-teleported="" />

          </template>

        </el-table-column>
        <el-table-column prop="cover" label="封面" width="120" show-overflow-tooltip="">
          <template #default="scope">
            <el-image v-if="scope.row.cover" style="width: 60px; height: 60px" :src="scope.row.cover" :lazy="true"
              :hide-on-click-modal="true" :preview-src-list="[scope.row.cover]" :initial-index="0" fit="scale-down"
              preview-teleported="" />

          </template>

        </el-table-column>
        <el-table-column prop="catalog" label="分类" width="120" show-overflow-tooltip="">
          <template #default="scope">
            <span>{{ scope.row.catalogName }}</span>

          </template>

        </el-table-column>
        <el-table-column prop="album" label="专辑" width="120" show-overflow-tooltip="">
          <template #default="scope">
            <span>{{ scope.row.albumName }}</span>

          </template>

        </el-table-column>
        <el-table-column prop="desc" label="描述" width="140" show-overflow-tooltip="" />
        <el-table-column prop="viewNum" label="观看数" width="55" align="center"/>
        <el-table-column prop="isPublish" label="发布？" width="80" align="center">
          <template #default="scope">
            <el-checkbox v-model="scope.row.isPublish" onclick="return false"></el-checkbox>
          </template>
          <!-- <template #default="scope">
            <span>{{ scope.row.IsPublish }}</span>
          </template> -->
        </el-table-column>
        <el-table-column label="操作" width="140" align="center" fixed="right" show-overflow-tooltip=""
          v-if="auth('bizMedia:edit') || auth('bizMedia:delete')">
          <template #default="scope">
            <el-button icon="ele-Edit" size="small" text="" type="primary" @click="openEditBizMedia(scope.row)"
              v-auth="'bizMedia:edit'"> 编辑 </el-button>
            <el-button icon="ele-Delete" size="small" text="" type="primary" @click="delBizMedia(scope.row)"
              v-auth="'bizMedia:delete'"> 删除 </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination v-model:currentPage="tableParams.page" v-model:page-size="tableParams.pageSize"
        :total="tableParams.total" :page-sizes="[10, 20, 50, 100, 200, 500]" small="" background=""
        @size-change="handleSizeChange" @current-change="handleCurrentChange"
        layout="total, sizes, prev, pager, next, jumper" />
      <editDialog ref="editDialogRef" :title="editBizMediaTitle" @reloadTable="handleQuery" />
    </el-card>

    <el-dialog v-model="state.dialogUploadVisible" :lock-scroll="false" draggable width="400px">
      <template #header>
        <div style="color: #fff">
          <el-icon size="16" style="margin-right: 3px; display: inline; vertical-align: middle"> <ele-UploadFilled />
          </el-icon>
          <span> 上传文件 </span>
        </div>
      </template>
      <div>
        <el-upload ref="uploadRef" drag :auto-upload="false" :multiple="state.multipleFile" :file-list="state.fileList"
          action="" :on-change="handleChange" accept="image/*,image/webp">
          <el-icon class="el-icon--upload">
            <ele-UploadFilled />
          </el-icon>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <template #tip>
            <div class="el-upload__tip">请上传大小不超过 10MB 的文件</div>
            <div style="display: flex;">
              <el-select clearable="" filterable="" v-model="state.fileCatalog" placeholder="分类">
                <el-option v-for="(item, index) in bizCatalogCatalogDropdownList" :key="index" :value="item.value"
                  :label="item.label" />
              </el-select>
              <el-select clearable="" filterable="" v-model="state.fileAlbum" placeholder="专辑">
                <el-option v-for="(item, index) in bizAlbumAlbumDropdownList" :key="index" :value="item.value"
                  :label="item.label" />
              </el-select>
            </div>
          </template>
        </el-upload>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="state.dialogUploadVisible = false">取消</el-button>
          <el-button type="primary" @click="uploadFile" :disabled="((state.fileCatalog == null || state.fileCatalog == 0) && (state.fileAlbum == null || state.fileAlbum == 0))">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup="" name="bizMedia">
import { ref, reactive } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { auth } from '/@/utils/authFunction';
// import { getDictDataItem as di, getDictDataList as dl } from '/@/utils/dict-utils';
//import { formatDate } from '/@/utils/formatTime';
import { getAPI } from '/@/utils/axios-utils';
import { BizMediaApi, SysFileApi } from '/@/api-services/api';
import type{ AddBizMediaInput } from '/@/api-services/models/add-biz-media-input';

import { pageBizMedia, deleteBizMedia,
  getBizCatalogCatalogDropdown ,getBizAlbumAlbumDropdown} from '/@/api/main/bizMedia';
import editDialog from '/@/views/main/bizMedia/component/editDialog.vue'


const showAdvanceQueryUI = ref(false);
const editDialogRef = ref();
const loading = ref(false);
const tableData = ref<any>([]);
const queryParams = ref<any>({});
const tableParams = ref({
  page: 1,
  pageSize: 10,
  total: 0,
});
const editBizMediaTitle = ref("");

const state = reactive({
  loading: false,
  dialogUploadVisible: false,
  diaglogEditFile: false,
  fileList: [] as any,
  dialogDocxVisible: false,
  dialogXlsxVisible: false,
  dialogPdfVisible: false,
  showViewer: false,
  fileName: '',
  fileCatalog: null,
  fileAlbum: null,
  previewList: [] as string[],
  multipleFile: true, //多文件上传
});

// 改变高级查询的控件显示状态
const changeAdvanceQueryUI = () => {
  showAdvanceQueryUI.value = !showAdvanceQueryUI.value;
}


// 查询操作
const handleQuery = async () => {
  loading.value = true;
  var res = await pageBizMedia(Object.assign(queryParams.value, tableParams.value));
  tableData.value = res.data.result?.items ?? [];
  tableParams.value.total = res.data.result?.total;
  loading.value = false;
};

// 打开新增页面
const openAddBizMedia = () => {
  editBizMediaTitle.value = '添加媒体';
  editDialogRef.value.openDialog({});
};

// 打开编辑页面
const openEditBizMedia = (row: any) => {
  editBizMediaTitle.value = '编辑媒体';
  editDialogRef.value.openDialog(row);
};

// 删除
const delBizMedia = (row: any) => {
  ElMessageBox.confirm(`确定要删除吗?`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(async () => {
      await deleteBizMedia(row);
      handleQuery();
      ElMessage.success("删除成功");
    })
    .catch(() => { });
};

// 改变页面容量
const handleSizeChange = (val: number) => {
  tableParams.value.pageSize = val;
  handleQuery();
};

// 改变页码序号
const handleCurrentChange = (val: number) => {
  tableParams.value.page = val;
  handleQuery();
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

const openMultiUploadDialog = () => {
  state.fileList = [];
  state.multipleFile = true;
  state.dialogUploadVisible = true;
};

// 通过onChanne方法获得文件列表
const handleChange = (file: any, fileList: []) => {
	state.fileList = fileList;
};


// 上传
const uploadFile = async () => {
  if (state.fileList.length < 1) return;
  if (state.multipleFile) {
    let files = state.fileList.map((x: any) => x.raw);

    var fileResult = await getAPI(SysFileApi).apiSysFileUploadFilesPostForm(files);
    if(fileResult && fileResult.status == 200 && fileResult.data.result){
      let mediaList:AddBizMediaInput[] = [];
      fileResult.data.result?.forEach((x: any) => {
        let album = <AddBizMediaInput>{
          url: x.url,
          name:x.fileName,
          size:x.size,
          fileId:x.id,
          catalog:state.fileCatalog,
          album:state.fileAlbum,
          isPublish:true
        };
        mediaList.push(album);        
      });

      if(mediaList.length > 0){
        await getAPI(BizMediaApi).apiBizMediaBatchAddPost(mediaList);
      }

    }

  }
  else {
    await getAPI(SysFileApi).apiSysFileUploadFilePostForm(state.fileList[0].raw);
  }
  handleQuery();
  ElMessage.success('上传成功');
  state.dialogUploadVisible = false;
};

handleQuery();
</script>
<style scoped>
:deep(.el-ipnut),
:deep(.el-select),
:deep(.el-input-number) {
  width: 100%;
}
</style>


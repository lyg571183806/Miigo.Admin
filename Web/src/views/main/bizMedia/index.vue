<template>
  <div class="bizMedia-container">
    <el-card shadow="hover" :body-style="{ paddingBottom: '0' }">
      <el-form :model="queryParams" ref="queryForm" :inline="true">
            <el-form-item label="关键字">
              <el-input v-model="queryParams.searchKey" clearable="" placeholder="请输入模糊查询关键字"/>
            </el-form-item>
          
            <el-form-item label="文件id" v-if="showAdvanceQueryUI">
              <el-input v-model="queryParams.fileId" clearable="" placeholder="请输入文件id"/>
            </el-form-item>
            <el-form-item label="文件名" v-if="showAdvanceQueryUI">
              <el-input v-model="queryParams.name" clearable="" placeholder="请输入文件名"/>
            </el-form-item>
            <el-form-item label="创建者姓名" v-if="showAdvanceQueryUI">
              <el-input v-model="queryParams.createUserName" clearable="" placeholder="请输入创建者姓名"/>
            </el-form-item>
            <el-form-item label="描述" v-if="showAdvanceQueryUI">
              <el-input v-model="queryParams.desc" clearable="" placeholder="请输入描述"/>
            </el-form-item>
            <el-form-item label="修改者姓名" v-if="showAdvanceQueryUI">
              <el-input v-model="queryParams.updateUserName" clearable="" placeholder="请输入修改者姓名"/>
            </el-form-item>
            <el-form-item label="分类">
              <el-select clearable="" filterable="" v-model="queryParams.catalog" placeholder="请选择分类">
                <el-option v-for="(item,index) in  bizCatalogCatalogDropdownList" :key="index" :value="item.value" :label="item.label" />
                
              </el-select>
              
            </el-form-item>
            <el-form-item label="专辑">
              <el-select clearable="" filterable="" v-model="queryParams.album" placeholder="请选择专辑">
                <el-option v-for="(item,index) in  bizAlbumAlbumDropdownList" :key="index" :value="item.value" :label="item.label" />
                
              </el-select>
              
            </el-form-item>
            
            <el-form-item>
              <el-button-group>
                <el-button type="primary"  icon="ele-Search" @click="handleQuery" v-auth="'bizMedia:page'"> 查询 </el-button>
                <el-button icon="ele-Refresh" @click="() => queryParams = {}"> 重置 </el-button>
                <el-button icon="ele-ZoomIn" @click="changeAdvanceQueryUI" v-if="!showAdvanceQueryUI"> 高级 </el-button>
                <el-button icon="ele-ZoomOut" @click="changeAdvanceQueryUI" v-if="showAdvanceQueryUI"> 隐藏 </el-button>
              </el-button-group>
              
              <el-button-group style="margin-left:20px">
                <el-button type="primary" icon="ele-Plus" @click="openAddBizMedia" v-auth="'bizMedia:add'"> 新增 </el-button>
              </el-button-group>
            </el-form-item>
            
      </el-form>
    </el-card>
    <el-card class="full-table" shadow="hover" style="margin-top: 8px">
      <el-table
				:data="tableData"
				style="width: 100%"
				v-loading="loading"
				tooltip-effect="light"
				row-key="id"
				border="">
        <el-table-column type="index" label="序号" width="55" align="center"/>
        <el-table-column prop="url" label="文件" width="120" show-overflow-tooltip="">
          <template #default="scope">
            <el-image
            v-if="scope.row.url"
            style="width: 60px; height: 60px"
            :src="scope.row.url"
            :lazy="true"
            :hide-on-click-modal="true"
            :preview-src-list="[scope.row.url]"
            :initial-index="0"
            fit="scale-down"
            preview-teleported=""/>
            
          </template>
          
        </el-table-column>
        <el-table-column prop="cover" label="封面" width="120" show-overflow-tooltip="">
          <template #default="scope">
            <el-image
            v-if="scope.row.cover"
            style="width: 60px; height: 60px"
            :src="scope.row.cover"
            :lazy="true"
            :hide-on-click-modal="true"
            :preview-src-list="[scope.row.cover]"
            :initial-index="0"
            fit="scale-down"
            preview-teleported=""/>
            
          </template>
          
        </el-table-column>
        <el-table-column prop="name" label="文件名" width="140" show-overflow-tooltip="" />
        <el-table-column prop="desc" label="描述" width="140" show-overflow-tooltip="" />
        <el-table-column prop="catalog" label="分类" width="120" show-overflow-tooltip="">
          <template #default="scope">
            <span>{{scope.row.catalogName}}</span>
            
          </template>
          
        </el-table-column>
        <el-table-column prop="album" label="专辑" width="120" show-overflow-tooltip="">
          <template #default="scope">
            <span>{{scope.row.albumName}}</span>
            
          </template>
          
        </el-table-column>
        <el-table-column label="操作" width="140" align="center" fixed="right" show-overflow-tooltip="" v-if="auth('bizMedia:edit') || auth('bizMedia:delete')">
          <template #default="scope">
            <el-button icon="ele-Edit" size="small" text="" type="primary" @click="openEditBizMedia(scope.row)" v-auth="'bizMedia:edit'"> 编辑 </el-button>
            <el-button icon="ele-Delete" size="small" text="" type="primary" @click="delBizMedia(scope.row)" v-auth="'bizMedia:delete'"> 删除 </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
				v-model:currentPage="tableParams.page"
				v-model:page-size="tableParams.pageSize"
				:total="tableParams.total"
				:page-sizes="[10, 20, 50, 100, 200, 500]"
				small=""
				background=""
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				layout="total, sizes, prev, pager, next, jumper"
	/>
      <editDialog
        ref="editDialogRef"
        :title="editBizMediaTitle"
        @reloadTable="handleQuery"
      />
    </el-card>
  </div>
</template>

<script lang="ts" setup="" name="bizMedia">
  import { ref } from "vue";
  import { ElMessageBox, ElMessage } from "element-plus";
  import { auth } from '/@/utils/authFunction';
  import { getDictDataItem as di, getDictDataList as dl } from '/@/utils/dict-utils';
  //import { formatDate } from '/@/utils/formatTime';

  import editDialog from '/@/views/main/bizMedia/component/editDialog.vue'
  import { pageBizMedia, deleteBizMedia } from '/@/api/main/bizMedia';
  import { getBizCatalogCatalogDropdown } from '/@/api/main/bizMedia';
  import { getBizAlbumAlbumDropdown } from '/@/api/main/bizMedia';


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
  .catch(() => {});
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

  handleQuery();
</script>
<style scoped>
:deep(.el-ipnut),
:deep(.el-select),
:deep(.el-input-number) {
	width: 100%;
}
</style>


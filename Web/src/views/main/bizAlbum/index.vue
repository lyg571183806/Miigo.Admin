<template>
  <div class="bizAlbum-container">
    <el-card shadow="hover" :body-style="{ paddingBottom: '0' }">
      <el-form :model="queryParams" ref="queryForm" :inline="true">
            <el-form-item label="关键字">
              <el-input v-model="queryParams.searchKey" clearable="" placeholder="请输入模糊查询关键字"/>
            </el-form-item>
          
            <el-form-item label="名称" v-if="showAdvanceQueryUI">
              <el-input v-model="queryParams.name" clearable="" placeholder="请输入名称"/>
            </el-form-item>
            <el-form-item label="描述" v-if="showAdvanceQueryUI">
              <el-input v-model="queryParams.desc" clearable="" placeholder="请输入描述"/>
            </el-form-item>
            <el-form-item label="创建者姓名" v-if="showAdvanceQueryUI">
              <el-input v-model="queryParams.createUserName" clearable="" placeholder="请输入创建者姓名"/>
            </el-form-item>
            <el-form-item label="修改者姓名" v-if="showAdvanceQueryUI">
              <el-input v-model="queryParams.updateUserName" clearable="" placeholder="请输入修改者姓名"/>
            </el-form-item>
            
            <el-form-item>
              <el-button-group>
                <el-button type="primary"  icon="ele-Search" @click="handleQuery" v-auth="'bizAlbum:page'"> 查询 </el-button>
                <el-button icon="ele-Refresh" @click="() => queryParams = {}"> 重置 </el-button>
                <el-button icon="ele-ZoomIn" @click="changeAdvanceQueryUI" v-if="!showAdvanceQueryUI"> 高级 </el-button>
                <el-button icon="ele-ZoomOut" @click="changeAdvanceQueryUI" v-if="showAdvanceQueryUI"> 隐藏 </el-button>
              </el-button-group>
              
              <el-button-group style="margin-left:20px">
                <el-button type="primary" icon="ele-Plus" @click="openAddBizAlbum" v-auth="'bizAlbum:add'"> 新增 </el-button>
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
        <el-table-column prop="name" label="名称" width="140" show-overflow-tooltip="" />
        <el-table-column prop="desc" label="描述" width="140" show-overflow-tooltip="" />
        <el-table-column prop="logo" label="图标" width="120" show-overflow-tooltip="">
          <template #default="scope">
            <el-image
            v-if="scope.row.logo"
            style="width: 60px; height: 60px"
            :src="scope.row.logo"
            :lazy="true"
            :hide-on-click-modal="true"
            :preview-src-list="[scope.row.logo]"
            :initial-index="0"
            fit="scale-down"
            preview-teleported=""/>
            
          </template>
          
        </el-table-column>
        <el-table-column label="操作" width="140" align="center" fixed="right" show-overflow-tooltip="" v-if="auth('bizAlbum:edit') || auth('bizAlbum:delete')">
          <template #default="scope">
            <el-button icon="ele-Edit" size="small" text="" type="primary" @click="openEditBizAlbum(scope.row)" v-auth="'bizAlbum:edit'"> 编辑 </el-button>
            <el-button icon="ele-Delete" size="small" text="" type="primary" @click="delBizAlbum(scope.row)" v-auth="'bizAlbum:delete'"> 删除 </el-button>
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
        :title="editBizAlbumTitle"
        @reloadTable="handleQuery"
      />
    </el-card>
  </div>
</template>

<script lang="ts" setup="" name="bizAlbum">
  import { ref } from "vue";
  import { ElMessageBox, ElMessage } from "element-plus";
  import { auth } from '/@/utils/authFunction';
  import { getDictDataItem as di, getDictDataList as dl } from '/@/utils/dict-utils';
  //import { formatDate } from '/@/utils/formatTime';

  import editDialog from '/@/views/main/bizAlbum/component/editDialog.vue'
  import { pageBizAlbum, deleteBizAlbum } from '/@/api/main/bizAlbum';


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
  const editBizAlbumTitle = ref("");

  // 改变高级查询的控件显示状态
  const changeAdvanceQueryUI = () => {
    showAdvanceQueryUI.value = !showAdvanceQueryUI.value;
  }
  

  // 查询操作
  const handleQuery = async () => {
    loading.value = true;
    var res = await pageBizAlbum(Object.assign(queryParams.value, tableParams.value));
    tableData.value = res.data.result?.items ?? [];
    tableParams.value.total = res.data.result?.total;
    loading.value = false;
  };

  // 打开新增页面
  const openAddBizAlbum = () => {
    editBizAlbumTitle.value = '添加专辑';
    editDialogRef.value.openDialog({});
  };

  // 打开编辑页面
  const openEditBizAlbum = (row: any) => {
    editBizAlbumTitle.value = '编辑专辑';
    editDialogRef.value.openDialog(row);
  };

  // 删除
  const delBizAlbum = (row: any) => {
    ElMessageBox.confirm(`确定要删除吗?`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
  .then(async () => {
    await deleteBizAlbum(row);
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

  handleQuery();
</script>
<style scoped>
:deep(.el-ipnut),
:deep(.el-select),
:deep(.el-input-number) {
	width: 100%;
}
</style>


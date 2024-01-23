<template>
  <div class="bizCatalog-container">
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
            <el-form-item>
              <el-button-group>
                <el-button type="primary"  icon="ele-Search" @click="handleQuery" v-auth="'bizCatalog:page'"> 查询 </el-button>
                <el-button icon="ele-Refresh" @click="() => queryParams = {}"> 重置 </el-button>
                <el-button icon="ele-ZoomIn" @click="changeAdvanceQueryUI" v-if="!showAdvanceQueryUI"> 高级 </el-button>
                <el-button icon="ele-ZoomOut" @click="changeAdvanceQueryUI" v-if="showAdvanceQueryUI"> 隐藏 </el-button>
                
              </el-button-group>
              
              <el-button-group style="margin-left:20px">
                <el-button type="primary" icon="ele-Plus" @click="openAddBizCatalog" v-auth="'bizCatalog:add'"> 新增 </el-button>
                
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
        <el-table-column prop="sort" label="排序" width="140" show-overflow-tooltip="" />
        <el-table-column label="操作" width="140" align="center" fixed="right" show-overflow-tooltip="" v-if="auth('bizCatalog:edit') || auth('bizCatalog:delete')">
          <template #default="scope">
            <el-button icon="ele-Edit" size="small" text="" type="primary" @click="openEditBizCatalog(scope.row)" v-auth="'bizCatalog:edit'"> 编辑 </el-button>
            <el-button icon="ele-Delete" size="small" text="" type="primary" @click="delBizCatalog(scope.row)" v-auth="'bizCatalog:delete'"> 删除 </el-button>
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
        :title="editBizCatalogTitle"
        @reloadTable="handleQuery"
      />
    </el-card>
  </div>
</template>

<script lang="ts" setup="" name="bizCatalog">
  import { ref } from "vue";
  import { ElMessageBox, ElMessage } from "element-plus";
  import { auth } from '/@/utils/authFunction';
  import { getDictDataItem as di, getDictDataList as dl } from '/@/utils/dict-utils';
  //import { formatDate } from '/@/utils/formatTime';

  import editDialog from '/@/views/main/bizCatalog/component/editDialog.vue'
  import { pageBizCatalog, deleteBizCatalog } from '/@/api/main/bizCatalog';


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
  const editBizCatalogTitle = ref("");

  // 改变高级查询的控件显示状态
  const changeAdvanceQueryUI = () => {
    showAdvanceQueryUI.value = !showAdvanceQueryUI.value;
  }
  

  // 查询操作
  const handleQuery = async () => {
    loading.value = true;
    var res = await pageBizCatalog(Object.assign(queryParams.value, tableParams.value));
    tableData.value = res.data.result?.items ?? [];
    tableParams.value.total = res.data.result?.total;
    loading.value = false;
  };

  // 打开新增页面
  const openAddBizCatalog = () => {
    editBizCatalogTitle.value = '添加分类';
    editDialogRef.value.openDialog({});
  };

  // 打开编辑页面
  const openEditBizCatalog = (row: any) => {
    editBizCatalogTitle.value = '编辑分类';
    editDialogRef.value.openDialog(row);
  };

  // 删除
  const delBizCatalog = (row: any) => {
    ElMessageBox.confirm(`确定要删除吗?`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
  .then(async () => {
    await deleteBizCatalog(row);
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


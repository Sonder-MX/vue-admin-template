<template>
  <div>
    <el-card>
      <el-form :inline="true" class="form-top">
        <el-form-item label="用户名">
          <el-input placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">搜索</el-button>
          <el-button type="primary">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card style="margin-top: 20px">
      <el-button type="primary">添加用户</el-button>
      <el-button type="danger">删除用户</el-button>

      <!-- table -->
      <el-table style="margin: 10px 0" border :data="userList">
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column
          label="#"
          type="index"
          align="center"
        ></el-table-column>
        <el-table-column label="ID" align="center" prop="id"></el-table-column>
        <el-table-column
          label="用户姓名"
          align="center"
          prop="username"
        ></el-table-column>
        <el-table-column
          label="用户昵称"
          align="center"
          prop="name"
        ></el-table-column>
        <el-table-column
          label="用户角色"
          align="center"
          prop="roleName"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          label="创建时间"
          align="center"
          prop="createTime"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          label="更新时间"
          align="center"
          prop="updateTime"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column label="操作" width="300px" align="center">
          <template #="{ row, $index }">
            <el-button type="primary" size="small" icon="User">
              分类角色
            </el-button>
            <el-button type="primary" size="small" icon="Edit">编辑</el-button>
            <el-button type="primary" size="small" icon="Delete">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
        v-model:current-page="pageNo"
        v-model:page-size="pageSize"
        :page-sizes="[5, 7, 9, 11]"
        :background="true"
        layout="prev, pager, next, jumper, ->, total, sizes"
        :total="total"
        @size-change="getAllUser"
        @current-change="getAllUser"
      />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { reqUserInfo } from '@/api/acl/user'
import type { UserRespData, Records } from '@/api/acl/user/type'

let pageNo = ref<number>(1)
let pageSize = ref<number>(5)
let total = ref<number>(0)
let userList = ref<Records>([])

const getAllUser = async (page = 1) => {
  pageNo.value = page
  const result: UserRespData = await reqUserInfo(pageNo.value, pageSize.value)
  if (result.code === 200) {
    total.value = result.data.total
    userList.value = result.data.records
  }
}

onMounted(() => {
  getAllUser()
})
</script>

<style scoped lang="scss">
.form-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

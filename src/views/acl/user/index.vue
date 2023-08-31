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
      <el-table style="margin: 10px 0" border>
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column label="#" align="center"></el-table-column>
        <el-table-column label="ID" align="center"></el-table-column>
        <el-table-column label="用户姓名" align="center"></el-table-column>
        <el-table-column label="用户昵称" align="center"></el-table-column>
        <el-table-column label="用户角色" align="center"></el-table-column>
        <el-table-column label="创建时间" align="center"></el-table-column>
        <el-table-column label="更新时间" align="center"></el-table-column>
        <el-table-column
          label="操作"
          width="260px"
          align="center"
        ></el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
        v-model:current-page="pageNo"
        v-model:page-size="pageSize"
        :page-sizes="[5, 7, 9, 11]"
        :background="true"
        layout="prev, pager, next, jumper, ->, total, sizes"
        :total="400"
      />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let pageNo = ref<number>(1)
let pageSize = ref<number>(5)
</script>

<style scoped lang="scss">
.form-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

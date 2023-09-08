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
      <el-button type="primary" @click="addUser">添加用户</el-button>
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
              分配角色
            </el-button>
            <el-button
              type="primary"
              size="small"
              icon="Edit"
              @click="updateUser(row)"
            >
              编辑
            </el-button>
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

    <!-- 抽屉结构 -->
    <el-drawer v-model="drawerShow">
      <template #header>
        <h4>{{ userParams.id ? '更新用户' : '新增用户' }}</h4>
      </template>
      <template #default>
        <el-form :model="userParams" :rules="rules" ref="formRef">
          <el-form-item label="用户姓名" prop="username">
            <el-input v-model="userParams.username"></el-input>
          </el-form-item>
          <el-form-item label="用户昵称" prop="name">
            <el-input v-model="userParams.name"></el-input>
          </el-form-item>
          <el-form-item label="用户密码" prop="password" v-if="!userParams.id">
            <el-input v-model="userParams.password"></el-input>
          </el-form-item>
        </el-form>
      </template>
      <template #footer>
        <div style="flex: auto">
          <el-button @click="cancel">取消</el-button>
          <el-button type="primary" @click="save">确定</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, nextTick } from 'vue'
import { reqUserInfo, reqAddUserOrEdit } from '@/api/acl/user'
import type { UserRespData, Records, UserData } from '@/api/acl/user/type'
import { ElMessage } from 'element-plus'

let pageNo = ref<number>(1)
let pageSize = ref<number>(5)
let total = ref<number>(0)
let userList = ref<Records>([])
let drawerShow = ref<boolean>(false) // 抽屉显示
let userParams = reactive<UserData>({
  username: '',
  name: '',
  password: '',
})
const formRef = ref<any>(null)

const getAllUser = async (page = 1) => {
  pageNo.value = page
  const result: UserRespData = await reqUserInfo(pageNo.value, pageSize.value)
  if (result.code === 200) {
    total.value = result.data.total
    userList.value = result.data.records
  }
}

const addUser = () => {
  drawerShow.value = !drawerShow.value
  Object.assign(userParams, {
    id: 0,
    username: '',
    name: '',
    password: '',
  })

  // 清除上一次的校验结果
  nextTick(() => {
    formRef.value.clearValidate('username')
    formRef.value.clearValidate('name')
    formRef.value.clearValidate('password')
  })
}

const updateUser = (userRow: UserData) => {
  drawerShow.value = !drawerShow.value
  Object.assign(userParams, userRow)

  // 清除上一次的校验结果
  nextTick(() => {
    formRef.value.clearValidate('username')
    formRef.value.clearValidate('name')
  })
}

const save = async () => {
  await formRef.value.validate()
  const result = await reqAddUserOrEdit(userParams)
  if (result.code === 200) {
    drawerShow.value = false
    ElMessage({
      message: userParams.id ? '编辑成功' : '添加成功',
      type: 'success',
    })
    // getAllUser(userParams.id ? pageNo.value : 1)

    window.location.reload()
  } else {
    drawerShow.value = false
    ElMessage({
      message: userParams.id ? '编辑失败' : '添加失败',
      type: 'error',
    })
  }
}

const cancel = () => {
  drawerShow.value = false
  Object.assign(userParams, {
    username: '',
    name: '',
    password: '',
  })
}

const validatorUsername = async (_rule: any, value: string, callBack: any) => {
  if (value.trim().length >= 5) {
    callBack()
  } else {
    callBack(new Error('用户名长度必须大于等于5'))
  }
}

const validatorName = async (_rule: any, value: string, callBack: any) => {
  if (value.trim().length >= 5) {
    callBack()
  } else {
    callBack(new Error('用户昵称长度必须大于等于5'))
  }
}

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { validator: validatorUsername, trigger: 'blur' },
  ],
  name: [
    { required: true, message: '请输入用户昵称', trigger: 'blur' },
    { validator: validatorName, trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入用户密码', trigger: 'blur' },
    { min: 6, message: '密码长度在 6 个字符以上', trigger: 'blur' },
  ],
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

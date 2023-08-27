<template>
  <div class="login-container">
    <el-row>
      <!-- xs: <768px时，占0列 -->
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login-form">
          <h1>Hello</h1>
          <h2>欢迎来到 Admin 后台管理</h2>
          <el-form-item>
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              :prefix-icon="Lock"
              type="password"
              show-password
              v-model="loginForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <div class="login-btn-box">
              <el-button class="login-btn" type="primary" @click="login">
                登 录
              </el-button>
            </div>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive } from 'vue'

let loginForm = reactive({
  username: '',
  password: '',
})

const login = () => {
  console.log(loginForm)
}
</script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat center center;
  background-size: cover;

  .login-form {
    position: relative;
    width: 75%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat center center;
    background-size: cover;
    padding: 40px 30px;
    border-radius: 18px;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      color: #ddd;
      font-size: 20px;
      margin: 20px 0;
    }

    .login-btn-box {
      margin-top: 30px;
      width: 100%;
      text-align: center;

      .login-btn {
        width: 50%;
        border-radius: 10px;
      }
    }
  }
}
</style>

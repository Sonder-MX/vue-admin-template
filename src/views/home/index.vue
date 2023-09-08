<template>
  <div>
    <el-card>
      <div class="box">
        <img :src="userStore.avatar" alt="abatar" class="avatar" />
        <div class="text-box">
          <h3 class="title">{{ getTime() }} ~ {{ userStore.username }}</h3>
          <p>欢迎回来</p>
        </div>
      </div>
    </el-card>
    <div class="btom-img">
      <svg-icon icon="welcome" width="600px" height="400px"></svg-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import useUserStore from '@/stores/modules/user'
import { getTime } from '@/utils/timeTips'

const userStore = useUserStore()
</script>

<style scoped lang="scss">
.box {
  display: flex;

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .text-box {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
      color: #595959;
      font-style: italic;
    }
  }
}

.btom-img {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}
</style>

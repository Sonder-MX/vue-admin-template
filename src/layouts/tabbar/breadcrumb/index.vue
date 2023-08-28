<template>
  <el-icon style="margin-right: 18px; cursor: pointer" @click="changeIcon">
    <component :is="LayOutSettingStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>

  <el-breadcrumb separator-icon="ArrowRight">
    <!-- 面包动态展示路由名字与标题 -->
    <el-breadcrumb-item
      v-for="(item, index) in route.matched"
      :key="index"
      v-show="item.meta.title"
      :to="item.path"
    >
      <!-- 面包屑展示匹配路由的标题 -->
      <el-icon style="position: relative; top: 2px; margin-right: 2px">
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span>{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import useLayOutSettingStore from '@/stores/modules/setting'

const LayOutSettingStore = useLayOutSettingStore()
const route = useRoute()

//点击图标的方法
const changeIcon = () => {
  //图标进行切换
  LayOutSettingStore.fold = !LayOutSettingStore.fold
}
</script>

<script lang="ts">
export default {
  name: 'Breadcrumb',
}
</script>

<style scoped></style>

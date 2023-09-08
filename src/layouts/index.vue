<template>
  <div class="layout-container">
    <!-- 左侧菜单 -->
    <div class="layout-slider" :class="{ fold: layoutSettingStore.fold }">
      <Logo :isTitle="!layoutSettingStore.fold" />
      <!-- 菜单 -->
      <el-scrollbar class="scrollbar">
        <el-menu
          :default-active="route.path"
          :unique-opened="true"
          :collapse="layoutSettingStore.fold"
          background-color="#001529"
          text-color="#fff"
        >
          <MenuCpmpon :menuList="userStore.menuList" />
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout-tabbar" :class="{ fold: layoutSettingStore.fold }">
      <TabBar />
    </div>
    <!-- content -->
    <div class="layout-main" :class="{ fold: layoutSettingStore.fold }">
      <Main />
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from '@/components/Logo.vue'
import MenuCpmpon from '@/components/MenuCpmpon.vue'
import useUserStore from '@/stores/modules/user'
import { useRoute } from 'vue-router'
import Main from './main/index.vue'
import TabBar from './tabbar/index.vue'
import useLayOutSettingStore from '@/stores/modules/setting'

const layoutSettingStore = useLayOutSettingStore()
const userStore = useUserStore()
const route = useRoute()
</script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100vh;

  .layout-slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-bg;
    transition: all 0.5s;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      // padding: 20px;

      .el-menu {
        border-right: none;
      }
    }

    &.fold {
      width: $base-menu-min-width;
    }
  }

  .layout-tabbar {
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    position: fixed;
    top: 0;
    right: 0;
    transition: all 0.5s;

    &.fold {
      width: calc(100vw - $base-menu-min-width);
    }
  }

  .layout-main {
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 20px;
    overflow: auto;
    transition: all 0.5s;

    &.fold {
      width: calc(100vw - $base-menu-min-width);
    }
  }
}
</style>

<template>
  <div class="layout-container">
    <!-- 左侧菜单 -->
    <div class="layout-slider"></div>
    <!-- 顶部导航 -->
    <div class="layout-tabbar"></div>
    <!-- content -->
    <div class="layout-main"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100vh;

  .layout-slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-bg;
  }

  .layout-tabbar {
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    position: fixed;
    top: 0;
    right: 0;
  }

  .layout-main {
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 20px;
    overflow: auto;
  }
}
</style>

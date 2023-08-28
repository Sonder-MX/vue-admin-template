<template>
  <div class="logo">
    <img alt="logo" :src="settings.logo" />
    <p>{{ settings.logoTitle }}</p>
  </div>
</template>

<script setup lang="ts">
import settings from '@/settings'
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  p {
    font-size: $base-menu-logo-font-size;
    font-weight: bold;
  }
}
</style>

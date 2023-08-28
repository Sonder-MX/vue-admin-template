<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
  transform: translateX(500px);
}

.fade-enter-active {
  transition: all 0.6s;
}

.fade-enter-to {
  opacity: 1;
  transform: translateX(0);
}
</style>

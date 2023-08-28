<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" v-if="flag" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import useLayOutSettingStore from '@/stores/modules/setting'

const layoutSettingStore = useLayOutSettingStore()
// 控制组件销毁
let flag = ref(true)

watch(
  () => layoutSettingStore.refsh,
  () => {
    flag.value = false
    nextTick(() => {
      flag.value = true
    })
  },
)
</script>

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

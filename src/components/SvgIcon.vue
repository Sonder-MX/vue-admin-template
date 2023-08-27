<template>
  <div>
    <svg :style="{ width, height }">
      <use :xlink:href="'#icon-' + icon" :fill="color"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  // 矢量图标名称
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '1em',
  },
  height: {
    type: String,
    default: '1em',
  },
})
</script>

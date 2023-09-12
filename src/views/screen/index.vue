<template>
  <div class="container">
    <div class="screen" ref="screenRef">
      <div class="top">
        <Top />
      </div>
      <div class="main">
        <div class="left">
          <Tourist class="tourist" />
          <Sex class="sex" />
          <Age class="age" />
        </div>
        <div class="center">
          <MapChart class="map-chart" />
          <LineChart class="line-chart" />
        </div>
        <div class="right">
          <RankChart class="rank" />
          <YearChart class="year" />
          <CountChart class="count" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Top from './components/top/index.vue'
import Tourist from './components/tourist/index.vue'
import Sex from './components/sex/index.vue'
import Age from './components/age/index.vue'
import MapChart from './components/map/index.vue'
import LineChart from './components/line/index.vue'
import RankChart from './components/rank/index.vue'
import YearChart from './components/year/index.vue'
import CountChart from './components/count/index.vue'

const screenRef = ref()

//定义大屏缩放比例
function getScale(w = 1920, h = 1080) {
  const ww = window.innerWidth / w
  const hh = window.innerHeight / h
  return ww < hh ? ww : hh
}

onMounted(() => {
  screenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
})

//监听视口变化
window.onresize = () => {
  screenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
}
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  background: url(./images/bg.png) no-repeat;
  background-size: cover;
  // 不可选中
  user-select: none;

  .screen {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 1920px;
    height: 1080px;
    transform-origin: left top; //设置缩放中心点

    .top {
      width: 100%;
      height: 40px;
    }

    .main {
      display: flex;

      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-left: 40px;

        .rank {
          flex: 1.5;
        }

        .year {
          flex: 1;
        }

        .count {
          flex: 1;
        }
      }

      .left {
        flex: 1;
        height: 1040px;
        display: flex;
        flex-direction: column;

        .tourist {
          flex: 1.2;
        }

        .sex {
          flex: 1;
        }

        .age {
          flex: 1;
        }
      }

      .center {
        flex: 1.5;
        display: flex;
        flex-direction: column;

        .map-chart {
          flex: 4;
        }

        .line-chart {
          flex: 1;
        }
      }
    }
  }
}
</style>

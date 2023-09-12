<template>
  <div class="box4" ref="mapRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import chinaJSON from './china.json'

const mapRef = ref<HTMLElement>()
echarts.registerMap('china', chinaJSON as any) // 注册地图

onMounted(() => {
  const mapChart = echarts.init(mapRef.value)

  mapChart.setOption({
    geo: {
      map: 'china', // 地图类型
      roam: true, // 开启鼠标缩放和平移漫游
      left: 100,
      top: 150,
      right: 100,
      zoom: 1.2,
      bottom: 0,
      label: {
        show: true, //文字显示出来
        color: 'white',
        fontSize: 14,
      },
      itemStyle: {
        borderWidth: 1,
        areaColor: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.8,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(147, 235, 248, 0)', // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(147, 235, 248, .2)', // 100% 处的颜色
            },
          ],
        },
        shadowColor: 'rgba(128, 217, 248, 1)',
        shadowOffsetX: -2,
        shadowOffsetY: 2,
        shadowBlur: 10,
        borderColor: 'rgba(147, 235, 248, 1)',
      },
      emphasis: {
        //地图高亮
        itemStyle: {
          color: '#93EBF8',
        },
        label: {
          color: 'blue',
          fontSize: '20px',
        },
      },
    },
    //布局位置
    grid: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    },
    series: [
      {
        type: 'lines',
        zlevel: 2,
        effect: {
          show: true,
          symbolSize: 5,
          color: '#E4AA0C',
          symbol: 'arrow',
        },
        lineStyle: {
          color: '#F56828',
          width: 1.5, //线条宽度
          curveness: 0.3,
        },
        data: [
          {
            coords: [
              [109.754859, 19.189767], // 初始点经纬度
              [116.41995, 40.18994], //目标点经纬度
            ],
            label: {
              start: '海口',
              end: '北京',
            },
          },
          {
            coords: [
              [109.754859, 19.189767],
              [85.294711, 41.371801],
            ],
            label: {
              start: '海口',
              end: '乌鲁木齐',
            },
          },
          {
            coords: [
              [110.3467, 41.4899],
              [109.754859, 19.189767],
            ],
            lineStyle: {
              // 自定样样式
              color: '#52b9c7',
            },
            label: {
              start: '呼和浩特',
              end: '海口',
            },
          },
          {
            coords: [
              [125.8154, 44.2584],
              [103.5901, 36.3043],
            ],
            lineStyle: {
              color: '#5abead',
            },
            label: {
              start: '长春',
              end: '兰州',
            },
          },
          {
            coords: [
              [119.4543, 25.9222],
              [103.5901, 36.3043],
            ],
            label: {
              start: '福州',
              end: '兰州',
            },
          },
          {
            coords: [
              [106.3586, 38.1775],
              [119.4543, 25.9222],
            ],
            label: {
              start: '银川',
              end: '福州',
            },
          },
          {
            coords: [
              [114.4995, 38.1006],
              [119.4543, 25.9222],
            ],
            label: {
              start: '石家庄',
              end: '福州',
            },
          },
          {
            coords: [
              [117.4219, 39.4189],
              [109.754859, 19.189767],
            ],
            label: {
              start: '天津',
              end: '海口',
            },
          },
        ],
      },
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        rippleEffect: {
          number: 2,
          scale: 3,
          brushType: 'stroke',
        },
        itemStyle: {
          color: '#F56828',
        },
        data: [
          {
            value: [109.754859, 19.189767],
            label: {
              name: '海口市',
            },
            itemStyle: {
              color: 'red',
            },
          },
          {
            value: [116.41995, 40.18994],
            label: {
              name: '北京市',
            },
          },
          {
            value: [85.294711, 41.371801],
            label: {
              name: '乌鲁木齐市',
            },
          },
          {
            value: [110.3467, 41.4899],
            label: {
              name: '呼和浩特市',
            },
          },
          {
            value: [125.8154, 44.2584],
            label: {
              name: '长春市',
            },
          },
          {
            value: [114.4995, 38.1006],
            label: {
              name: '石家庄市',
            },
          },
          {
            value: [117.4219, 39.4189],
            label: {
              name: '天津市',
            },
          },
          {
            value: [106.3586, 38.1775],
            label: {
              name: '银川市',
            },
          },
          {
            value: [103.5901, 36.3043],
            label: {
              name: '兰州市',
            },
          },
          {
            value: [119.4543, 25.9222],
            label: {
              name: '福州市',
            },
          },
        ],
      },
    ],
  })
})
</script>

<style scoped lang="scss"></style>

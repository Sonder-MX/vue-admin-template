import SvgIcon from './SvgIcon.vue'
import type { App, Component } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const components: Record<string, Component> = { SvgIcon }

export default {
  install(app: App) {
    // 注册全局组件
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })

    // 注册element-plus的图标
    Object.entries(ElementPlusIconsVue).forEach(([name, component]) => {
      app.component(name, component)
    })
  },
}

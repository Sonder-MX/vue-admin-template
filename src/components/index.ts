import SvgIcon from './SvgIcon.vue'
import type { App, Component } from 'vue'

const components: Record<string, Component> = { SvgIcon }

export default {
  install(app: App) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
  },
}

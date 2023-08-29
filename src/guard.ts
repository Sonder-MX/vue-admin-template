// 全局路由守卫
import router from './router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import pinia from './stores'
import useUserStore from './stores/modules/user'
import settings from './settings'

nprogress.configure({ showSpinner: false })

const userStore = useUserStore(pinia)

router.beforeEach(async (to, _from, next) => {
  document.title = `${settings.logoTitle} - ${to.meta.title}`
  nprogress.start()

  if (userStore.token) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (userStore.username) {
        next()
      } else {
        try {
          await userStore.getUserInfo()
          next()
        } catch (error) {
          userStore.userLogout()
          next({ path: '/login', query: { redirect: to.fullPath } })
        }
      }
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.fullPath } })
    }
  }
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.afterEach((_to, _from) => {
  nprogress.done()
})

import { defineStore } from 'pinia'
import { reqLogin, reqUserInfo } from '@/api/user'
import type { LoginForm, ResponseData, DataType } from '@/api/user/type'
import type { UserState } from './types/type'
import { routes } from '@/router'

const useUserStore = defineStore('User', {
  state: (): UserState => ({
    token: localStorage.getItem('token') || null,
    menuList: routes, // 菜单列表
    username: '',
    avatar: '',
  }),
  getters: {},
  actions: {
    async userLogin(data: LoginForm) {
      await reqLogin(data).then((res: ResponseData<DataType>) => {
        if (res.code === 200) {
          this.token = res.data.token as string
          localStorage.setItem('token', res.data.token as string)
          return Promise.resolve(res.data)
        } else {
          return Promise.reject(new Error(res.data.message))
        }
      })
    },

    async getUserInfo() {
      const result = await reqUserInfo()
      if (result.code === 200) {
        this.username = result.data.username
        this.avatar = result.data.avatar
      }
    },

    userLogout() {
      // 向后端发送请求，让token失效 -> eg: 将未过期的token加入redis黑名单

      this.token = null
      localStorage.removeItem('token')
      this.username = ''
      this.avatar = ''
    },
  },
})

export default useUserStore

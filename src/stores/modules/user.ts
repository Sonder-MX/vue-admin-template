import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import type { LoginForm, ResponseData, DataType } from '@/api/user/type'
import type { UserState } from './types/type'
import { routes } from '@/router'

const useUserStore = defineStore('User', {
  state: (): UserState => ({
    token: localStorage.getItem('token') || null,
    menuList: routes, // 菜单列表
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
  },
})

export default useUserStore

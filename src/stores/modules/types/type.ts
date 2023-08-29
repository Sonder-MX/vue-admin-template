import type { RouteRecordRaw } from 'vue-router'

export interface UserState {
  token: string | null
  menuList: RouteRecordRaw[]
  username: string
  avatar: string
}

export interface LoginForm {
  username: string
  password: string
}

export interface TokenData {
  token: string
}

export interface UserInfo {
  userId: number
  avatar: string
  username: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
}

// 响应
export interface ResponseData<T = any> {
  code: number
  message?: string
  data: T
}

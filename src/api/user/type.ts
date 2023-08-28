export interface LoginForm {
  username: string
  password: string
}

export interface DataType {
  token?: string
  message?: string
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
  data: T
}

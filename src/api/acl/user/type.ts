export interface ResponseData {
  code: number
  message: string
  ok: boolean
}

export interface UserData {
  id?: number
  username?: string
  name?: string
  password?: string
  phone?: null
  roleName?: string
  createTime?: string
  updateTime?: string
}

export type Records = UserData[]

export interface UserRespData extends ResponseData {
  data: {
    records: Records
    total: number
    size: number
    current: number
    pages: number
  }
}

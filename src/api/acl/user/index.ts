import request from '@/utils/request'
import type { UserRespData } from './type'

enum API {
  ALLUSER_URL = '/admin/acl/user/',
}

// 用户信息
export const reqUserInfo = (page: number, limit: number) =>
  request.get<any, UserRespData>(API.ALLUSER_URL + `${page}/${limit}`)

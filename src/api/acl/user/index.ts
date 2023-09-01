import request from '@/utils/request'
import type { UserRespData, UserData } from './type'

enum API {
  ALLUSER_URL = '/admin/acl/user/',
  ADDUSER_URL = '/admin/acl/user/save',
  UPDATEUSER_URL = '/admin/acl/user/update',
}

// 用户信息
export const reqUserInfo = (page: number, limit: number) =>
  request.get<any, UserRespData>(API.ALLUSER_URL + `${page}/${limit}`)

// 添加用户
export const reqAddUserOrEdit = (data: UserData) => {
  // 更新
  if (data.id) {
    return request.put<any, any>(API.UPDATEUSER_URL, data)
  } else {
    return request.post<any, any>(API.ADDUSER_URL, data)
  }
}

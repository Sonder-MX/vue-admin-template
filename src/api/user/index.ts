import request from '@/utils/request'
import type { LoginForm, DataType, UserInfo, ResponseData } from './type'

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

export const reqLogin = (data: LoginForm): Promise<ResponseData<DataType>> => {
  return request.post<any, ResponseData<DataType>>(API.LOGIN_URL, data)
}

export const reqUserInfo = () => {
  return request.get<any, ResponseData<UserInfo>>(API.USERINFO_URL)
}

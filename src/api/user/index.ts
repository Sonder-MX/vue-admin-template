import request from '@/utils/request'
import type { LoginForm, DataType, UserInfo, ResponseData } from './type'

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

export const reqLogin = (data: LoginForm): Promise<ResponseData<DataType>> => {
  return request.post<ResponseData<DataType>, any>(API.LOGIN_URL, data)
}

export const reqUserInfo = () => {
  return request.get<ResponseData<UserInfo>>(API.USERINFO_URL)
}

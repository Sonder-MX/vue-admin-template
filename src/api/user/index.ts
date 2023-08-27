import request from '@/utils/request'
import type { LoginForm, TokenData, UserInfo, ResponseData } from './type'

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

export const reqLogin = (data: LoginForm) => {
  return request.post<ResponseData<TokenData>>(API.LOGIN_URL, data)
}

export const reqUserInfo = () => {
  return request.get<ResponseData<UserInfo>>(API.USERINFO_URL)
}

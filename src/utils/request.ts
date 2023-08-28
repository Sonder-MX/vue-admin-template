import axios from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API as string,
  timeout: 5000,
})

// 请求拦截器
request.interceptors.request.use((config) => {
  return config
})

/// 响应拦截器
request.interceptors.response.use(
  // 成功回调
  (response) => {
    return Promise.resolve(response.data)
  },
  // 失败回调 处理http网络错误
  (error) => {
    let msg = ''
    const status = error.response.status
    switch (status) {
      case 401:
        msg = 'Token 过期'
        break
      case 403:
        msg = '五权限'
        break
      case 404:
        msg = '请求地址错误'
        break
      case 500:
        msg = '服务器错误'
        break
      default:
        msg = '网络错误'
        break
    }

    ElMessage({
      type: 'error',
      message: msg,
    })

    return Promise.reject(error.message)
  },
)

export default request

import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios'
import * as qs from 'qs'
import { runtime } from '@/config'
import { Loading } from 'element-ui';
import { ElLoadingComponent } from 'element-ui/types/loading';
const $axios = axios.create({
  baseURL: runtime.staticPath,
  timeout: 15000,
  transformRequest: [(data: anyObject) => {
    return data instanceof FormData ? data : qs.stringify(data)
  }]
})
let loadingInstance: ElLoadingComponent | null = null
const loadingOpen = () => {
  return false
  return loadingInstance = Loading.service({
    lock: true,
    text: '加载中..',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.1)',
  })
}
const loadingClose = () => {
  if (loadingInstance) {
    loadingInstance.close()
  }
}
$axios.interceptors.request.use((config: AxiosRequestConfig) => {
  loadingOpen()
  if (config.url) {
    config.url = config.url.replace(/^(\\|\/)/, '')
  }
  return config
}, (err: AxiosError) => {
  loadingClose()
  return Promise.reject(err)
})

$axios.interceptors.response.use((response: AxiosResponse<any>) => {
  loadingClose()
  return Promise.resolve(response)
}, (err: AxiosError) => {
  loadingClose()
  return Promise.reject(err)
})

export default $axios

import axios from 'axios';
import { log } from './api'
import baseUrl from './env'

//axios实例
const instance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

let loadingNum = 0, loading = true, toast = true
function http(opts = { loading: true, toast: true }) {
  loading = opts.loading
  toast = opts.loading
  instance.interceptors.request.use(config => {
    loadingNum ++
    config.headers.Authorization = token
    return config
  }, error => Promise.reject(error))
  instance.interceptors.response.use(response => {
    loadingNum --
    if(response.data.code === '0000') return response.data
    else {
      log(response.data)
      return Promise.reject(response)
    }
  }, error => {
    loadingNum--
    log(error.response)
    return Promise.reject(error.response)
  })
  return instance
}


export const get = (url, data, opts) => {
  return http(opts).get(url, { params: data })
}

export const post = (url, data, params, opts) => {
  return http(opts).post(url, data, { params: params })
}

export const deleteReq = (url, data, opts) => {
  return http(opts).delete(url, { params: data })
}

export const put = (url, data, params, opts) => {
  return http(opts).put(url, data, { params: params })
}





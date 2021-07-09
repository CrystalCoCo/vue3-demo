import axios from 'axios';
import { log } from './log'
import baseUrl from './env'
import store from '../store/index'

//axios实例
const instance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

let loadingNum = 0, loading = true, toast = true
export function http(opts = { loading: true, toast: true }) {
  loading = opts.loading
  toast = opts.loading
  instance.interceptors.request.use(config => {
    loadingNum ++
    if(loading) store.commit('loading', true)
    //config.headers.Authorization = token
    return config
  }, error => Promise.reject(error))
  instance.interceptors.response.use(response => {
    loadingNum --
    if(loadingNum <= 0) store.commit('loading', false)
    if(response.data.code === '0000') return response.data
    else {
      log(response.data)
      return Promise.reject(response)
    }
  }, error => {
    loadingNum--
    if(loadingNum <= 0) store.commit('loading', false)
    log(error.response)
    return Promise.reject(error.response)
  })
  return instance
}

export default instance






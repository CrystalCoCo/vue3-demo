import { message } from 'ant-design-vue';
const HTTP_STATUS = {
  400: '错误请求',
  401: '用户没有权限',
  403: '拒绝访问',
  404: '资源不存在',
  405: '请求方法未允许',
  406: '请求格式不可得',
  408: '请求超时',
  410: '请求资源被永久删除',
  422: '验证错误',
  500: '服务器内部错误',
  501: '服务未实现',
  502: '网络错误',
  503: '服务不可用',
  504: '网络超时',
  505: 'HTTP版本不受支持'
}
export const log = res => {
  const { status } = res
  message.success(HTTP_STATUS[status]|| res.message)
}
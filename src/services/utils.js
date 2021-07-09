import { refreshToken } from '@/api/user'
//cookie获取
let sd, end
export function getCookie(Name) {
  let search = Name + "="//查询检索的值
  let returnvalue = ""//返回值
  if(document.cookie.length > 0) {
    sd = document.cookie.indexOf(search)
    if (sd != -1) {
      sd += search.length
      end = document.cookie.indexOf(";", sd)
      if(end == -1)
        end = document.cookie.length
        returnvalue = unescape(document.cookie.substring(sd, end))
    }
  }
  return returnvalue
}

//存cookie
export function setCookie(name,value,time){
  document.cookie=`${name}=${value};expires=${time.toGMTString()};path=/;domain=${cookieurl}`//用cookie来跨域
}

//刷新token
async function getRefreshToken(param) { // 刷新token 注意这里用到的service
  let { data } = await refreshToken({ refreshToken: param })
  return data
}
//刷新token,每5分钟刷下定时器,判断如果离过期时间不到10分钟,就重新拿token
let interval = null
export function isRefreshTokenExpired() {
  let token = getCookie('ZhongTai')
  if(token) {
    interval = setInterval(() => {
      let recentTime = new Date().getTime()
      let loginTime = getCookie('login_time')
      let expiresIn = getCookie('expires_in')
      if(parseInt(loginTime)+ expiresIn*1000 - 1200000 < recentTime) {
        let refresh_token = getCookie('refreshToken')
        let date = new Date()
        date.setTime(date.getTime()+1000*60*60)
        setCookie('expires_in', getRefreshToken(refresh_token).expires_in, date)
        let reLoginTime = new Date().getTime()
        setCookie('login_time', reLoginTime, date)
        setCookie('ZhongTai', getRefreshToken(refresh_token).token_type + ' ' + getRefreshToken(refresh_token).access_token, date)
        setCookie('refreshToken', getRefreshToken(refresh_token).refresh_token, date)
        setCookie('user_login_info', decode(getRefreshToken(refresh_token).access_token.split('.')[1]), date)
      }
    }, 300000)
  }
}



let baseUrl = ''
if(process.env.NODE_ENV === 'development'){
    //baseUrl = 'http://192.168.20.8:8010/v1/api/'
}else if(process.env.NODE_ENV === 'production'){
    if(process.env.VUE_APP_FLAG === 'pro') baseUrl = 'https://线上环境url'
    else baseUrl = 'http://测试环境url'
}
export default baseUrl
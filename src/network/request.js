const axios =  require('axios')

const newAxios = (config) => {
  let newAxios = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000
  })
  newAxios.interceptors.request.use(config => {
    console.log('进入请求拦截器')
    return config // 放行
  }, err => {
    console.log('请求失败')
  })
  newAxios.interceptors.response.use(res => {
    console.log('进入响应拦截器')
    return res.data.data
  }, err => {
    console.log('响应失败')
  })

  return newAxios(config)

}

module.exports = {
  newAxios
}

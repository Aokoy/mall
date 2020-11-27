const {newAxios} = require('network/request')

// 请求首页轮播图和推荐数据
export function getHomeMultidata() {
  return newAxios({
    url: '/home/multidata'
  })
}

// 请求商品列表数据
export function getHomeGoods(type, page) {
  return newAxios({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}

<!--
 * @Author: 曾铭
 * @Date: 2020-11-25 10:09:18
 * @FilePath: \mall\src\views\home\Home.vue
-->
<template>
  <div id="home">
    <!-- 顶部导航 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll  ref="scroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore" @scroll="onscroll" class="content">
      <!-- 轮播图 -->
      <home-swiper :banners="banners"/>
      <!-- 推荐 -->
      <home-recommend :recommends="recommends"/>
      <!--  流行  -->
      <home-feature/>
      <!-- TabControl   -->
      <tab-control class="home-tab-control" :titles="titles" @tabclick="tabclick"/>
      <!--  商品列表  -->
      <goods-list :goods="showGoods"/>
    </scroll>
    <!--  回到顶部  -->
    <back-top @backclick="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import HomeSwiper from './childcpn/HomeSwiper';
import HomeRecommend from './childcpn/HomeRecommend';
import HomeFeature from "./childcpn/HomeFeature";

import NavBar from 'components/common/navbar/NavBar';
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";


// 导入封装好的网络请求模块
const {getHomeMultidata, getHomeGoods} = require('network/home')

  export default {
    name: "Home",
    data() {
      return {
        banners: null,
        recommends: null,
        titles: ['流行','新款', '精选'],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        isShowBackTop: false
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomeFeature,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    created() {
      // 请求轮播图和推荐数据
      this.getHomeMultidata()
      // 请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      /**
       * 事件监听相关的方法
       */
      // 监听TabControl的切换-子组件传过来的
      tabclick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      // 监听返回顶部按钮的点击事件-子组件传过来的
      backClick() {
        // 1.获取scroll组件->获取bs属性->调用scrollTo方法回到顶部
        // this.$refs.scroll.bs.scrollTo(0,0, 500)

        // 2.获取scroll组件->调用封装好的scrollTo方法
        this.$refs.scroll.scrollTo(0, 0)
      },
      // 监听屏幕滚动-子组件传过来的
      onscroll(position) {
        this.isShowBackTop = Math.abs(position.y) > 1000
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      /**
       * 网络请求相关的方法
       */
      // 请求轮播图和推荐数据
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.banner.list
          this.recommends = res.recommend.list
        }).catch(err => {
          console.log(err)
        })
      },
      // 请求商品数据
      getHomeGoods(type) {
        let page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          // 将结果添加到数组
          this.goods[type].list.push(...res.list)
          // 页数加1
          this.goods[type].page + 1
          this.$refs.scroll.finishPullUp()

        }).catch(err => {
          console.log(err)
        })
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    }
  }
</script>

<style scoped>
  #home {
    overflow: hidden;
    /*padding-top: 44px;*/
    height: 100vh;
  }
  .home-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    background-color: var(--color-tint);
    color: #fff;
  }
  .content {
    height: calc(100% - 93px);
    margin-top: 44px;
    /*overflow: hidden;*/
  }
  .home-tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
</style>

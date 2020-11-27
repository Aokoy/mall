<!--
 * @Author: 曾铭
 * @Date: 2020-11-25 16:37:58
 * @FilePath: \mall\src\views\home\childcpn\HomeSwiper.vue
-->
<template>
  <swiper :showIndicator="true">
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
    props: {
      banners:{
          type: Array,
          default() {
              return []
          }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
}
</script>

<style>

</style>
<!--
 * @Author: 曾铭
 * @Date: 2020-11-25 16:55:00
 * @FilePath: \mall\src\views\home\childcpn\HomeRecommend.vue
-->
<template>
  <div class="recommend">
      <div class="recommend-item" v-for="(item, index) in recommends" :key="index">
          <a :href="item.link">
              <img :src="item.image">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        recommends: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
    .recommend {
        display: flex;
        width: 100%;
        font-size: 14px;
        padding: 10px 0 20px;
        border-bottom: 5px solid #eee;
    }
    .recommend-item {
        flex: 1;
        text-align: center;
    }
    .recommend-item img {
        width: 60px;
        height: 60px;
        margin-bottom: 3px;
    }
</style>
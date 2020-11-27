<!--
 * @Author: 曾铭
 * @Date: 2020-11-26 13:02:24
 * @FilePath: \mall\src\components\content\goods\GoodsListItem.vue
-->
<template>
    <div class="goods-list-item">
      <a :href="item.link">
        <img :src="item.show.img" alt="">
        <div class="title">{{item.title}}</div>
        <div class="more">
        <span class="price">￥{{item.price}}</span>
        <span class="cfav">{{item.cfav}}</span>
        </div>
      </a>
    </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
        props: {
          item: {
            type: Object,
            default() {
              return {}
            }
          }
        }
    }
</script>

<style scoped>
  .goods-list-item {
    width: 50%;
    position: relative;
    border-radius: 15px;
    padding: 5px;
  }
  .goods-list-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-list-item .title {
    position: absolute;
    left: 0;
    right: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .more {
    display: flex;
    justify-content: space-between;
    height: 25px;
    line-height: 25px;
    margin-top: 20px;
  }
  .price {
    color: var(--color-high-text);
    font-size: 18px;
  }
  .cfav {
    display: inline-block;
    font-size: 16px;
    padding: 0 10px 0 22px;
    background: url("~assets/img/detail/detail_bottom.png") no-repeat 0 2px;
    background-size: 20px;
  }
</style>

<!--
 * @Author: 曾铭
 * @Date: 2020-11-25 10:36:49
 * @FilePath: \mall\src\components\common\navbar\NavBar.vue
-->
<template>
  <div class="nav-bar">
      <div class="left">
          <slot name="left"></slot>
      </div>
      <div class="center">
          <slot name="center"></slot>
      </div>
      <div class="right">
          <slot name="right"></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .nav-bar {
        display: flex;
        /* height: 44px; */
        line-height: 44px;
        text-align: center;
        font-size: 16px;
    }

    .left,
    .right {
        width: 60px;
    }

    .center {
        flex: 1;
    }
</style>

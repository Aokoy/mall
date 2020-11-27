<!--
 * @Author: 曾铭
 * @Date: 2020-11-23 14:03:06
 * @FilePath: \mall\src\App.vue
-->
<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>

import MainTabBar from "./components/content/mainTabBar/MainTabBar";
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import 'assets/css/base.css';
</style>

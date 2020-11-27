<!--
 * @Author: 曾铭
 * @Date: 2020-11-26 09:04:14
 * @FilePath: \mall\src\components\content\tabControl\TabControl.vue
-->
<template>
  <div class="tab-control">
      <div class="tab-control-item" v-for="(item, index) in titles" :key="index" @click="itemClick(index)">
          <span :class="{active: currentIndex === index}">{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        titles: {
            type: Array,
            default() {
                return []
            }
        }
    },
  data() {
      return {
        currentIndex: 0
      }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      // 将点击的类型传给父组件
      this.$emit('tabclick', index)
    }
  }
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    background-color: #fff;
  }
  .tab-control .tab-control-item {
    flex: 1;
    text-align: center;
  }
  .tab-control-item span {
    padding: 3px 3px;
  }
  .active {
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-high-text);
  }
</style>

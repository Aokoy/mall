<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "Scroll",
        data() {
          return {
            bs: null
          }
        },
      props: {
          probeType: {
            type: Number,
            default: 0
          },
          pullUpLoad: {
            type: Boolean,
            default: true
          }
      },
      mounted() {
          // 创建Bscroll对象
          this.bs = new BScroll(this.$refs.wrapper, {
            scrollY: true,
            click: true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad
          })
        // 监听bs的滚动
          this.bs.on('scroll', (position) => {
            this.$emit('scroll', position)
          })

        // 监听上拉加载更多
          this.bs.on('pullingUp', () => {
            this.$emit('pullingUp')
          })
      },
      methods: {
        scrollTo(x, y, time=500) {
          this.bs.scrollTo(x, y, time)
        },
        finishPullUp() {
          this.bs.finishPullUp()
        }

      }
    }
</script>

<style scoped>

</style>

<template>
    <div class="back-top" @click="backClick">
      <img src="~assets/img/common/top.png">
    </div>
</template>

<script>
    export default {
        name: "BackTop",
        methods: {
          backClick() {
            this.$emit('backclick')
          }
        }
    }
</script>

<style scoped>
    .back-top {
      position: fixed;
      right: 15px;
      bottom: 50px;
    }

    .back-top img {
      width: 46px;
      height: 46px;
    }


</style>

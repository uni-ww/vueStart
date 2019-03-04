<template>
  <div id="app">
    <!-- <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>-->
    <div @click="handleClick">handle click</div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$dialog.toast({
        template:'sdfsdf',
        rela:'bottom'
      })
    }
  }
};
</script>
<style lang="less" scoped>
@import "./assets/css/style.less";
@import "./assets/css/common.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

img {
  width: 100%;
}
</style>

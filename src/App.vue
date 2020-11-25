<template>
  <div>
    <mt-header fixed title="固定在顶部"></mt-header>
    <transition>
      <router-view></router-view>
    </transition>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="a1">
        <img slot="icon" src="./assets/home.png" />
        首页
      </mt-tab-item>
      <mt-tab-item id="a2">
        <img slot="icon" src="./assets/vip.png" />
        会员
      </mt-tab-item>
      <mt-tab-item id="a3">
        <img slot="icon" src="./assets/shopcar.png" />
        购物车
      </mt-tab-item>
      <mt-tab-item id="a4">
        <img slot="icon" src="./assets/search.png" />
        搜索
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "a1",
    };
  },
  watch: {
    selected(newval, oldval) {
      console.log(newval + "--------" + oldval);
      switch (newval) {
        case "a1":
          this.$router.push({
            path: "/home",
          });
          break;
        case "a2":
          this.$router.push({
            path: "/vip",
          });
          break;
        case "a3":
          this.$router.push({
            path: "/cart",
          });
          break;
        case "a4":
          this.$router.push({
            path: "/search",
          });
          break;
      }
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
.mint-header {
  width: 414px;
  height: 50px;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>

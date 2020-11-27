<template>
  <div>
    <mt-header fixed :title="tit"></mt-header>
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
      tit: "首页",
      selected: "a1",
    };
  },
  created() {
    this.selected = sessionStorage.getItem('selected')
  },
  watch: {
    $route() {
      sessionStorage.setItem('selected', this.selected)
    },
    selected(newval, oldval) {
      console.log(newval + "--------" + oldval);
      switch (newval) {
        case "a1": {
          this.$router.push({
            path: "/home",
          });
          this.tit = "首页";
        }
          break;
        case "a2": {
          this.$router.push({
            path: "/vip",
          });
          this.tit = "会员"
        }

          break;
        case "a3": {
          this.$router.push({
            path: "/cart",
          });
          this.tit = "购物车"
        }

          break;
        case "a4": {
          this.$router.push({
            path: "/search",
          });
          this.tit = "搜索"
        }

          break;
      }
    },
  }
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
.app-container {
  margin-top: 20px;
  overflow-x: hidden;
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

<template>
  <div class="app-container">
    <mt-swipe :auto="1000">
      <mt-swipe-item v-for="(item, index) in imgList" :key="index">
        <img :src="item" alt="" />
      </mt-swipe-item>
    </mt-swipe>
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../assets/home/menu1.png" alt="" />
            <div class="mui-media-body">Home</div></a
          >
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../assets/home/menu2.png" alt="" />
            <div class="mui-media-body">Email</div></a
          >
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../assets/home/menu3.png" alt="" />
            <div class="mui-media-body">Chat</div></a
          >
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../assets/home/menu4.png" alt="" />
            <div class="mui-media-body">location</div></a
          >
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../assets/home/menu5.png" alt="" />
            <div class="mui-media-body">Search</div></a
          >
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../assets/home/menu6.png" alt="" />
            <div class="mui-media-body">Phone</div></a
          >
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../assets/home/menu2.png" alt="" />
            <div class="mui-media-body">Setting</div></a
          >
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../assets/home/menu3.png" alt="" />
            <div class="mui-media-body">about</div></a
          >
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newslist">
            <img src="../assets/home/menu4.png" alt="" />
            <div class="mui-media-body">more</div></router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      imgList: [],
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      this.$axios
        .get("http://rap2api.taobao.org/app/mock/271591/home/top")
        .then((res) => {
          this.imgList = res.data;
        });
    },
  },
};
</script>
<style scoped lang="scss">
.mint-swipe {
  width: 414px;
  height: 200px;
}
img {
  width: 414px;
  height: 200px;
  overflow: hidden;
}
.mui-col-sm-3 {
  width: 33%;
  img {
    width: 50px;
    height: 50px;
  }
}
.mui-content > .mui-table-view:first-child {
  margin-top: 0;
}
</style>

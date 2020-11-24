<template>
  <mt-swipe :auto="1000">
    <mt-swipe-item v-for="(item, index) in imgList" :key="index">
      <img :src="item" alt="" />
    </mt-swipe-item>
  </mt-swipe>
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
          console.log(res);
          this.imgList = res.data;
        });
    },
  },
};
</script>
<style scoped lang="scss">
.mint-swipe {
  margin-top: 20px;
  width: 414px;
  height: 200px;
}
img {
  width: 414px;
  height: 200px;
  overflow: hidden;
}
</style>

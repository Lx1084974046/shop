<template>
  <div class="news-container">
    <mt-navbar v-model="selected">
      <mt-tab-item @click="getNews('1')" id="1">社会</mt-tab-item>
      <mt-tab-item @click="getNews(2)" id="2">科技</mt-tab-item>
      <mt-tab-item @click="getNews(3)" id="3">娱乐</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <ul class="mui-table-view">
          <li
            v-for="news in newsList"
            :key="news.title"
            class="mui-table-view-cell mui-media"
          >
            <a href="javascript:;">
              <img
                class="mui-media-object mui-pull-left"
                :src="news.thumbnail_pic_s"
              />
              <div class="mui-media-body">
                {{ news.author_name }}
                <p class="mui-ellipsis">
                  {{ news.title }}
                </p>
              </div>
            </a>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n">{{ n }}</mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n">{{ n }}</mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  name: 'newslist',
  data() {
    return {
      selected: '1',
      newsList: []
    };
  },
  created() {
    this.getNews(this.selected)
  },
  computed: {
  },
  watch: {
  },
  methods: {
    getNews(type) {
      switch (type) {
        case '1': this.$axios.get("/api/index?type=shehui&key=dae0531f0f981c9688bb95b5adda21f3").then(res => {
          this.newsList = res.data.result.data
          console.log(res.data.result.data)
        });
          break;
        case '2': this.$axios.get("/api/index?type=keji&key=dae0531f0f981c9688bb95b5adda21f3").then(res => {
          this.newsList = res.result.data
          this.newsList = res.result
        });
          break;
        case '3': this.$axios.get("/api/index?type=yule&key=dae0531f0f981c9688bb95b5adda21f3").then(res => {
          this.newsList = res.result.data
        });
          break;

        default:
          break;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.news-container {
  margin-top: 50px;
}
</style>

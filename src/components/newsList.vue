<template>
  <div class="news-container">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1"
        ><span
          @click="
            getNews('1');
            clearIfr();
          "
          >社会</span
        ></mt-tab-item
      >
      <mt-tab-item id="2"
        ><span
          @click="
            getNews('2');
            clearIfr();
          "
          >科技</span
        ></mt-tab-item
      >
      <mt-tab-item id="3"
        ><span
          @click="
            getNews('3');
            clearIfr();
          "
          >娱乐</span
        ></mt-tab-item
      >
    </mt-navbar>
    <iframe src="" frameborder="0" name="i" v-show="np"></iframe>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1" v-show="np1">
        <ul class="mui-table-view">
          <li
            class="mui-table-view-cell mui-media"
            v-for="news in newsList"
            :key="news.uniquekey"
          >
            <a :href="news.url" target="i" @click="addIfr">
              <img
                class="mui-media-object mui-pull-left"
                :src="news.thumbnail_pic_s"
              />
              <div class="mui-media-body">
                {{ news.title }}
                <p class="mui-ellipsis">
                  <span>{{ news.author_name }}</span>
                  <span>{{ news.date }}</span>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </mt-tab-container-item>

      <mt-tab-container-item id="2" v-show="np1">
        <ul class="mui-table-view">
          <li
            class="mui-table-view-cell mui-media"
            v-for="news in newsList"
            :key="news.uniquekey"
          >
            <a :href="news.url" target="i" @click="addIfr">
              <img
                class="mui-media-object mui-pull-left"
                :src="news.thumbnail_pic_s"
              />
              <div class="mui-media-body">
                {{ news.title }}
                <p class="mui-ellipsis">
                  <span>{{ news.author_name }}</span>
                  <span>{{ news.date }}</span>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="3" v-show="np1">
        <ul class="mui-table-view">
          <li
            class="mui-table-view-cell mui-media"
            v-for="news in newsList"
            :key="news.uniquekey"
          >
            <a :href="news.url" target="i" @click="addIfr">
              <img
                class="mui-media-object mui-pull-left"
                :src="news.thumbnail_pic_s"
              />
              <div class="mui-media-body">
                {{ news.title }}
                <p class="mui-ellipsis">
                  <span>{{ news.author_name }}</span>
                  <span>{{ news.date }}</span>
                </p>
              </div>
            </a>
          </li>
        </ul>
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
      np: false,
      np1: true,
      mes: '',
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
        case '1': this.$axios.get("/api/index?type=shehui&key=1b7c9753aaf422a28b46bb98cf671a93").then(res => {
          this.newsList = res.data.result.data
        });
          break;
        case '2': this.$axios.get("/api/index?type=keji&key=1b7c9753aaf422a28b46bb98cf671a93").then(res => {
          this.newsList = res.data.result.data
        });
          break;
        case '3': this.$axios.get("/api/index?type=yule&key=1b7c9753aaf422a28b46bb98cf671a93").then(res => {
          this.newsList = res.data.result.data
        });
          break;

        default:
          break;
      }
    },
    addIfr: function () {
      this.np = true
      this.np1 = false
    },
    clearIfr: function () {
      this.np = false
      this.np1 = true
    }
  },
};
</script>

<style lang="scss" scoped>
.news-container {
  margin-top: 50px;
}
.mint-tab-container-item {
  height: 590px;
  overflow-y: auto;
}
.mui-media-body {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.mui-ellipsis :nth-child(2) {
  float: right;
}
iframe {
  width: 100%;
  height: 590px;
}
</style>

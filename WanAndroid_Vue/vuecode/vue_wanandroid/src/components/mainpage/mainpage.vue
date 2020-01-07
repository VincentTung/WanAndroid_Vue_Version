<template>
  <div id="app">
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
      <van-swipe :autoplay="2000" indicator-color="white">
        <van-swipe-item v-for="banner in banners" :key="banner.imagePath">
          <van-image height="200" :src="banner.imagePath" />
        </van-swipe-item>
      </van-swipe>
      <van-list v-model="loading" :finished="finished" finished-text="我是有底线的" @load="getData">
        <van-cell v-for="item in article" :key="item.id">
          <div v-on:click="openArticle(item)">
            <div>
              <van-tag class="chapter" round plain size="medium">{{item.chapterName}}</van-tag>
            </div>
            <div class="title">{{item.title}}</div>
            <div class="time">{{formatMsgTime(item.publishTime)}}</div>
          </div>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      page: 0,
      article: [],
      loading: false,
      finished: false,
      banners: []
    };
  },
  name: "mainpage",
  mounted: function() {
    this.getBanners();
  },
  methods: {
    openArticle: function(article) {
      console.log(article.chapterName);
      window.open(article.link);
    },
    onRefresh: function() {
      this.page = 0;
      this.loading = true;
      this.article = [];
      this.getData();
      this.getBanners();
    },
    getData: function() {
      this.page++;
      var this_ = this;
      this.$axios
        .get("/api/article/listproject/" + this_.page + "/json")
        .then(function(response) {
          console.log(response);
          this_.loading = false;
          if (response.data.data.datas.length > 0) {
            this_.finished = true;
            this_.article = this_.article.concat(response.data.data.datas);
          } else {
            this_.finished = true;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    formatMsgTime: function(timespan) {
      var dateTime = new Date(timespan);

      var year = dateTime.getFullYear();
      var month = dateTime.getMonth() + 1;
      var day = dateTime.getDate();
      var hour = dateTime.getHours();
      var minute = dateTime.getMinutes();
      var second = dateTime.getSeconds();
      var now = new Date();
      var now_new = Date.parse(now.toDateString()); //typescript转换写法

      var milliseconds = 0;
      var timeSpanStr;

      milliseconds = now_new - timespan;

      if (milliseconds <= 1000 * 60 * 1) {
        timeSpanStr = "刚刚";
      } else if (
        1000 * 60 * 1 < milliseconds &&
        milliseconds <= 1000 * 60 * 60
      ) {
        timeSpanStr = Math.round(milliseconds / (1000 * 60)) + "分钟前";
      } else if (
        1000 * 60 * 60 * 1 < milliseconds &&
        milliseconds <= 1000 * 60 * 60 * 24
      ) {
        timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + "小时前";
      } else if (
        1000 * 60 * 60 * 24 < milliseconds &&
        milliseconds <= 1000 * 60 * 60 * 24 * 15
      ) {
        timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + "天前";
      } else if (
        milliseconds > 1000 * 60 * 60 * 24 * 15 &&
        year == now.getFullYear()
      ) {
        timeSpanStr = month + "-" + day + " " + hour + ":" + minute;
      } else {
        timeSpanStr =
          year + "-" + month + "-" + day + " " + hour + ":" + minute;
      }
      return timeSpanStr;
    },
    getBanners: function() {
      var this_ = this;
      this.$axios
        .get("/api/banner/json")
        .then(function(response) {
          console.log(response);

          this_.banners = response.data.data;
          this_.loading = false;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
.time {
  color: grey;
}
.title {
  color: black;
  font-weight: bold;
  font-size: 20;
}
.chapter {
  color: blue;
}
</style>
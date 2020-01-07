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
            <div class="chapter">{{item.chapterName}}</div>
            <div class="title">{{item.title}}</div>
            <div class="time">{{item.publishTime}}</div>
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
      // this.getData();
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
          if (this_.article.length > 20) {
            this_.finished = true;
          } else {
            this_.article = this_.article.concat(response.data.data.datas);
            this_.finished = false;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
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
  color: red;
}
.title {
  color: black;
  font-size: 20;
}
.chapter {
  color: blue;
}
</style>
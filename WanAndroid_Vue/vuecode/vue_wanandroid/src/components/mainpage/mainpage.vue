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
              <van-tag
                class="chapter"
                round
                plain
                size="medium"
                color="#4876FF"
              >{{item.chapterName}}</van-tag>
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
import { formatMsgTime } from '@/util/util'
export default {

  data: function () {
    return {
      page: 0,
      article: [],
      loading: false,
      finished: false,
      banners: []
    }
  },
  name: 'mainpage',
  mounted: function () {
    this.getBanners()
  },
  methods: {
    openArticle: function (article) {

      // js和android交互
      android.openArticle(article.link)
      // this.$router.push({
      //   name: 'Article',
      //   params: {
      //     url: article.link
      //   }
      // })
    },
    formatMsgTime: function (timeStamp) {
      return formatMsgTime(timeStamp)
    },
    onRefresh: function () {
      this.page = 0
      this.loading = true
      this.article = []
      this.getData()
      this.getBanners()
    },
    getData: function () {
      this.page++
      let this_ = this
      this.$http
        .get(this.baseUrl + '/article/listproject/' + this_.page + '/json')
        .then(function (response) {
          console.log(response)
          this_.loading = false
          if (response.data.data.datas.length > 0) {
            this_.finished = false
            this_.article = this_.article.concat(response.data.data.datas)
          } else {
            this_.finished = true
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getBanners: function () {
      let this_ = this
      this.$http
        .get(this.baseUrl + '/banner/json')
        .then(function (response) {
          console.log(response)

          this_.banners = response.data.data
          this_.loading = false
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
<style scoped>
.time {
  color: grey;
}
.title {
  color: black;
  font-weight: bold;
  font-size: 20px;
}
.chapter {
  color: blue;
  margin-left: 5px;
  margin-bottom: 5px;
}
</style>

<template>
  <div id="app">
    <van-tabs
      @change="onTabClick"
      sticky
      v-model="active"
      :ellipsis="false"
      animated
      type="line"
      color="#4876FF"
      title-active-color="#4876FF"
    >
      <van-tab v-for="wxaccount in wxaccounts" :key="wxaccount.id" :title="wxaccount.name">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="我是有底线的"
          @load="getWXAccountArticles(wxaccount)"
        >
          <van-cell v-for="item in articles" :key="item.id">
            <div v-on:click="openArticle(item)">
              <div class="chapter">{{item.chapterName}}</div>
              <div class="title">{{item.title}}</div>
              <div class="time">{{formatMsgTime(item.publishTime)}}</div>
            </div>
          </van-cell>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { formatMsgTime } from '@/util/util'
export default {
  data: function () {
    return {
      active: 0,
      page: 0,
      wxaccounts: [],
      loading: false,
      finished: false,
      first: true,
      articles: []
    }
  },
  name: 'wxaccount',
  mounted: function () {
    this.getData()
  },
  methods: {
    onTabClick: function () {
      this.page = 0
      this.articles = []
      this.getWXAccountArticles(this.wxaccounts[this.active])
    },
    formatMsgTime: function (timeStamp) {
      return formatMsgTime(timeStamp)
    },
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
    getWXAccountArticles: function (wxaccount) {
      var this_ = this
      this.$axios
        .get(this.baseUrl + '/wxarticle/list/' + wxaccount.id + '/' + this_.page + '/json')
        .then(function (response) {
          console.log(response)
          if (response.data.data.datas.length > 0) {
            this_.articles = this_.articles.concat(response.data.data.datas)
            this_.page = response.data.data.curPage
            this_.finished = false
          } else {
            this_.finished = true
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getData: function () {
      var this_ = this
      this.$axios
        .get(this.baseUrl + '/wxarticle/chapters/json')
        .then(function (response) {
          console.log(response)
          this_.loading = false
          this_.wxaccounts = response.data.data

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
  font-size: 20;
}
.chapter {
  color: blue;
}
</style>
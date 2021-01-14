<template>
  <div id="app">
    <van-nav-bar :title="title" left-text="返回" @click-left="backPress" left-arrow></van-nav-bar>
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
      <van-tab v-for="tree in trees" :key="tree.id" :title="tree.name">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="我是有底线的"
          @load="getData(tree)"
        >
          <van-cell v-for="item in articles" :key="item.id">
            <div v-on:click="openArticle(item)">
              <van-tag
                class="chapter"
                round
                plain
                size="medium"
                color="#4876FF"
              >{{item.chapterName}}</van-tag>
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
  name: 'TabKnowledge',
  data: function () {
    return {

      page: 0,
      loading: false,
      finished: false,
      title: '',
      trees: [],
      articles: [],
      active: 0
    }
  },
  created: function () {
    this.trees = this.$route.params.trees
  },
  mounted: function () {
    // this.getData(this.trees[0])
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
    onTabClick: function () {
      this.page = 0
      this.articles = []
      this.getData(this.trees[this.active])
    },
    formatMsgTime: function (timeStamp) {
      return formatMsgTime(timeStamp)
    },
    backPress: function () {
      this.$router.go(-1)
    },
    getData: function (tree) {
      let this_ = this
      this.$http
        .get(this.baseUrl + '/article/list/' + (this_.page) + '/json?cid=' + tree.id)
        .then(function (response) {
          console.log(response)

          if (response.data.data.datas.length > 0) {
            this_.articles = this_.articles.concat(response.data.data.datas)
            this_.page = response.data.data.curPage
            this_.finished = false
          } else {
            this_.finished = true
          }


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
.chapter {
  color: black;
  font-size: 20;
  margin-right: 5px;
}
.time {
  color: grey;
}
.title {
  color: black;
  font-weight: bold;
  font-size: 10;
}
</style>

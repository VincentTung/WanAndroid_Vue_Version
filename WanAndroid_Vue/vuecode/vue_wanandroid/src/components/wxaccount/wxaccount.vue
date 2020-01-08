<template>
  <div id="app">
    <van-tabs
      @change="onTabClick"
      sticky
      v-model="active"
      animated
      type="line"
      color="#4876FF"
      title-active-color="#4876FF"
    >
      <van-tab v-for="wxaccount in wxaccounts" :key="wxaccount.id" :title="wxaccount.name">
        <van-list v-model="loading" :finished="finished" finished-text="我是有底线的">
          <van-cell v-for="item in articles" :key="item.id">
            <div v-on:click="openArticle(item)">
              <div class="chapter">{{item.chapterName}}</div>
              <div class="title">{{item.title}}</div>
              <div class="time">{{item.publishTime}}</div>
            </div>
          </van-cell>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
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
      this.getWXAccountArticles(this.wxaccounts[this.active])
    },
    getWXAccountArticles: function (wxaccount) {
      this.articles = []
      var this_ = this

      this.$axios
        .get(this.baseUrl + '/wxarticle/list/' + wxaccount.id + '/0/json')
        .then(function (response) {
          console.log(response)
          this_.loading = false
          this_.finished = true
          this_.articles = response.data.data.datas
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

          this_.getWXAccountArticles(this_.wxaccounts[0])
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
  font-size: 20;
}
.chapter {
  color: blue;
}
</style>
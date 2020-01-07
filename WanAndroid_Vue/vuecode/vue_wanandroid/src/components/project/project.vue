<template>
  <div id="app">
    <van-tabs
      @change="onTabClick"
      sticky
      v-model="active"
      animated
      type="card"
      color="#4876FF"
      title-active-color="#FFFFFF"
    >
      <van-tab v-for="wxaccount in wxaccounts" :key="wxaccount.id" :title="wxaccount.name">
        <van-list v-model="loading" :finished="finished" finished-text="我是有底线的">
          <van-cell v-for="item in articles" :key="item.id">
            <div v-on:click="openArticle(item)">
              <van-row>
                <van-col span="8">
                  <van-image height="100" fit="cover" :src="item.envelopePic">
                    <template v-slot:loading>
                      <van-loading type="spinner" size="20" />
                    </template>
                  </van-image>
                </van-col>
                <van-col span="16" offset="0">
                  <div class="conent">
                    <div class="van-ellipsis">{{item.title}}</div>
                    <div class="van-multi-ellipsis--l2">{{item.desc}}</div>
                    <div class="time">{{item.author}}</div>
                  </div>
                </van-col>
              </van-row>
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
  name: 'project',
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
        .get('/api/wxarticle/list/' + wxaccount.id + '/0/json')
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
        .get('/api/project/tree/json')
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
<style>
.time {
  color: grey;
}
.van-multi-ellipsis--l2 {
  color: black;
  font-size: 20;
}
.van-ellipsis {
  color: black;
  font-weight: bold;
}
.content {
  margin: 10;
}
</style>
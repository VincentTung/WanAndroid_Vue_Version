<template>
  <div id="app">
    <van-nav-bar :title="title" left-text="返回" @click-left="backPress" left-arrow></van-nav-bar>
  </div>
</template>

<script>
export default {
  name: 'Article',
  data: function () {
    return {

      loading: false,
      finished: false,
      title: ''
    }
  },
  mounted: function () {
    window.location.href = 'https://www.baidu.com'
  },
  methods: {
    openArticle: function (url) { },
    backPress: function () {
      this.$router.go(-1)
    },
    getData: function () {
      var this_ = this
      this.$axios
        .get(this.baseUrl + '/tree/json')
        .then(function (response) {
          console.log(response)

          this_.trees = response.data.data
          this_.loading = false
          this_.finished = true
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
<style scoped>
.child {
  color: black;
  font-size: 20;
  margin-right: 5px;
}
.title {
  color: blue;
  font-size: 10;
}
</style>

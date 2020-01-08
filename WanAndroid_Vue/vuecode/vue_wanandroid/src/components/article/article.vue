<template>
  <div id="app">
    <van-nav-bar :title="title" left-text="返回" @click-left="backPress" left-arrow></van-nav-bar>
    <iframe
      id="inlineFrameExample"
      title="Inline Frame Example"
      width="100%"
      scrolling="no"
      height="100%"
      border="1"
      :src="url"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'Article',
  data: function () {
    return {

      loading: false,
      finished: false,
      title: '',
      url: ''
    }
  },
  created: function () {
    this.url = this.$route.params.url
  },
  mounted: function () {

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

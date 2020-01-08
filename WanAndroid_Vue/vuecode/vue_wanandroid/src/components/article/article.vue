<template>
  <div id="app">ksljflasjflkasjflasjfljsalfjs</div>
</template>

<script>
export default {
  name: 'Article',
  data: function () {
    return {
      trees: [],
      loading: false,
      finished: false
    }
  },
  mounted: function () { },
  methods: {
    openArticle: function (url) { },
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
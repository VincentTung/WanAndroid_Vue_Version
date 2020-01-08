<template>
  <div id="app">
    <van-list v-model="loading" :finished="finished" finished-text="我是有底线的" @load="getData">
      <van-cell v-for="tree in trees" :key="tree.id">
        <div v-on:click="openArticle(item)">
          <div class="title" plain size="large">
            <div>
              {{tree.name}}
              <div>
                <van-tag
                  round
                  plain
                  size="medium"
                  class="child"
                  v-for="child in tree.children"
                  :key="child.id"
                >{{child.name}}</van-tag>
              </div>
            </div>
          </div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
export default {
  name: 'Knowledge',
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
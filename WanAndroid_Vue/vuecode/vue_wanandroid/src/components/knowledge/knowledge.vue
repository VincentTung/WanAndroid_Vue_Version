<template>
  <div id="app">
    <van-list v-model="loading" :finished="finished" finished-text="我是有底线的" @load="getData">
      <van-cell v-for="tree in trees" :key="tree.id">
        <div v-on:click="openTabKnowledge(tree)">
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
    openTabKnowledge: function (tree) {
      this.$router.push({
        name: 'TabKnowledge',
        params: {
          trees: tree.children
        }
      })
    },
    getData: function () {
      let this_ = this
      this.$http
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
.time {
  color: grey;
}
.title {
  color: black;
  font-size: 20px;
}
.chapter {
  color: blue;
}
.child {
  margin-right: 5px;
  margin-top: 5px;
}
</style>

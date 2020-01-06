<template>
  <div id="app">
    <div>mainpage</div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getData">
      <van-cell v-for="item in article" :key="item.id">
        <div>
          {{item.chapterName}}
          {{item.title}}
          {{item.publishTime}}
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      page: 0,
      article: [],
      loading: false,
      finished: false
    };
  },
  name: "mainpage",
  mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      this.page++;
      var this_ = this;
      this.$axios
        .get("/api/article/listproject/" + this_.page + "/json")
        .then(function(response) {
          console.log(response);
          this_.loading = false;
          if (response.data.data.datas.length < 20) {
            this_.article = this_.article.concat(response.data.data.datas);

            this_.finished = false;
          } else {
            this_.finished = true;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

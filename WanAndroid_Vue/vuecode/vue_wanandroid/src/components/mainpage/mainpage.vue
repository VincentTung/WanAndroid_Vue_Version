<template>
  <div id="app">
    <div>mainpage</div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getData">
      <van-cell v-for="item in article" :key="item.id">
        <div>
          <div class="chapter">
          {{item.chapterName}}
          </div>
          {{item.title}}
         <div class="time"> {{item.publishTime}}</div>
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
          if (this_.article.length > 20) {
              this_.finished = true;
          } else {
             this_.article = this_.article.concat(response.data.data.datas);
            this_.finished = false;
      
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};


</script>
<style scoped>
.time{

  color:red;
}
.chapter{
  align-self:right;
  align:right;
  color: blue;
}
</style>
<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/mainpage">
      <span class="tab-link">首页</span>
    </router-link>

    <router-link tag="div" class="tab-item" to="/knowledge">
      <span class="tab-link">知识体系</span>
    </router-link>

    <router-link tag="div" class="tab-item" to="/wxaccount">
      <span class="tab-link">公众号</span>
    </router-link>

    <router-link tag="div" class="tab-item" to="/project">
      <span class="tab-link">项目</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Tab"
};
</script>

<style  lang="stylus">
.tab {
  display: flex;
  height: 44px;
  line-height: 44px;
}

.tab-item {
  flex: 1;
  text-align: center;
  

  .tab-link{

   padding-bottom: 5px;
    color :black;

  }
  &.router-link-active{
    .tab-link{
    color: blue;
    }
  }
  
}
</style>


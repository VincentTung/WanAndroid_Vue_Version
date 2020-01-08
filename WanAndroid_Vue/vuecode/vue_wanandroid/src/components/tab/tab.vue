<template>
  <div class="tab">
    <van-tabbar v-model="active" active-color="#4876FF" inactive-color="#8A8A8A">
      <van-tabbar-item icon="home-o" title="1111">
        <router-link tag="div" class="tab-item" :to="{name:'MainPage'}">
          <span class="tab-link">首页</span>
        </router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="cluster-o">
        <router-link tag="div" class="tab-item" :to="{name:'Knowledge'}">
          <span class="tab-link">知识体系</span>
        </router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o">
        <router-link tag="div" class="tab-item" :to="{name:'WxAccount'}">
          <span class="tab-link">公众号</span>
        </router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="records">
        <router-link tag="div" class="tab-item" :to="{name: 'Project'}">
          <span class="tab-link">项目</span>
        </router-link>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data: function () {
    return {
      active: 0
    }
  },
  methods: {}
}
</script>

<style  lang="stylus"></style>

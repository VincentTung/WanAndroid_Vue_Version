<template>
  <div class="tab">
    <van-tabbar v-model="active" active-color="#4876FF" inactive-color="#8A8A8A" @change="onChange">
      <van-tabbar-item icon="home-o">
        <span class="tab-link">首页</span>
      </van-tabbar-item>
      <van-tabbar-item icon="cluster-o">
        <span class="tab-link">知识体系</span>
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o">
        <span class="tab-link">公众号</span>
      </van-tabbar-item>
      <van-tabbar-item icon="records">
        <span class="tab-link">项目</span>
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
  methods: {
    onChange: function (index) {
      this.$emit('tabIndexChange', index)
      if (index === 0) {
        this.$router.push({ name: 'MainPage' })
      } else
        if (index === 1) {
          this.$router.push({name: 'Knowledge'})
        } else
          if (index === 2) {
            this.$router.push({ name: 'WxAccount' })
          } else
            if (index === 3) {
              this.$router.push({ name: 'Project' })
            }
    }
  }
}
</script>
<style  lang="stylus"></style>

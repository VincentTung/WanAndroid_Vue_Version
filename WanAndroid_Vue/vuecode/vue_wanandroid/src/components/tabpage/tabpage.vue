<template>
  <div>
    <div>
      <div class="main-title">{{titles[curTabIndex]}}</div>
      <router-view class="router-view"></router-view>
    </div>
    <div>
      <Tab v-on:tabIndexChange="tabIndexChange1"></Tab>
    </div>
  </div>
</template>

<script>
import { formatMsgTime } from '@/util/util'
import Tab from '@/components/tab/tab'
export default {
  components: {
    Tab
  },
  data: function () {
    return {
      curTabIndex: 0,
      titles: ['首页', '知识体系', '公众号', '项目']
    }
  },
  name: 'tabpage',
  mounted: function () {

  },
  methods: {

    formatMsgTime: function (timeStamp) {
      return formatMsgTime(timeStamp)
    },
    tabIndexChange1: function (tabIndex_) {
      console.log(tabIndex_)
      this.curTabIndex = tabIndex_
    }

  }
}
</script>
<style scoped>
.main-title {
  height: 40px;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  font: bold;
  background: #4876ff;
  line-height: 40px;
  z-index: 9999;
  position: fixed;
}
.router-view{
  position: relative;
  margin: 0;
  top: 40px;
}
</style>

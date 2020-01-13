<template>
  <div>
    <div>
      <div class="title">{{titles[curTabIndex]}}</div>
      <router-view></router-view>
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
.title {
  height: 40px;
  text-align: center;
  color: white;
  font: bold;
  background: #4876ff;
  line-height: 40px;
  z-index: 9999;
}
</style>

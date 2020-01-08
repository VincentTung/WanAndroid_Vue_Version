<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
    <div>
      <Tab></Tab>
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
      page: 0

    }
  },
  name: 'tabpage',
  mounted: function () {

  },
  methods: {

    formatMsgTime: function (timeStamp) {
      return formatMsgTime(timeStamp)
    }

  }
}
</script>
<style scoped>
</style>

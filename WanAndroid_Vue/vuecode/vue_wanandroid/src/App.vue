<template>
  <div id="app">
    <div class="top"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab'
export default {
  name: 'App',
  components: {
    Tab
  }
}
</script>

<style>
.top {
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

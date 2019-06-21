<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org"
           target="_blank">
          Core Docs
        </a>
      </li>
      <li>
        <a href="https://forum.vuejs.org"
           target="_blank">
          Forum
        </a>
      </li>
      <li>
        <a href="https://chat.vuejs.org"
           target="_blank">
          Community Chat
        </a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs"
           target="_blank">
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/"
           target="_blank">
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/"
           target="_blank">
          vue-router
        </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/"
           target="_blank">
          vuex
        </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/"
           target="_blank">
          vue-loader
        </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue"
           target="_blank">
          awesome-vue
        </a>
      </li>
    </ul>

    <div id="app">
      <!-- 推荐这种写法-->
      <ul class="tab-tit">
        <li v-for="(title,index) in tabTitle"
            @click="cur=index"
            :key="index"
            :class="{active:cur==index}">{{title}}</li>
      </ul>
      <div class="tab-content">
        <div v-for="(m,index) in tabMain"
             :key="index"
             v-show="cur==index">{{m}}</div>
      </div>
    </div>
    <script>
    var app = new Vue({
      el: '#app'
    })
    </script>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      tabTitle: ['首页', '知识体系', '公众号', '项目'],
      tabMain: ['内容一', '内容二', '内容三', '内容四'],
      cur: 0,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

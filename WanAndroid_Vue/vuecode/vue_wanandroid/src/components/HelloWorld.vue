<template>
  <div class="parent"> 
    <div id="app"  >
      <!-- 推荐这种写法-->
      <!-- <ul class="tab-tit">
        <li v-for="(title,index) in tabTitle"
            @click="cur=index"
            :key="index"
            :class="{active:cur==index}">{{title}}</li>
      </ul> -->
      <!-- <div class="tab-content">
        <div v-for="(m,index) in tabMain"
             :key="index"
             v-show="cur==index">{{m}}</div>
      </div> -->
    </div>

    <!-- <div @click="handleDivClick"  :class="{activated:isActivated}">{{fullName}}</div> -->

    <div v-if="isActivated">90808008708</div>
  <div v-html="h"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      h:'<h1>hello</h1>',
      name:'VincentTung',
      tabTitle: ['首页', '知识体系', '公众号', '项目'],
      tabMain: ['内容一', '内容二', '内容三', '内容四'],
      cur: 0,
      msg: 'Welcome to Your Vue.js App',
      firstName:'vincent',
      lastName:'tung',
      isActivated:true,
    }
  },
  //计算属性
  computed:{
      fullName:{
        get:function(){
        return this.firstName+' '+this.lastName
        },
        set:function(value){

            var arr = value.split(" ");
            this.firstName = arr[0];
            this.lastName = arr[1];

        }
      }
  },
  methods: {

    handleDivClick(){
        this.isActivated=!this.isActivated;
    }
  },
  beforeCreate(){
    console.log('---beforeCreate')
  },
  created(){

    console.log('---created')
  },
  beforeMount(){

    console.log('---beforeMount')
  },
  mounted(){
   console.log('---mounted')
  },
  beforeDestroy(){
console.log('---beforeDestroy')
  },
  destroyed(){
console.log('---destroyed')
  },
  beforeUpdate(){
console.log('---beforeUpdate')
  },
  updated(){

console.log('---updated')
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
.activated {

color: red
}
</style>

webpackJsonp([1],{"+xhQ":function(t,a){},"4ml/":function(t,a){},"568C":function(t,a){},"5F3P":function(t,a){},"8+Eh":function(t,a){},NHnr:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("7+uW"),i={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"tab"},[n("van-tabbar",{attrs:{"active-color":"#4876FF","inactive-color":"#8A8A8A"},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[n("van-tabbar-item",{attrs:{icon:"home-o",title:"1111"}},[n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/mainpage"}},[n("span",{staticClass:"tab-link"},[t._v("首页")])])],1),t._v(" "),n("van-tabbar-item",{attrs:{icon:"cluster-o"}},[n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/knowledge"}},[n("span",{staticClass:"tab-link"},[t._v("知识体系")])])],1),t._v(" "),n("van-tabbar-item",{attrs:{icon:"friends-o"}},[n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/wxaccount"}},[n("span",{staticClass:"tab-link"},[t._v("公众号")])])],1),t._v(" "),n("van-tabbar-item",{attrs:{icon:"records"}},[n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/project"}},[n("span",{staticClass:"tab-link"},[t._v("项目")])])],1)],1)],1)},staticRenderFns:[]};var s={name:"App",components:{Tab:n("VU/8")({name:"Tab",data:function(){return{active:0}},methods:{}},i,!1,function(t){n("8+Eh")},null,null).exports}},o={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"top"}),this._v(" "),a("router-view"),this._v(" "),a("Tab")],1)},staticRenderFns:[]};var c=n("VU/8")(s,o,!1,function(t){n("lrsY")},null,null).exports,l=n("/ocq"),r={data:function(){return{page:0,article:[],loading:!1,finished:!1,banners:[]}},name:"mainpage",mounted:function(){this.getBanners()},methods:{openArticle:function(t){console.log(t.chapterName),window.open(t.link)},onRefresh:function(){this.page=0,this.loading=!0,this.article=[],this.getData(),this.getBanners()},getData:function(){this.page++;var t=this;this.$axios.get(this.baseUrl+"/article/listproject/"+t.page+"/json").then(function(a){console.log(a),t.loading=!1,a.data.data.datas.length>0?(t.finished=!1,t.article=t.article.concat(a.data.data.datas)):t.finished=!0}).catch(function(t){console.log(t)})},formatMsgTime:function(t){var a,n=new Date(t),e=n.getFullYear(),i=n.getMonth()+1,s=n.getDate(),o=n.getHours(),c=n.getMinutes(),l=(n.getSeconds(),new Date);return(a=Date.parse(l.toDateString())-t)<=6e4?"刚刚":6e4<a&&a<=36e5?Math.round(a/6e4)+"分钟前":36e5<a&&a<=864e5?Math.round(a/36e5)+"小时前":864e5<a&&a<=1296e6?Math.round(a/864e5)+"天前":a>1296e6&&e==l.getFullYear()?i+"-"+s+" "+o+":"+c:e+"-"+i+"-"+s+" "+o+":"+c},getBanners:function(){var t=this;this.$axios.get(this.baseUrl+"/banner/json").then(function(a){console.log(a),t.banners=a.data.data,t.loading=!1}).catch(function(t){console.log(t)})}}},d={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"app"}},[n("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},[n("van-swipe",{attrs:{autoplay:2e3,"indicator-color":"white"}},t._l(t.banners,function(t){return n("van-swipe-item",{key:t.imagePath},[n("van-image",{attrs:{height:"200",src:t.imagePath}})],1)}),1),t._v(" "),n("van-list",{attrs:{finished:t.finished,"finished-text":"我是有底线的"},on:{load:t.getData},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.article,function(a){return n("van-cell",{key:a.id},[n("div",{on:{click:function(n){return t.openArticle(a)}}},[n("div",[n("van-tag",{staticClass:"chapter",attrs:{round:"",plain:"",size:"medium"}},[t._v(t._s(a.chapterName))])],1),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(a.title))]),t._v(" "),n("div",{staticClass:"time"},[t._v(t._s(t.formatMsgTime(a.publishTime)))])])])}),1)],1)],1)},staticRenderFns:[]};var u=n("VU/8")(r,d,!1,function(t){n("568C")},"data-v-562050f8",null).exports,v={name:"Knowledge",data:function(){return{trees:[],loading:!1,finished:!1}},mounted:function(){},methods:{openArticle:function(t){},getData:function(){var t=this;this.$axios.get(this.baseUrl+"/tree/json").then(function(a){console.log(a),t.trees=a.data.data,t.loading=!1,t.finished=!0}).catch(function(t){console.log(t)})}}},h={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"app"}},[n("van-list",{attrs:{finished:t.finished,"finished-text":"我是有底线的"},on:{load:t.getData},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.trees,function(a){return n("van-cell",{key:a.id},[n("div",{on:{click:function(a){return t.openArticle(t.item)}}},[n("div",{staticClass:"title",attrs:{plain:"",size:"large"}},[n("div",[t._v("\n            "+t._s(a.name)+"\n            "),n("div",t._l(a.children,function(a){return n("van-tag",{key:a.id,staticClass:"child",attrs:{round:"",plain:"",size:"medium"}},[t._v(t._s(a.name))])}),1)])])])])}),1)],1)},staticRenderFns:[]};var f=n("VU/8")(v,h,!1,function(t){n("5F3P")},"data-v-7e07895a",null).exports,g={data:function(){return{active:0,page:0,wxaccounts:[],loading:!1,finished:!1,first:!0,articles:[]}},name:"wxaccount",mounted:function(){this.getData()},methods:{onTabClick:function(){this.getWXAccountArticles(this.wxaccounts[this.active])},getWXAccountArticles:function(t){this.articles=[];var a=this;this.$axios.get(this.baseUrl+"/wxarticle/list/"+t.id+"/0/json").then(function(t){console.log(t),a.loading=!1,a.finished=!0,a.articles=t.data.data.datas}).catch(function(t){console.log(t)})},getData:function(){var t=this;this.$axios.get(this.baseUrl+"/wxarticle/chapters/json").then(function(a){console.log(a),t.loading=!1,t.wxaccounts=a.data.data,t.getWXAccountArticles(t.wxaccounts[0]),t.loading=!1}).catch(function(t){console.log(t)})}}},p={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"app"}},[n("van-tabs",{attrs:{sticky:"",animated:"",type:"line",color:"#4876FF","title-active-color":"#4876FF"},on:{change:t.onTabClick},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},t._l(t.wxaccounts,function(a){return n("van-tab",{key:a.id,attrs:{title:a.name}},[n("van-list",{attrs:{finished:t.finished,"finished-text":"我是有底线的"},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.articles,function(a){return n("van-cell",{key:a.id},[n("div",{on:{click:function(n){return t.openArticle(a)}}},[n("div",{staticClass:"chapter"},[t._v(t._s(a.chapterName))]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(a.title))]),t._v(" "),n("div",{staticClass:"time"},[t._v(t._s(a.publishTime))])])])}),1)],1)}),1)],1)},staticRenderFns:[]};var m=n("VU/8")(g,p,!1,function(t){n("+xhQ")},"data-v-1a1fc5a6",null).exports,_={data:function(){return{active:0,page:0,wxaccounts:[],loading:!1,finished:!1,first:!0,articles:[]}},name:"project",mounted:function(){this.getData()},methods:{onTabClick:function(){this.getWXAccountArticles(this.wxaccounts[this.active])},getWXAccountArticles:function(t){this.articles=[];var a=this;this.$axios.get(this.baseUrl+"/wxarticle/list/"+t.id+"/0/json").then(function(t){console.log(t),a.loading=!1,a.finished=!0,a.articles=t.data.data.datas}).catch(function(t){console.log(t)})},getData:function(){var t=this;this.$axios.get(this.baseUrl+"/project/tree/json").then(function(a){console.log(a),t.loading=!1,t.wxaccounts=a.data.data,t.getWXAccountArticles(t.wxaccounts[0]),t.loading=!1}).catch(function(t){console.log(t)})}}},b={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"app"}},[n("van-tabs",{attrs:{sticky:"",animated:"",type:"card",color:"#4876FF","title-active-color":"#FFFFFF"},on:{change:t.onTabClick},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},t._l(t.wxaccounts,function(a){return n("van-tab",{key:a.id,attrs:{title:a.name}},[n("van-list",{attrs:{finished:t.finished,"finished-text":"我是有底线的"},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.articles,function(a){return n("van-cell",{key:a.id},[n("div",{on:{click:function(n){return t.openArticle(a)}}},[n("van-row",[n("van-col",{attrs:{span:"8"}},[n("van-image",{attrs:{height:"100",fit:"cover",src:a.envelopePic},scopedSlots:t._u([{key:"loading",fn:function(){return[n("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}],null,!0)})],1),t._v(" "),n("van-col",{attrs:{span:"16",offset:"0"}},[n("div",{staticClass:"conent"},[n("div",{staticClass:"van-ellipsis"},[t._v(t._s(a.title))]),t._v(" "),n("div",{staticClass:"van-multi-ellipsis--l2"},[t._v(t._s(a.desc))]),t._v(" "),n("div",{staticClass:"time"},[t._v(t._s(a.author))])])])],1)],1)])}),1)],1)}),1)],1)},staticRenderFns:[]};var x=n("VU/8")(_,b,!1,function(t){n("nh7R")},null,null).exports;e.a.use(l.a);var k=new l.a({routes:[{path:"/",redirect:"/mainpage"},{path:"/mainpage",name:"MainPage",component:u},{path:"/knowledge",name:"Knowledge",component:f},{path:"/wxaccount",name:"WxAccount",component:m},{path:"/project",name:"Project",component:x}]}),w=(n("j1ja"),n("v5o6")),C=n.n(w),A=n("mtWM"),F=n.n(A),y=n("Fd2+");n("4ml/");e.a.prototype.$axios=F.a,e.a.config.productionTip=!1,e.a.prototype.isBuild=!1,e.a.prototype.baseUrl="https://www.wanandroid.com",e.a.use(y.a),C.a.attach(document.body),new e.a({el:"#app",router:k,components:{App:c},template:"<App/>"})},lrsY:function(t,a){},nh7R:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.f47c536993b74b99bcaf.js.map
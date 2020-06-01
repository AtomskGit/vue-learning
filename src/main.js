import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')

/*
原始写法：
new Vue({
  el: '#app',
  components:{App}, //将App映射为标签（组件）
  template: '<App/> //在id为app的元素中插入App标签
  }
)

new Vue({
  el: '#app',
  render: function(createElement){
    return createElement(App)
  }
)
*/

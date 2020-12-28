import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store'
import TypeNav from './components/TypeNav';
import './mock/mockServer'
import './plugins/swiper'


Vue.config.productionTip = false

Vue.component(TypeNav.name ,TypeNav)


new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  router,
  store,
  render: h => h(App),
}).$mount('#app')

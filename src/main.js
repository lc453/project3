import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

let data = {
  products: mock,
  meal: [],
  totals: [0,0,0,0] // cost, protein, sugar, Calories
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FilterBy from '../views/Filter.vue'
import Meal from '../views/Meal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/filter',
    name: 'Filter',
    component: FilterBy
  },
  {
    path: '/meal',
    name: 'Meal',
    component: Meal
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

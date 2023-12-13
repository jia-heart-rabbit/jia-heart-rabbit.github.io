import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Layout',
    component:Layout,
  },
  {
    path:'/user',
    name:'user',
    component:()=>import('@/views/RSS.xml'),
  },
  {
    path:'/like',
    name:'like',
    component:()=>import('@/views/like.vue'),
  },
  {
    path:'/about',
    name:'about',
    component:()=>import('@/views/about.vue'),
  },
]

const router = new VueRouter({
  routes
})

export default router

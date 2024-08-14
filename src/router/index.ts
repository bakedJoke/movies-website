import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes : Array<RouteRecordRaw>= [
  {
    path: '/',
    name: 'main',
    redirect:"/home",
    component: ()=>import("@/layouts/main-layout/main_layout.vue"),
    children:[
      {
        path:'/home',
        name:'home',
        component: ()=>import('@/components/home/home.vue')
      },
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
  
})

export default router

import { createRouter, createWebHashHistory, RouteRecordRaw, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/todoList',
    name: 'TodoList',
    component: () => import(/* webpackChunkName: "todo" */ '@/views/TodoList.vue')
  },
  {
    path: '/luckdraw',
    name: 'LuckDraw',
    component: () => import(/* webpackChunkName: "luckdraw" */ '@/views/LuckDraw.vue')
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import(/* webpackChunkName: "address" */ '@/views/address/AddressList')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "test" */ '@/views/Test.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),//createWebHashHistory
  routes
})

export default router

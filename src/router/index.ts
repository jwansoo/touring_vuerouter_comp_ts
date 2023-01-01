import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import NProgress from 'nprogress'
import EventService from '@/services/EventService'
const routes= [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props:(route: { query: { page: string } })=>({page:parseInt(route.query.page) || 1})
  },
  {
    path:'/event/:id',
    name:'EventLayout',
    props:true,
    component:()=>import('../views/event/Layout.vue'),
                                    
    children:[
      {
        path:'',
        name:'EventDetails',
        component:()=>import('../views/event/Details.vue')
      },
          {
        path:'register',
        name:'EventRegister',
        props:true,
        component:()=>import('../views/event/Register.vue')
      },
      {
        path:'Edit',
        name:'EventEdit',
        props:true,
        component:()=>import('../views/event/Edit.vue'),
        meta:{requireAUth:true}
      },
     ]
},
  {
    path: '/about-us',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue'),
    alias:'/about'
  },
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
  {
    path:'/404/:resource',
    name:'404Resource',
    component: () => import('../views/NotFound.vue'),
    props:true
  },
  {
    path:'/network-error',
    name:'NetworkError',
    component:()=>import('../views/NetworkError.vue')
  },
 ]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from,savedPosition){
    if(savedPosition){
      return savedPosition
    }else{
    return {top:0}
    }
  }
})
export default router

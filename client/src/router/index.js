import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import News from '../views/News.vue';
import Dashboard from '../views/Dashboard.vue';
import AboutUs from '../views/AboutUs.vue';
/* eslint-disable */
Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter (to, from, next){
      if(localStorage.token){
        next('/dashboard');
      }else {
        next();
      }
    },
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
    beforeEnter (to, from, next){
      if(localStorage.token){
        next('/dashboard');
      }else{
        next();
      }
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter (to, from, next){
      if(localStorage.token){
        next('/dashboard');
      }else{
        next();
      }
    },
  },
  {
    path: '/news',
    name: 'news',
    component: News,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutUs,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    beforeEnter (to, from, next){
      if(!localStorage.token){
        next('/login');
      }else{
        next()
      }
    }
  },
];

const router = new VueRouter({
  mode: 'history',
  hash: 'none',
  routes,
});

export default router;

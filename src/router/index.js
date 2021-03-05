import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Interests from '../views/Interests.vue'
import Resume from '../views/Resume.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/interests',
    name: 'Interests',
    component: Interests
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  }
  
]

const router = new VueRouter({
  routes
})

export default router

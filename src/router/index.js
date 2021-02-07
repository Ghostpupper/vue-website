import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Art from '../views/Art.vue'
import Interests from '../views/Interests.vue'
import References from '../views/References.vue'
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
    path: '/art',
    name: 'Art',
    component: Art
  },
  {
    path: '/interests',
    name: 'Interests',
    component: Interests
  },
  {
    path: '/references',
    name: 'References',
    component: References
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

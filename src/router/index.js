import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Entrepreneur from '../views/Entrepreneur.vue'
import Investor from '../views/Investor.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/entrepreneur',
    name: 'entrepreneur',
    component: Entrepreneur,
    props: true,
  },
  
  {
    path: '/investor',
    name: 'investor',
    component: Investor,
    props: true,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    props: true,
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  //***creer scroll naar (id)***/
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', 
      } 
    } else{
      return {top: 0} //Zet de positie terug naar top van de pagina
    }
  }
})

export default router

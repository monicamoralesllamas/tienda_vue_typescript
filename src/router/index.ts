import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ProfileView from '@/views/ProfileView.vue'
import DetailView from '@/views/DetailView.vue'


//se definen las rutas existentes en la página
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
  path: '/detail/:id',
  name: 'detail',
  component: DetailView,
  props: (route) => {
    const id = Number(route.params.id)
    return isNaN(id) ? {id:null}:{id}
  }
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

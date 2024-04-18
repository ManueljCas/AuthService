import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsersView from '@/views/UsersView.vue'
import UserView from '@/views/UserView.vue'
import Register from '@/components/Register.vue'
import LoginView from '@/views/LoginView.vue'
import Dashboard from '@/views/Dashboard.vue'
import AuthService from '@/service/UserService'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/user/:email',
      name: 'user',
      component: UserView,
      meta: {requiresAuth: true}
    },
    {
      path: '/usuarios',
      name: 'Usuarios',
      component: UsersView
    },
    {
      path: '/registro',
      name: 'Registro',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/dash',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})
// Agrega un guardia global de navegación para verificar si el usuario ha iniciado sesión
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = AuthService.isAuthenticated() // Define este método en tu servicio de autenticación

  if (requiresAuth && !isAuthenticated) {
    // Si la ruta requiere autenticación y el usuario no ha iniciado sesión, redirige al inicio de sesión
    next('/login')
  } else {
    // De lo contrario, permite la navegación
    next()
  }
})


export default router

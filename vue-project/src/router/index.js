import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import Contact from '../views/ContactView.vue';
import Register from '../views/RegisterView.vue';
import Login from '../views/LoginView.vue';
import Profile from '../views/ProfileView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      requiresAuth: true, // Указываем, что доступ к этому маршруту требует авторизации
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Проверка авторизации перед переходом к маршруту
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('user') !== null;

  // Если маршрут требует авторизации и пользователь не авторизован, перенаправляем на страницу входа
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;

import { createRouter, createWebHistory } from 'vue-router'
import Todo from '@/page/Todo.vue'
import About from '@/page/About.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'

const routes = [
  { path: '/todo', 
    name: 'Todo', 
    component: Todo 
  },
  { path: '/about', 
    name: 'About', 
    component: About 
  },
  { path: '/', 
    name: 'Login', 
    component: Login 
  },
  { path: '/register', 
    name: 'Register', 
    component: Register 
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

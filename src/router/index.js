import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/page/Home.vue'
import About from '@/page/About.vue'
import Login from '@/page/Login.vue'
import Register from '@/page/Register.vue'
import CreateTask from '@components/CreateTask.vue'
import TaskList from '@components/TaskList.vue'
import EditTask from '@components/EditTask.vue'


const routes = [
  { path: '/', name: 'Login', component: Login }, // เส้นทางสำหรับหน้า Login เริ่มต้น
  { path: '/home', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/register', name: 'Register', component: Register },
  { path: '/createTask', name: 'CreateTask', component: CreateTask },
  { path: '/editTask', name: 'EditTask', component: EditTask },
  { path: '/taskList', name: 'TaskList', component: TaskList }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

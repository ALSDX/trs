import SingleTodo from '@/views/SingleTodo.vue'
import TodoList from '@/views/TodoList.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/todos'
    },
    {
      path: '/todos',
      component: TodoList
    },
    {
      path: '/todos/:id',
      component: SingleTodo
    }
  ],
})

export default router
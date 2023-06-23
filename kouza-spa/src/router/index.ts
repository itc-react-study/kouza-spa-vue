import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/Login.vue'
import Main from '@/views/main/Main.vue'
import { MAIN, MENU_LIST } from '@/config/menuList.config'

/**
 * 描述
 * @date 2023-02-24
 * @returns {any}
 */
const getChildren = () => {
  const children = MENU_LIST.map((item) => {
    return {
      path: item.path.split(MAIN)[1],
      component: item.component
    }
  })

  return children
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Main',
      name: 'Main',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Main,
      children: getChildren()
    }
  ]
})

export default router

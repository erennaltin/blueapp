import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LoginPage from '../views/LoginPage.vue'
import index from '../views/index.vue'
import store from '../store'
import defaultClient from '../main.js'
import checkUserQuery from '@/graphql/checkUser.query.gql'


const routes = [
  {
    path: '/',
    name: 'CheckPage',
    component: index
  },
  {
    path: '/Login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignPage.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
  {
    path: '/create',
    name: 'Create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "create" */ '../views/CreateStatement.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  defaultClient.query({
    query: checkUserQuery
  }).then((res) => {
    if(to.fullPath === "/login" && res.data.me !== null || to.fullPath === "/signup" && res.data.me !== null) {
      router.replace("/Home")
    }
    else if(res.data.me === null && to.fullPath !== "/login" && from.fullPath !== "/login" && to.fullPath !== "/signup") {
      router.replace('/login')
    }
    else if(res.data.me !== null) {
      store.dispatch('getUser', res.data.me)
    }
    else if(store.state.user2 === null && to.fullPath !== "/login" && to.fullPath !== "/signup") {
      router.replace("/login")
    }
  })
  // router.push(to.fullPath)
})



export default router

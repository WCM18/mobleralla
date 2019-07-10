import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/kitchen',
      name: 'kitchen',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "kitchen" */ './views/Kitchen.vue')
    },
    {
      path: '/living',
      name: 'living',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "living" */ './views/Living.vue')
    },
    {
      path: '/office',
      name: 'office',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "office" */ './views/Office.vue')
    },
    {
      path: '/bedroom',
      name: 'bedroom',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "bedroom" */ './views/Bedroom.vue')
    },
    {
      path: '/sofas',
      name: 'sofas',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "sofas" */ './views/Sofas.vue')
    },
    {
      path: '/armchairs',
      name: 'armchairs',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "armchairs" */ './views/Armchairs.vue')
    },
    {
      path: '/tables',
      name: 'tables',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "tables" */ './views/Tables.vue')
    },
    {
      path: '/desks',
      name: 'desks',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "desks" */ './views/Desks.vue')
    },
    {
      path: '/officechairs',
      name: 'officechairs',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "officechairs" */ './views/Officechairs.vue')
    },
    {
      path: '/bookshelves',
      name: 'bookshelves',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "bookshelves" */ './views/Bookshelves.vue')
    },
    {
      path: '/beds',
      name: 'beds',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "beds" */ './views/Beds.vue')
    },
    {
      path: '/nightstands',
      name: 'nightstands',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "nightstands" */ './views/Nightstands.vue')
    },
    {
      path: '/wardrobes',
      name: 'wardrobes',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "wardrobes" */ './views/Wardrobes.vue')
    },
    {
      path: '/countertops',
      name: 'countertops',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "countertops" */ './views/Countertops.vue')
    },
    {
      path: '/worktops',
      name: 'worktops',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "worktops" */ './views/Worktops.vue')
    },
    {
      path: '/kitchenshelves',
      name: 'kitchenshelves',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "kitchenshelves" */ './views/Kitchenshelves.vue')
    },
    {
      path: '/drawercabinets',
      name: 'drawercabinets',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "drawercabinets" */ './views/Drawercabinets.vue')
    },
    {
      path: '/cupboards',
      name: 'cupboards',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "cupboards" */ './views/Cupboards.vue')
    }
  ]
})
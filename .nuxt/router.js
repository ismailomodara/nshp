import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _65a29abe = () => interopDefault(import('../pages/about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _3cd4f9a6 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _d7cbfcba = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _1241f3ee = () => interopDefault(import('../pages/partners.vue' /* webpackChunkName: "pages/partners" */))
const _b1fb0fc2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _65a29abe,
    name: "about-us"
  }, {
    path: "/contact",
    component: _3cd4f9a6,
    name: "contact"
  }, {
    path: "/faq",
    component: _d7cbfcba,
    name: "faq"
  }, {
    path: "/partners",
    component: _1241f3ee,
    name: "partners"
  }, {
    path: "/",
    component: _b1fb0fc2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

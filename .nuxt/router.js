import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _65a29abe = () => interopDefault(import('../pages/about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _3cd4f9a6 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _d7cbfcba = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _2d678cce = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _1241f3ee = () => interopDefault(import('../pages/partners.vue' /* webpackChunkName: "pages/partners" */))
const _6a1ff81a = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _6f4b035a = () => interopDefault(import('../pages/terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */))
const _75b61c62 = () => interopDefault(import('../pages/news/NewsContent.js' /* webpackChunkName: "pages/news/NewsContent" */))
const _30d4cf5e = () => interopDefault(import('../pages/news/_slug.vue' /* webpackChunkName: "pages/news/_slug" */))
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
    path: "/news",
    component: _2d678cce,
    name: "news"
  }, {
    path: "/partners",
    component: _1241f3ee,
    name: "partners"
  }, {
    path: "/privacy-policy",
    component: _6a1ff81a,
    name: "privacy-policy"
  }, {
    path: "/terms-of-use",
    component: _6f4b035a,
    name: "terms-of-use"
  }, {
    path: "/news/NewsContent",
    component: _75b61c62,
    name: "news-NewsContent"
  }, {
    path: "/news/:slug",
    component: _30d4cf5e,
    name: "news-slug"
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

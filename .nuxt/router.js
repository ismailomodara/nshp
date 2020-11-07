import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _595121dc = () => interopDefault(import('../pages/about-nshp.vue' /* webpackChunkName: "pages/about-nshp" */))
const _faa342aa = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _7a784c21 = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _160a754a = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _230bd8f4 = () => interopDefault(import('../pages/partnerships.vue' /* webpackChunkName: "pages/partnerships" */))
const _bf825a48 = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _4985a69c = () => interopDefault(import('../pages/terms-of-use.vue' /* webpackChunkName: "pages/terms-of-use" */))
const _037299e0 = () => interopDefault(import('../pages/news/NewsContent.js' /* webpackChunkName: "pages/news/NewsContent" */))
const _1977b7da = () => interopDefault(import('../pages/news/_slug.vue' /* webpackChunkName: "pages/news/_slug" */))
const _6ef81b1d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/about-nshp",
    component: _595121dc,
    name: "about-nshp"
  }, {
    path: "/contact",
    component: _faa342aa,
    name: "contact"
  }, {
    path: "/faq",
    component: _7a784c21,
    name: "faq"
  }, {
    path: "/news",
    component: _160a754a,
    name: "news"
  }, {
    path: "/partnerships",
    component: _230bd8f4,
    name: "partnerships"
  }, {
    path: "/privacy-policy",
    component: _bf825a48,
    name: "privacy-policy"
  }, {
    path: "/terms-of-use",
    component: _4985a69c,
    name: "terms-of-use"
  }, {
    path: "/news/NewsContent",
    component: _037299e0,
    name: "news-NewsContent"
  }, {
    path: "/news/:slug",
    component: _1977b7da,
    name: "news-slug"
  }, {
    path: "/",
    component: _6ef81b1d,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

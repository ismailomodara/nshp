export { default as Footer } from '../../components/Footer.vue'
export { default as Loader } from '../../components/Loader.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as MsPartners } from '../../components/MsPartners.vue'
export { default as Navigation } from '../../components/Navigation.vue'

export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/Footer" */).then(c => c.default || c)
export const LazyLoader = import('../../components/Loader.vue' /* webpackChunkName: "components/Loader" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyMsPartners = import('../../components/MsPartners.vue' /* webpackChunkName: "components/MsPartners" */).then(c => c.default || c)
export const LazyNavigation = import('../../components/Navigation.vue' /* webpackChunkName: "components/Navigation" */).then(c => c.default || c)

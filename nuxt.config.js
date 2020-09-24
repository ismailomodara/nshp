export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'esphp-new',
    meta: [
      { charset: 'utf-8' },
      {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1'},
      // The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags

      {name: 'author', content: 'Eden Life Concierge Ltd'},
      {name: 'theme-color', content: '#20B26D'},
      {name: 'description', content: 'We\'ve created a food experience like nothing you\'ve ever seen. Be one of the first to try it out. Request a demo call today!'},
      {name: 'keywords', content:'Eden Life in Nigeria, Eden Concierge in Nigeria, Eden Concierge, Eden Life, Improving quality of life, Quality of Life in Nigeria, Excellent service, Food service, ouredenlife, subscription plans, eden food delivery, best housework app, weekly meal delivery, food delivery Lagos, how to order food online in Nigeria, the best delivery service for food?, food delivery lekki, food delivery in Yaba, food delivery on the mainland'},

      // Schema.org markup for Google+
      {itemprop: 'name', content: 'Sign up for Early Access to Eden\'s New Food Subscription'},
      {itemprop: 'description', content: 'We\'ve created a food experience like nothing you\'ve ever seen. Be one of the first to try it out. Request a demo call today!'},
      {itemprop: 'image', content: 'https://choplife.ouredenlife.com/food-product-card.png'},

      // Twitter Card data
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@ouredenlife'},
      {name: 'twitter:title', content: 'Sign up for Early Access to Eden\'s New Food Subscription'},
      // {name: 'twitter:image', content: 'https://choplife.ouredenlife.com/edentwittercard.png?4362984378'},
      {name:"twitter:url", content:"https://choplife.ouredenlife.com"},
      {name: 'twitter:image', content: 'https://choplife.ouredenlife.com/food-product-card.png'},
      {name: 'twitter:description', content: 'We\'ve created a food experience like nothing you\'ve ever seen. Be one of the first to try it out. Request a demo call today!'},
      {name: 'twitter:app:country', content: 'NG'},
      {name:"twitter:creator", content:"@ouredenlife"},
      {name:"twitter:domain", content:"@ouredenlife"},
      // Twitter summary card with large image must be at least 280x150px
      {name: 'twitter:image:src', content: 'https://choplife.ouredenlife.com/food-product-card.png'},
      // {name: 'twitter:image:src', content: 'https://choplife.ouredenlife.com/edentwittercard.png?4362984378'},

      // Open Graph data
      {property: 'og:title', content: 'Sign up for Early Access to Eden\'s New Food Subscription'},
      {property: 'og:url', content: 'https://choplife.ouredenlife.com'},
      {property: 'og:image', content: 'https://choplife.ouredenlife.com/food-product-card.png'},
      {property: 'og:description', content: 'We\'ve created a food experience like nothing you\'ve ever seen. Be one of the first to try it out. Request a demo call today!'},
      {property: 'og:type', content: 'website'},
      {property: 'og:site_name', content: 'Eden'},

      // Open Graph for WhatsApp
      {property: 'og:title', content: 'Sign up for Early Access to Eden\'s New Food Subscription'},
      {property: 'og:url', content: 'https://choplife.ouredenlife.com'},
      {property: 'og:image', content: 'https://choplife.ouredenlife.com/food-product-card-whatsapp.png'},
      {property: 'og:description', content: 'We\'ve created a food experience like nothing you\'ve ever seen. Be one of the first to try it out. Request a demo call today!'},
      {property: 'og:type', content: 'website'},
      {property: 'og:site_name', content: 'Eden'}
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    script: [
      // Google Analytics
      {
        innerHTML: "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-178017824-1', 'auto');ga('send', 'pageview');",
        type: 'text/javascript',
        defer: true
      },

      // Global site tag (gtag.js) - Google Analytics
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-178017824-1',
        type: 'text/javascript',
        body: true,
        defer: true
      },
      {
        innerHTML: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-178017824-1');`,
        type: 'text/javascript',
        body: true,
        defer: true
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/main.scss',
    '@/assets/css/media.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/element-ui'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
  },
}

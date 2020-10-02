export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'NSHP - National Social Housing Programme',
    meta: [
      { charset: 'utf-8' },
      {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1'},
      // The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags

      {name: 'author', content: 'National Social Housing Programme (NSHP)'},
      {name: 'theme-color', content: '#20B26D'},
      {name: 'description', content: ''},
      {name: 'keywords', content:''},

      // Schema.org markup for Google+
      {itemprop: 'name', content: 'National Social Housing Programme (NSHP)'},
      {itemprop: 'description', content: ''},
      {itemprop: 'image', content: 'https://nshp.ng/unfurl.jpg'},

      // Twitter Card data
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@nshp_ng'},
      {name: 'twitter:title', content: 'National Social Housing Programme (NSHP)'},
      {name:"twitter:url", content:"https://nshp.ng"},
      {name: 'twitter:image', content: 'https://nshp.ng/unfurl.jpg'},
      {name: 'twitter:description', content: ''},
      {name: 'twitter:app:country', content: 'NG'},
      {name:"twitter:creator", content:"@nshp_ng"},
      {name:"twitter:domain", content:"@nshp_ng"},
      // Twitter summary card with large image must be at least 280x150px
      {name: 'twitter:image:src', content: 'https://nshp.ng/unfurl.jpg'},

      // Open Graph data
      {property: 'og:title', content: 'National Social Housing Programme (NSHP)'},
      {property: 'og:url', content: 'https://nshp.ng'},
      {property: 'og:image', content: 'https://nshp.ng/unfurl.jpg'},
      {property: 'og:description', content: ''},
      {property: 'og:type', content: 'website'},
      {property: 'og:site_name', content: 'NSHP'},

      // Open Graph for WhatsApp
      {property: 'og:title', content: 'National Social Housing Programme (NSHP)'},
      {property: 'og:url', content: 'https://nshp.ng'},
      {property: 'og:image', content: 'https://nshp.ng/unfurl-whatsapp.jpg'},
      {property: 'og:description', content: ''},
      {property: 'og:type', content: 'website'},
      {property: 'og:site_name', content: 'National Social Housing Programme'}
    ],
    link: [
      { rel: 'icon', href: '/favicon.png' },
      // {rel: 'icon', type: 'image/png', sizes: '144x144', href: './brand/platform-icons/android-144.png'},
      // {rel: 'icon', type: 'image/png', sizes: '32x32', href: './brand/platform-icons/android-32.png'},
      // {rel: 'apple-touch-icon', sizes: '180x180', href: './brand/platform-icons/ios-180.png'},
      // {rel: 'apple-touch-icon', sizes: '120x120', href: './brand/platform-icons/ios-120.png'},
      // {rel: 'apple-touch-icon', sizes: '152x152', href: './brand/platform-icons/ios-152.png'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@300;400;600;700&display=swap'}
    ],
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
    '@/assets/css/variables.scss',
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
  loading: false,
  loadingIndicator: {
    name: 'circle',
    color: '#fff',
    background: 'white'
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
    extend(config, ctx) {
      config.module.rules.push({
        enforce: "pre",
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        exclude: /(node_modules)/,
        options: {
          fix: true
        }
      })
    }
  },
}

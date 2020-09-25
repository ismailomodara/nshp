<template>
  <div>
    <navigation />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default {
  name: 'DefaultLayout',
  components: {
    Navigation,
    Footer,
  },
}
</script>

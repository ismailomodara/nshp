<template>
  <div id="topPage" ref="topPage">
    <navigation />
    <nuxt />
    <Footer />
    <div v-if="showBackToTop" class="ms-back-to-top">
      <el-button
        type="primary"
        icon="el-icon-top"
        circle
        @click="backToTop"
      ></el-button>
    </div>
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
  data() {
    return {
      showBackToTop: false,
    }
  },
  watch: {
    $route() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()

        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.showBackToTop = window.pageYOffset > 200
    })
  },
  methods: {
    backToTop() {
      this.$refs.topPage.scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style scoped lang="scss">
.ms-back-to-top {
  position: fixed;
  z-index: 99;
  right: 40px;
  bottom: 40px;

  .el-button {
    box-shadow: -4px 16px 30px rgba(0, 0, 0, 0.1) !important;
  }
}
</style>

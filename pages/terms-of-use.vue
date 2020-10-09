<template>
  <div>
    <header class="ms-header--other">
      <div class="ms-header--other__bg">
        <img
          :src="getImage('news/news_header.jpg')"
          alt="Become a Partner NSHP"
        />
      </div>
      <el-container>
        <div class="ms-header--other__content">
          <h1>Terms of Use</h1>
        </div>
      </el-container>
      <div class="overlay header-gradient"></div>
    </header>
  </div>
</template>

<script>
import image from '../mixin/image'

export default {
  name: 'TermsOfUse',
  mixins: [image],
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>

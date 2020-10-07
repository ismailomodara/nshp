<template>
  <div>
    <header class="ms-header--other">
      <div class="ms-header--other__bg">
        <img
          :src="getImage('home/slider/owokekere_fun_ile_to_dara.jpg')"
          alt="Become a Partner NSHP"
        />
      </div>
      <el-container>
        <div class="ms-header--other__content">
          <h1>Stay informed</h1>
        </div>
      </el-container>
      <div class="overlay header-gradient"></div>
    </header>
    <div class="ms-all--news ms-section">
      <el-container>
        <el-row type="flex" class="flex-wrap" :gutter="40">
          <el-col
            v-for="(news, i) in allNews"
            :key="i"
            :sm="24"
            :md="24"
            :lg="i % 3 === 0 ? 24 : 12"
          >
            <news-card
              :news="news"
              :orientation="`${i % 3 === 0 ? 'horizontal' : 'vertical'}`"
            />
          </el-col>
          <!--          <el-col :sm="12" :md="12" :lg="12">-->
          <!--            <news-card orientation="vertical" />-->
          <!--          </el-col>-->
          <!--          <el-col :sm="12" :md="12" :lg="12">-->
          <!--                        <news-card orientation="vertical" />-->
          <!--          </el-col>-->
        </el-row>
      </el-container>
    </div>
  </div>
</template>

<script>
import image from '../../mixin/image'
import NewsCard from '../../components/NewsCard'
import newsContent from './NewsContent'

export default {
  name: 'News',
  components: {
    NewsCard,
  },
  mixins: [image],
  data() {
    return {}
  },
  computed: {
    allNews() {
      return newsContent
    },
  },
}
</script>

<style lang="scss" scoped>
.ms-all--news {
  background: #f4faf7;
  padding-bottom: 100px;

  > .el-container {
    max-width: 75% !important;
    margin: auto;
  }
}

@media (min-width: 1440px) {
  .ms-all--news {
    padding-bottom: 80px;

    > .el-container {
      max-width: 1000px !important;
    }
  }
}

@media (max-width: 992px) {
  .ms-all--news {
    > .el-container {
      max-width: 90% !important;
    }
  }
}
</style>

<template>
  <div>
    <header class="ms-header--other">
      <div class="ms-header--other__bg">
        <img
          v-if="news.image"
          :src="getImage(`news/${news.image}`)"
          :alt="news.title"
        />
      </div>
      <el-container>
        <div class="ms-header--other__content">
          <h1>{{ news.title }}</h1>
          <p class="ms-news--date">{{ news.date }}</p>
        </div>
      </el-container>
      <div class="overlay header-gradient"></div>
    </header>
    <div class="ms-news--view ms-section">
      <el-container>
        <el-row type="flex">
          <el-col :span="24">
            <div v-html="news.content"></div>
          </el-col>
        </el-row>
      </el-container>
    </div>
  </div>
</template>

<script>
import image from '../../mixin/image'
import newsContent from './NewsContent'

export default {
  name: 'NewsView',
  mixins: [image],
  data() {
    return {}
  },
  computed: {
    news() {
      const news = newsContent.filter(
        (news) => this.$route.params.slug === news.slug
      )
      return news[0]
    },
  },
  mounted() {
    document.querySelector('body').style.background = '#fff'
  },
}
</script>

<style lang="scss">
.ms-news--date {
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
}

.ms-news--view {
  background: #fff;

  > .el-container {
    max-width: 75% !important;
    margin: auto;
  }

  .ms-sub--section {
    margin-bottom: 20px;

    h4 {
      margin-bottom: 15px;
    }
  }

  p {
    font-size: 1rem;
    line-height: 2.2;
    color: #0b1207;
    opacity: 1;
    text-align: justify;

    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  a {
    text-decoration: underline;
    color: #58bb8c;
  }

  ul {
    list-style: square;

    li {
      padding: 10px;
      line-height: 2;
    }
  }
}

@media (min-width: 1440px) {
  .ms-news--view {
    padding-bottom: 80px;

    > .el-container {
      max-width: 1000px !important;
    }
  }
}

@media (max-width: 600px) {
  .ms-news--view {
    > .el-container {
      max-width: 90% !important;
    }
  }
}
</style>

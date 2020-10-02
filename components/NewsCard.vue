<template>
  <div :class="['ms-news', { horizontal: orientation === 'horizontal' }]">
    <nuxt-link
      :to="`news/${news.title.toLowerCase().split(' ').join('-')}`"
    ></nuxt-link>
    <div class="ms-news--image">
      <img :src="getImage('home/slider/slide-1.jpg')" alt="News Image" />
    </div>
    <div class="ms-news--desc">
      <h3 class="ms-news--title">The News Title</h3>
      <p>
        National Social Housing Programme (NSHP) allows you to become an instant
        homeowner with as low as
      </p>
      <div class="ms-news--desc__footer">
        <nuxt-link to="{ name: 'news', params: { slug: 'the-news-title' } }"
          ><el-button type="primary" size="medium">Read more</el-button>
        </nuxt-link>
        <span class="ms-news--date">1st Oct, 2020.</span>
      </div>
    </div>
  </div>
</template>

<script>
import image from '../mixin/image'

export default {
  name: 'NewsCard',
  mixins: [image],
  props: {
    orientation: {
      type: String,
      default: 'vertical',
    },
  },
  data() {
    return {
      news: {
        date: '1st Oct, 2020.',
        title: 'The News Title',
        desc:
          'Becoming a homeowner in any part of Nigeria just became easier! The National Social Housing Programme (NSHP) allows you to become an instant homeowner with as low as',
        contents: [
          'Imagine becoming the latest homeowner in any part ' +
            'of Nigeria, amazing right? The National Social Housing Programme ' +
            '(NSHP) allows you to become an instant landlord with as low as <span>₦2,000,000 only</span>',
        ],
      },
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.ms-news {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
  box-shadow: -2px 8px 15px rgba(0, 0, 0, 0.05) !important;
  transition: all 0.2s ease-out;
  margin-bottom: 50px;

  &:hover {
    transform: translateY(-6px);
    box-shadow: -4px 16px 30px rgba(0, 0, 0, 0.1) !important;
    transition: all 0.2s ease-in;
  }

  > a {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .ms-news--image {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    height: 250px;

    img {
      height: 100%;
      width: 100%;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      object-fit: cover;
    }
  }

  .ms-news--desc {
    background: #fff;
    padding: 40px;
    text-align: left;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .ms-news--title {
      margin-bottom: 15px;
    }

    p {
      text-align: justify;

      &:not(:last-child) {
        margin-bottom: 20px;
        font-size: 0.875rem;
      }
    }

    ul {
      list-style: square;

      li {
        font-size: 0.875rem;

        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }

    .ms-news--desc__footer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .ms-news--date {
        text-transform: uppercase;
        opacity: 0.74;
        font-size: 0.75rem;
        font-weight: 600;
        color: #163627;
      }
    }
  }
}

@media (min-width: 601px) {
  .ms-news {
    &.horizontal {
      flex-direction: row;

      .ms-news--image {
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        border-top-right-radius: 0;
        width: 80%;
        height: auto;

        img {
          border-bottom-left-radius: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 0;
        }
      }

      .ms-news--desc {
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
      }
    }
  }
}

@media (max-width: 992px) {
  .ms-news .ms-news--desc .ms-news--title {
    font-size: 1.125rem;
  }
}
</style>

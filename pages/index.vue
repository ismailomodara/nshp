<template>
  <header class="ms-header">
    <div class="carousel-container">
      <span class="prev" @click="prevMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24.009"
          height="16.003"
          viewBox="0 0 24.009 16.003"
        >
          <defs>
            <style>
              .pre {
                fill: #fff;
              }
            </style>
          </defs>
          <path
            class="pre"
            d="M8.687.306A1.089,1.089,0,0,1,8.692,1.84L3.624,6.915H22.917a1.083,1.083,0,0,1,0,2.167H3.635L8.7,14.157a1.1,1.1,0,0,1-.008,1.533,1.08,1.08,0,0,1-1.526-.008L.3,8.766h0a1.216,1.216,0,0,1-.225-.342,1.034,1.034,0,0,1-.083-.418A1.086,1.086,0,0,1,.3,7.248L7.169.331A1.062,1.062,0,0,1,8.687.306Z"
            transform="translate(0.008 0.001)"
          />
        </svg>
      </span>
      <div class="carousel">
        <carousel
          ref="slider"
          :per-page="1"
          :loop="true"
          :autoplay="true"
          :autoplay-timeout="5000"
          :autoplay-hover-pause="false"
          :pagination-padding="6"
          :pagination-size="12"
          pagination-active-color="#FCB320"
        >
          <slide
            v-for="(slide, index) in slides"
            :key="index"
            :data-index="index"
          >
            <div class="slide-image">
              <img :src="url(slide.slide)" alt="NSHP" />
              <div class="overlay header-gradient"></div>
            </div>
            <div class="slide-content">
              <h1>{{ slide.text }}</h1>
            </div>
          </slide>
        </carousel>
      </div>
      <span class="next" @click="nextMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="16"
          viewBox="0 0 24 16"
        >
          <defs>
            <style>
              .nex {
                fill: #fff;
              }
            </style>
          </defs>
          <path
            class="nex"
            d="M15.305.306A1.089,1.089,0,0,0,15.3,1.84l5.068,5.075H1.075a1.083,1.083,0,0,0,0,2.167H20.357l-5.068,5.075a1.1,1.1,0,0,0,.008,1.533,1.08,1.08,0,0,0,1.526-.008l6.869-6.916h0a1.216,1.216,0,0,0,.225-.342A1.034,1.034,0,0,0,24,8.006a1.086,1.086,0,0,0-.308-.758L16.823.331A1.062,1.062,0,0,0,15.305.306Z"
          />
        </svg>
      </span>
    </div>
  </header>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'Home',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      slides: [
        {
          text: 'Homes by Nigerians for Nigerians',
          slide: '1',
        },
        {
          text: 'Own a home for as low as ₦2million',
          slide: '2',
        },
        {
          text: 'Shikini money for beta house',
          slide: '3',
        },
        {
          text: 'Owo kekere fun ile to dara',
          slide: '4',
        },
        {
          text: 'Biyan kuɗi kaɗan don gida mai kyau',
          slide: '5',
        },
        {
          text: 'Kwụ ụgwọ obere ego maka ezigbo ụlọ',
          slide: '6',
        },
        {
          text: 'Beta work. Beta house. Beta life for evribodi',
          slide: '2',
        },
      ],
    }
  },
  mounted() {
    document
      .querySelectorAll('.VueCarousel-slide')[0]
      .classList.add('VueCarousel-slide-active')
  },
  methods: {
    nextMenu() {
      this.$refs.slider.goToPage(this.$refs.slider.getNextPage())
    },
    prevMenu() {
      this.$refs.slider.goToPage(this.$refs.slider.getPreviousPage())
    },
    url(image) {
      return require(`../assets/img/home/slider/slide-${image}.jpg`)
    },
  },
}
</script>

<style lang="scss" scoped>
.ms-header {
  position: relative;
  min-height: 50vh;
  text-align: left;

  .carousel-container {
    padding: 0;
    width: 100%;
    position: relative;
    margin: auto;

    .carousel {
      width: 100%;
      margin: auto;
    }

    span {
      cursor: pointer;
      top: 50%;
      transform: translateY(-70%);
      position: absolute;
      z-index: 2;

      svg {
        height: 16px;
      }

      &.prev {
        left: 20px;
      }

      &.next {
        right: 20px;
      }
    }
  }

  .VueCarousel-slide {
    position: relative;

    .slide-image {
      position: relative;
      height: 100%;
      overflow: hidden;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    &.VueCarousel-slide-active img {
      animation: scale 10000ms ease-in-out forwards;
    }

    .slide-content {
      position: absolute;
      width: 50%;
      top: 50%;
      left: 16%;
      transform: translateY(-50%);
      text-align: left;
      color: #fff !important;

      h1 {
        font-weight: 700;
        color: #fff;
        line-height: 1.4;
        margin: 0;
        width: 75%;
      }
    }
  }
}

@keyframes scale {
  to {
    transform: scale(1.3);
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.35);
}

.overlay.header-gradient {
  background: rgb(0, 146, 63);
  /* background: linear-gradient(90deg, rgba(0, 146, 63, 1) 0%, rgba(0, 146, 63, 1) 34%, rgba(255, 255, 255, 0) 56%); */
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.2) 54%,
    rgba(255, 255, 255, 0) 76%
  );
}

.owl-nav {
  position: absolute;
  top: 40%;
  display: flex;
  justify-content: space-between;
  width: 94%;
  left: 3%;
  right: 3%;
}

.owl-nav button:focus {
  outline: none !important;
  box-shadow: none !important;
}

.owl-dots {
  align-items: center;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
}

.owl-dots .owl-dot {
  height: 14px;
  width: 14px;
  border-radius: 100px;
  background: #ffffff74 !important;
}

.owl-dots .owl-dot.active {
  background: #fcb320 !important;
  transition: background 0.3s ease-out;
}

.owl-dot:not(:last-child) {
  margin-right: 7px;
}

.header-carousel .owl-dots {
  left: unset;
  right: 5%;
}

.our-partners .owl-dots .owl-dot {
  background: #001a0b30 !important;
}

.our-partners .owl-dots .owl-dot.active {
  background: #fcb320 !important;
}

.ms-header--ctas {
  padding: 0;
}

.ms-header--ctas__container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.ms-header--ctas p:only-child {
  font-weight: 600;
  line-height: 1.6;
}

.ms-header--cta {
  width: calc(33.33% - 20px);
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  align-items: flex-start;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  background: #fcb320;
  min-height: 180px;
  position: relative;
  top: 0;
  transition: all 0.3s ease-out;
}

.ms-header--cta a {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.ms-header--cta.inverse {
  background: #00923f;
}

/* .ms-header--cta img {
  margin-bottom: 10px;
  height: 32px;
}

.ms-header--cta p {
  font-weight: 500;
  line-height: 1.4;
  color: #fff;
  font-size: 1rem;
  opacity: 1;
} */

.ms-header--cta img {
  margin-bottom: 10px;
  height: 32px;
  text-align: right;
}

.ms-header--cta h6 {
  font-weight: 600;
  line-height: 1.6;
  color: #fff;
  font-size: 0.875rem;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.ms-header--cta p {
  font-weight: 400;
  line-height: 1.6;
  color: #fff;
  font-size: 0.875rem;
  opacity: 1;
}

.ms-header--cta:hover {
  background: #001a0b;
  transition: all 0.3s ease-out;
  top: -10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
}
</style>

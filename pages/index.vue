<template>
  <div>
    <header class="ms-header">
      <div class="carousel-container">
        <span class="prev" @click="prevMenu">
          <img :src="getImage('arrow-left.svg')" alt="<" />
        </span>
        <div class="carousel">
          <carousel
            ref="slider"
            :per-page="1"
            :loop="true"
            :autoplay="false"
            :autoplay-timeout="6000"
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
                <h1 v-html="slide.text"></h1>
              </div>
            </slide>
          </carousel>
        </div>
        <span class="next" @click="nextMenu">
          <img :src="getImage('arrow-right.svg')" alt="<" />
        </span>
      </div>
    </header>
    <div class="ms-header--ctas ms-section">
      <el-container>
        <el-row type="flex" :gutter="40">
          <el-col :lg="8">
            <div class="ms-header--cta">
              <router-link to="/"></router-link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="31.5"
                viewBox="0 0 27 31.5"
              >
                <path
                  id="Icon_awesome-user-friends"
                  data-name="Icon awesome-user-friends"
                  d="M13.5,18a7.875,7.875,0,1,0-7.875-7.875A7.871,7.871,0,0,0,13.5,18Zm5.4,2.25h-.584a10.873,10.873,0,0,1-9.633,0H8.1A8.1,8.1,0,0,0,0,28.35v2.025A3.376,3.376,0,0,0,3.375,33.75h20.25A3.376,3.376,0,0,0,27,30.375V28.35A8.1,8.1,0,0,0,18.9,20.25Z"
                  transform="translate(0 -2.25)"
                  fill="#58bb8c"
                />
              </svg>
              <div>
                <h4>Individuals</h4>
                <p>Home for you</p>
              </div>
              <img :src="getImage('arrow-right.svg')" alt=">" />
            </div>
          </el-col>
          <el-col :lg="8">
            <div class="ms-header--cta">
              <router-link to="/"></router-link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="31.5"
                viewBox="0 0 45 31.5"
              >
                <path
                  id="Icon_awesome-user-friends"
                  data-name="Icon awesome-user-friends"
                  d="M13.5,18a7.871,7.871,0,1,0-5.57-2.305A7.875,7.875,0,0,0,13.5,18Zm5.4,2.25h-.584a10.873,10.873,0,0,1-9.633,0H8.1A8.1,8.1,0,0,0,0,28.35v2.025A3.376,3.376,0,0,0,3.375,33.75h20.25A3.376,3.376,0,0,0,27,30.375V28.35a8.1,8.1,0,0,0-8.1-8.1ZM33.75,18A6.75,6.75,0,1,0,27,11.25,6.75,6.75,0,0,0,33.75,18Zm3.375,2.25h-.267a8.867,8.867,0,0,1-6.216,0h-.267a7.81,7.81,0,0,0-3.916,1.083A10.29,10.29,0,0,1,29.25,28.35v2.7c0,.155-.035.3-.042.45H41.625A3.376,3.376,0,0,0,45,28.125a7.871,7.871,0,0,0-7.875-7.875Z"
                  transform="translate(0 -2.25)"
                  fill="#58bb8c"
                />
              </svg>
              <div>
                <h4>Group</h4>
                <p>Home for groups</p>
              </div>
              <img :src="getImage('arrow-right.svg')" alt=">" />
            </div>
          </el-col>
          <el-col :lg="8">
            <div class="ms-header--cta">
              <router-link to="/"></router-link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="27.01"
                viewBox="0 0 45 27.01"
              >
                <path
                  id="Icon_awesome-handshake"
                  data-name="Icon awesome-handshake"
                  d="M30.565,4.5h-6.04a2.249,2.249,0,0,0-1.519.591l-6.912,6.328c-.007.007-.014.021-.021.028a2.8,2.8,0,0,0-.148,3.938,2.933,2.933,0,0,0,3.945.19c.007-.007.021-.007.028-.014l5.618-5.147a1.125,1.125,0,0,1,1.519,1.659L25.2,13.753l10.237,8.311a5.066,5.066,0,0,1,.555.541V9L32.154,5.161A2.234,2.234,0,0,0,30.565,4.5ZM38.25,9.014V24.757a2.248,2.248,0,0,0,2.25,2.25H45V9.014Zm3.375,15.743a1.125,1.125,0,1,1,1.125-1.125A1.128,1.128,0,0,1,41.625,24.757ZM0,27H4.5a2.248,2.248,0,0,0,2.25-2.25V9.014H0Zm3.375-4.493A1.125,1.125,0,1,1,2.25,23.632,1.128,1.128,0,0,1,3.375,22.507Zm30.649,1.308-10.5-8.522-2.109,1.934a5.061,5.061,0,0,1-6.841-7.46L20.327,4.5H14.435a2.246,2.246,0,0,0-1.589.661L9,9V24.743h1.287L16.65,30.5a4.5,4.5,0,0,0,6.328-.654l.014-.014,1.259,1.09a2.613,2.613,0,0,0,3.677-.38l2.208-2.714.38.309a2.246,2.246,0,0,0,3.164-.33l.668-.823a2.254,2.254,0,0,0-.323-3.171Z"
                  transform="translate(0 -4.5)"
                  fill="#58bb8c"
                />
              </svg>

              <div>
                <h4>Partnership</h4>
                <p>Help us build</p>
              </div>
              <img :src="getImage('arrow-right.svg')" alt=">" />
            </div>
          </el-col>
        </el-row>
      </el-container>
    </div>
    <div class="ms-about ms-section">
      <div class="ms-section--heading">
        <h3>The NSHP</h3>
      </div>
      <el-container>
        <el-row type="flex" :gutter="80" align="middle">
          <el-col :lg="12">
            <div class="ms-about--content">
              <p>
                Becoming a homeowner in any part of Nigeria just became easier!
                The National Social Housing Programme (NSHP) allows you to
                become an instant homeowner with as low as
                <span class="strong">₦2,000,000 only</span> -
                <span class="italic">Beta house, beta life for everybody!</span>
              </p>
              <el-button type="primary">Learn More</el-button>
            </div>
          </el-col>
          <el-col :lg="12">
            <div class="ms-about--image">
              <img :src="getImage('map.svg')" alt="Map" />
            </div>
          </el-col>
        </el-row>
      </el-container>
    </div>
    <div class="ms-home--options ms-section">
      <div class="ms-section--heading">
        <h3>Home options you can buy</h3>
      </div>
      <el-container>
        <el-row type="flex" :gutter="80" align="middle">
          <el-col :lg="12">
            <div class="ms-home--options__content">
              <p>
                Here are some of the offers we would be making available for
                aspiring home owners throughout Nigeria.
              </p>
              <el-timeline>
                <el-timeline-item type="primary" color="#58bb8c" size="large"
                  ><h5>1 Bedroom for ₦2,000,000</h5></el-timeline-item
                >
                <el-timeline-item type="primary" color="#58bb8c" size="large"
                  ><h5>2 Bedroom for ₦2,750,000</h5></el-timeline-item
                >
              </el-timeline>
              <p>
                Flexible Mortgage Repayment with the<br />
                <span class="text-primary strong">LOWEST INTEREST</span> rates
                nationwide.
              </p>
            </div>
          </el-col>
          <el-col :lg="12">
            <div class="ms-home--options__image">
              <img
                :src="getImage(`home/${homeOption}-bedroom.jpg`)"
                alt="Map"
              />
              <el-radio-group v-model="homeOption">
                <el-radio-button label="one">1 Bedroom House</el-radio-button>
                <el-radio-button label="two">2 Bedroom House</el-radio-button>
              </el-radio-group>
            </div>
          </el-col>
        </el-row>
      </el-container>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import image from '../mixin/image'

export default {
  name: 'Home',
  components: {
    Carousel,
    Slide,
  },
  mixins: [image],
  data() {
    return {
      slides: [
        {
          text: 'Homes by Nigerians<br> for Nigerians',
          slide: '1-1',
        },
        {
          text: 'Own a home for<br> as low as ₦2million',
          slide: '2',
        },
        {
          text: 'Shikini money for<br> beta house',
          slide: '3',
        },
        {
          text: 'Owó Kekeré fun<br>ilé tò dàrá',
          slide: '4',
        },
        {
          text: 'Biyan kuɗi kaɗan<br> don gida mai kyau',
          slide: '5',
        },
        {
          text: 'Kwụ ụgwọ obere ego<br> maka ezigbo ụlọ',
          slide: '6',
        },
        {
          text: 'Beta work. Beta house.<br> Beta life for evribodi',
          slide: '2',
        },
      ],
      homeOption: 'one',
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
  height: 70vh;

  .carousel-container {
    padding: 0;
    width: 100%;
    height: 100%;
    position: relative;
    margin: auto;

    .carousel {
      width: 100%;
      height: 100%;
      margin: auto;
    }

    span {
      cursor: pointer;
      top: 50%;
      transform: translateY(-50%);
      position: absolute;
      z-index: 2;

      svg {
        height: 16px;
      }

      &.prev {
        left: 50px;
      }

      &.next {
        right: 50px;
      }
    }
  }

  .VueCarousel-inner {
    height: 100% !important;
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

    .slide-content {
      position: absolute;
      width: 50%;
      top: 60%;
      left: 16%;
      transform: translateY(-50%);
      text-align: left;
      color: #fff !important;
      opacity: 0;

      h1 {
        font-weight: 600;
        color: #fff;
        line-height: 1.4;
        margin: 0;
        text-shadow: 1px 1px #0b1207;
      }
    }

    &.VueCarousel-slide-active {
      img {
        animation: scale 10000ms ease-in-out forwards;
      }

      .slide-content {
        top: 50%;
        opacity: 1;
        transition: all 1s ease-out;
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
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.2) 54%,
    rgba(255, 255, 255, 0) 76%
  );
}

.ms-header--ctas {
  background: #f4faf7;
  padding: 50px 0;

  .ms-header--cta {
    position: relative;
    padding: 40px;
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.2s ease-in;
    border: 1px solid #0b120707;
    box-shadow: -4px 16px 30px rgba(0, 0, 0, 0.06);

    a {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 1;
    }

    svg {
      height: 45px;
      width: auto;
      margin-right: 20px;
    }

    h4 {
      color: #58bb8c;
      margin-bottom: 5px;
      font-size: 1.2rem;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }

    p {
      font-size: 1rem;
      color: #000;
    }

    img {
      position: absolute;
      right: 50px;
      bottom: 25px;
      opacity: 0;
      transition: all 0.2s ease-out;
    }

    &:hover {
      background: #58bb8c;
      transform: translateY(-4px);
      box-shadow: -4px 16px 30px rgba(0, 0, 0, 0.06);
      transition: all 0.2s ease-out;

      svg path {
        fill: #fff;
      }

      h4,
      p {
        color: #fff;
        transition: all 0.2s ease-out;
      }

      img {
        right: 30px;
        opacity: 1;
        transition: all 0.2s ease-out;
      }
    }
  }
}

.ms-about {
  .ms-about--image {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 280px;
      width: auto;
      animation: scale 7000ms ease-in-out forwards;
    }
  }
  .ms-about--content p {
    margin-bottom: 30px;
  }
}

.ms-home--options {
  .el-timeline {
    margin: 25px 0;
    .el-timeline-item:last-child {
      padding-bottom: 0;
    }
  }

  .ms-home--options__content {
    p:not(:last-child) {
      margin-bottom: 25px;
    }
  }
  .ms-home--options__image {
    text-align: center;

    img {
      height: auto;
      width: 100%;
      object-fit: cover;
      margin-bottom: 20px;
    }
  }
}
</style>

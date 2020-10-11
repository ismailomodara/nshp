<template>
  <div ref="home">
    <Navigation @scroll="scrollToSection" />
    <header class="ms-header">
      <div class="carousel-container">
        <span class="prev" @click="prevSlide">
          <img :src="getImage('arrow-left.svg')" alt="<" />
        </span>
        <div class="carousel">
          <carousel
            ref="slider"
            :per-page="1"
            :loop="true"
            :autoplay="true"
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
                <img
                  :src="getImage(`home/slider/${slide.slide}.jpg`)"
                  alt="NSHP"
                />
                <div class="overlay header-gradient"></div>
              </div>
              <div class="slide-content">
                <h1 v-html="slide.text"></h1>
                <el-button type="primary" @click="showVideoPlayer = true"
                  >Learn more <i class="el-icon-video-play"></i
                ></el-button>
              </div>
            </slide>
          </carousel>
        </div>
        <span class="next" @click="nextSlide">
          <img :src="getImage('arrow-right.svg')" alt="<" />
        </span>
      </div>
    </header>
    <div class="ms-header--ctas ms-section">
      <el-container>
        <el-row type="flex" :gutter="40" class="flex-wrap">
          <el-col :sm="24" :md="8" :lg="8">
            <div class="ms-header--cta individual">
              <a href="https://forms.gle/z1EFjHgu8ixfuLMJ9" target="_blank"></a>
              <div>
                <h4>Individuals</h4>
                <p>For all Nigerians seeking to own a home.</p>
              </div>
              <img :src="getImage('arrow-right.svg')" alt=">" />
            </div>
          </el-col>
          <el-col :sm="24" :md="8" :lg="8">
            <div class="ms-header--cta">
              <a href="https://forms.gle/PeR67odgT8ymMA3x7" target="_blank"></a>
              <div>
                <h4>Cooperatives</h4>
                <p>For Groups/ Cooperatives and their members.</p>
              </div>
              <img :src="getImage('arrow-right.svg')" alt=">" />
            </div>
          </el-col>
          <el-col :sm="24" :md="8" :lg="8">
            <div class="ms-header--cta">
              <a href="https://forms.gle/drnoRnYTpGWjpgLD7" target="_blank"></a>
              <div>
                <h4>Partnerships</h4>
                <p>For all Nigerian Professionals.</p>
              </div>
              <img :src="getImage('arrow-right.svg')" alt=">" />
            </div>
          </el-col>
          <el-col :sm="24" :md="8" :lg="8">
            <div class="ms-header--cta">
              <a href="https://forms.gle/tXpTZ8VqQUYWkGFS9" target="_blank"></a>
              <div>
                <h4>Contractor</h4>
                <p>Develop for us</p>
              </div>
              <img :src="getImage('arrow-right.svg')" alt=">" />
            </div>
          </el-col>
          <el-col :sm="24" :md="8" :lg="8">
            <div class="ms-header--cta">
              <a href="https://forms.gle/3w2sMuKyrBPQSs3b7" target="_blank"></a>
              <div>
                <h4>Consultants</h4>
                <p>Manage for us</p>
              </div>
              <img :src="getImage('arrow-right.svg')" alt=">" />
            </div>
          </el-col>
          <el-col :sm="24" :md="8" :lg="8">
            <div class="ms-header--cta">
              <a href="https://forms.gle/Ez4ZHhSkSEpRnTJM8" target="_blank"></a>
              <div>
                <h4>Manufacturers</h4>
                <p>Provide for us</p>
              </div>
              <img :src="getImage('arrow-right.svg')" alt=">" />
            </div>
          </el-col>
          <el-col :sm="24" :md="8" :lg="8">
            <div class="ms-header--cta">
              <a href="https://forms.gle/diZqKuMjxv5RaiBEA" target="_blank"></a>
              <div>
                <h4>Suppliers</h4>
                <p>Provide for us</p>
              </div>
              <img :src="getImage('arrow-right.svg')" alt=">" />
            </div>
          </el-col>
        </el-row>
      </el-container>
    </div>
    <div ref="about-us" class="ms-about ms-section">
      <div class="ms-section--heading">
        <h3>The NSHP</h3>
      </div>
      <el-container>
        <el-row
          type="flex"
          :gutter="40"
          justify="between"
          align="middle"
          class="flex-wrap"
        >
          <el-col :sm="24" :md="14" :lg="12">
            <div class="ms-about--content">
              <p>
                The National Social Housing Programme (NSHP) is the housing
                component of the President Muhammadu Buhari Economic
                Sustainability Plan to deliver affordable housing and millions
                of jobs for Nigerians.
              </p>
              <p>
                The National Social Housing Programme (NSHP) will allow you own
                a home, as an individual or part of a cooperative with as low as
                <span class="strong">₦2,000,000 only</span>. With NSHP, You can
                become a homeowner in any part of Nigeria easily! Beta house,
                beta life for everybody!
              </p>
            </div>
          </el-col>
          <el-col :sm="24" :md="10" :lg="12">
            <div class="ms-about--image">
              <img :src="getImage('map.svg')" alt="Map" />
            </div>
          </el-col>
        </el-row>
      </el-container>
    </div>
    <div class="ms-home--options ms-section">
      <div class="ms-section--heading">
        <h3>Available Home Options</h3>
      </div>
      <el-container>
        <el-row
          type="flex"
          :gutter="40"
          justify="between"
          align="middle"
          class="flex-wrap"
        >
          <el-col :sm="24" :md="12" :lg="12">
            <div class="ms-home--options__content">
              <p>
                Here are some of the offers we would be making available for
                aspiring home owners throughout Nigeria.
              </p>
              <el-timeline>
                <el-timeline-item type="primary" color="#58bb8c" size="large"
                  ><h6>1-Room for ₦2,000,000</h6></el-timeline-item
                >
                <el-timeline-item type="primary" color="#58bb8c" size="large"
                  ><h6>2-Room for ₦2,750,000</h6></el-timeline-item
                >
                <el-timeline-item type="primary" color="#58bb8c" size="large"
                  ><h6>3-Room for ₦3,500,000</h6></el-timeline-item
                >
              </el-timeline>
              <p>
                Flexible Mortgage Repayment with the
                <span class="text-primary strong">LOWEST INTEREST</span> rates
                nationwide.
              </p>
            </div>
          </el-col>
          <el-col :sm="24" :md="12" :lg="12">
            <div class="ms-home--options__image">
              <img
                v-if="homeOption === 'one'"
                :src="getImage('home/one-bedroom.jpg')"
                alt="Map"
              />
              <img
                v-else-if="homeOption === 'two'"
                :src="getImage('home/two-bedroom.jpg')"
                alt="Map"
              />
              <img
                v-else-if="homeOption === 'three'"
                :src="getImage('home/three-bedroom.jpeg')"
                alt="Map"
              />
              <el-radio-group v-model="homeOption">
                <el-radio-button label="one">1-Room House</el-radio-button>
                <el-radio-button label="two">2-Room House</el-radio-button>
                <el-radio-button label="three">3-Room House</el-radio-button>
              </el-radio-group>
            </div>
          </el-col>
        </el-row>
      </el-container>
    </div>
    <div class="ms-steps ms-section">
      <div class="ms-section--heading">
        <h3>3 simple steps to owning your home</h3>
      </div>
      <el-container>
        <el-row type="flex" :gutter="60" align="middle" class="flex-wrap mt-4">
          <el-col :sm="24" :md="8" :lg="8">
            <div class="ms-steps--step">
              <span>1</span>
              <h6 class="step-title">Apply</h6>
              <div class="step-image">
                <img
                  :src="getImage('home/register.svg')"
                  alt="Show interest for NSHP"
                />
              </div>
              <div class="step-content">
                <p>
                  You will be able to register and submit your application to
                  the NSHP in a simple manner.
                </p>
                <el-tag>Coming Soon</el-tag>
              </div>
            </div>
          </el-col>
          <el-col :sm="24" :md="8" :lg="8">
            <div class="ms-steps--step inverse">
              <span>2</span>
              <h6 class="step-title">Qualify</h6>
              <div class="step-image">
                <img
                  :src="getImage('home/selection.svg')"
                  alt="Get Selected for NSHP"
                />
              </div>
              <div class="step-content">
                <p>
                  All applicants will be subject to a competitive qualification
                  process that will be fair and transparent.
                </p>
                <el-tag>Coming Soon</el-tag>
              </div>
            </div>
          </el-col>
          <el-col :sm="24" :md="8" :lg="8">
            <div class="ms-steps--step">
              <span>3</span>
              <h6 class="step-title">Own</h6>
              <div class="step-image">
                <img
                  :src="getImage('home/own.svg')"
                  alt="Get Selected for NSHP"
                />
              </div>
              <div class="step-content">
                <p>
                  Qualified homeowners will make contributions towards their
                  homes while awaiting delivery.
                </p>
                <el-tag>Coming Soon</el-tag>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-container>
    </div>
    <div ref="faq" class="ms-find-out--more ms-section">
      <div class="ms-section--heading">
        <h3>Find out more</h3>
      </div>
      <el-container>
        <el-row
          type="flex"
          :gutter="60"
          justify="between"
          align="middle"
          class="flex-wrap mt-4"
        >
          <el-col :sm="24" :md="10" :lg="9">
            <div class="faq">
              <img :src="getImage('home/faqs.svg')" alt="FAQ" />
            </div>
          </el-col>
          <el-col :sm="24" :md="14" :lg="15">
            <el-collapse v-model="activeName" accordion>
              <el-collapse-item title="How does it work?" name="1">
                <div>
                  <p>
                    We have put in place a seamless process in three simple
                    steps
                  </p>
                  <ul>
                    <li>Show Interest</li>
                    <li>Selection</li>
                    <li>Own</li>
                  </ul>
                  <el-button type="primary" size="small"
                    >Find out more</el-button
                  >
                </div>
              </el-collapse-item>
              <el-collapse-item
                title="Who is eligible/qualifies to own a home on the NSHP?"
                name="2"
                class="inverse"
              >
                <div>
                  <p>
                    To be eligible to own a home, you must fulfil the following
                    criteria:
                  </p>
                  <ul>
                    <li>Be a Nigerian citizen.</li>
                    <li>Be over 18 years of age.</li>
                    <li>Have a valid national identity card.</li>
                    <li>
                      You must then complete your profile by submitting your
                      personal details, housing preferences (the type of house
                      you are applying for).
                    </li>
                  </ul>
                </div>
              </el-collapse-item>
              <el-collapse-item
                title="How long will it take for me to get an allocation?"
                name="3"
              >
                <div>
                  <p>
                    There is no fixed time. NSHP is committed to giving you an
                    allocation as soon as you save at least 25% of the cost of
                    your house.
                  </p>
                  <p>
                    This means that if the current price of your home is
                    ₦3,000,000, you will be required to have saved a minimum of
                    ₦750,000 before you are allocated a house.
                  </p>
                  <p>
                    The quicker the minimum savings is reached, the quicker the
                    allocation.
                  </p>
                </div>
              </el-collapse-item>
            </el-collapse>
          </el-col>
        </el-row>
      </el-container>
    </div>
    <div ref="contact" class="ms-contact--via ms-section">
      <div class="ms-section--heading">
        <h3>Contact us</h3>
      </div>
      <el-container>
        <el-row type="flex" :gutter="20" align="middle" class="flex-wrap">
          <el-col :sm="12" :lg="12">
            <div class="contact-via">
              <img :src="getImage('contact/social.svg')" alt="Home" />
              <div>
                <p>Follow us on via</p>

                <div>
                  <a
                    href="https://www.facebook.com/pages/category/Public---Government-Service/NSHP-104148954758836/"
                    class="ms-social"
                    target="_blank"
                    ><img :src="getImage('contact/facebook.svg')" alt=""
                  /></a>
                  <a
                    href="https://mobile.twitter.com/nshp_ng"
                    class="ms-social"
                    target="_blank"
                    ><img :src="getImage('contact/twitter.svg')" alt=""
                  /></a>
                  <!--                  <a href="#" class="ms-social"-->
                  <!--                    ><img src="assets/img/contact/youtube.svg" alt=""-->
                  <!--                  /></a>-->
                  <a
                    href="https://www.instagram.com/nshp_ng/"
                    class="ms-social"
                    target="_blank"
                    ><img :src="getImage('contact/instagram-c.svg')" alt=""
                  /></a>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :sm="12" :lg="12">
            <div class="contact-via">
              <img :src="getImage('home/email.svg')" alt="Home" />
              <div>
                <p>Send us an email today</p>
                <a href="mailto:hello@nshp.ng" target="_blank"
                  ><el-button type="primary" class="el-button--secondary"
                    >Send</el-button
                  ></a
                >
              </div>
            </div>
          </el-col>
        </el-row>
      </el-container>
    </div>
    <div ref="partners">
      <MsPartners />
    </div>
    <div ref="news" class="ms-all--news ms-section">
      <div class="ms-section--heading">
        <h3>News</h3>
      </div>
      <el-container>
        <el-row type="flex" class="flex-wrap" :gutter="40">
          <el-col
            v-for="(news, i) in allNews"
            :key="i"
            :sm="24"
            :md="12"
            :lg="12"
          >
            <news-card :news="news" />
          </el-col>
        </el-row>
      </el-container>
    </div>
    <Footer @scroll="scrollToSection" />
    <video-player :show.sync="showVideoPlayer" />
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import Navigation from '../components/Navigation'
import MsPartners from '../components/MsPartners'
import NewsCard from '../components/NewsCard'
import Footer from '../components/Footer'
import VideoPlayer from '../components/VideoPlayer'

import image from '../mixin/image'
import newsContent from './news/NewsContent'

export default {
  name: 'Home',
  components: {
    Carousel,
    Slide,
    Navigation,
    MsPartners,
    NewsCard,
    Footer,
    VideoPlayer,
  },
  mixins: [image],
  data() {
    return {
      slides: [
        {
          text: '300,000 Homes<br> for Nigerians by Nigerians.',
          slide: 'homes_for_nigerians_by_nigerians',
        },
        {
          text: 'Own your home for<br> as low as ₦2 million.',
          slide: 'own_a_home',
        },
        {
          text: 'Homes are available<br>from ₦2 million.',
          slide: 'shikini_money_for_beta_house',
        },
        {
          text: 'Pay small small,<br> evri month, for your house.',
          slide: 'owokekere_fun_ile_to_dara',
        },
        {
          text: 'Homes for Individuals,<br>Cooperatives & Groups',
          slide: 'biyan_kudi_kadan',
        },
        {
          text: '1,800,000 Jobs<br>for Nigerians.',
          slide: 'kwu_ugwo_obere_ego',
        },
        {
          text: 'Beta Work, Beta House,<br> Beta Life for evribody.',
          slide: 'beta_work_beta_house',
        },
      ],
      showVideoPlayer: false,
      homeOption: 'one',
      activeName: '',
    }
  },
  computed: {
    allNews() {
      return newsContent
    },
  },
  mounted() {
    document
      .querySelectorAll('.VueCarousel-slide')[0]
      .classList.add('VueCarousel-slide-active')
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 39) {
        this.nextSlide()
      } else if (e.keyCode === 37) {
        this.prevSlide()
      }
    })
  },
  methods: {
    scrollToSection(section) {
      this.$refs[section].scrollIntoView({ behavior: 'smooth', alignTo: true })
    },
    nextSlide() {
      this.$refs.slider.goToPage(this.$refs.slider.getNextPage())
    },
    prevSlide() {
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
  height: 80vh;

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
    align-items: center;
  }

  .VueCarousel-slide {
    position: relative;

    .slide-image {
      position: relative;
      height: 80vh;
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
        margin: 0 0 20px;
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

.ms-header--ctas {
  background: #f4faf7;
  padding: 50px 0;

  .el-container {
    justify-content: center;
  }

  .el-row {
    width: 100%;
  }

  .ms-header--cta {
    margin-bottom: 30px;
    position: relative;
    padding: 40px 30px;
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
      margin-right: 20px;
      height: 55px;
      width: auto;

      &.partnership {
        height: 45px;
      }

      path {
        fill: #58bb8c !important;
      }
    }

    h4 {
      color: #58bb8c;
      margin-bottom: 5px;
      font-size: 1.1rem;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }

    p {
      font-size: 0.875rem;
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
        fill: #fff !important;
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
    justify-content: flex-end;
    align-items: center;

    img {
      height: 320px;
      width: auto;
    }
  }
  .ms-about--content p {
    margin-bottom: 30px;
    text-align: justify;
  }
}

.ms-home--options {
  background: #f4faf7;

  .el-timeline {
    margin: 25px 0;

    h6 {
      font-weight: 500;
    }

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
    height: 100%;
    width: 100%;

    img {
      height: 400px;
      width: 100%;
      object-fit: cover;
      margin-bottom: 20px;
      border-radius: 8px;
      box-shadow: -4px 16px 30px rgba(0, 0, 0, 0.06);
    }
  }
}

.ms-steps {
  .ms-steps--step {
    border: 1px solid #0b120710;
    border-radius: 8px;
    padding: 40px;
    position: relative;
    text-align: center;

    > span {
      height: 32px;
      width: 32px;
      border-radius: 100px;
      border: 5px solid #fff;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -21px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #58bb8c;
      color: #fff;
      font-weight: 600;
      margin-right: 15px;
      font-size: 1rem;
    }

    .step-title {
      text-align: center;
      margin-bottom: 20px;
      color: #58bb8c;
      font-weight: 600;
    }

    .step-image {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 120px;

      img {
        width: auto;
        height: 90px;
        object-fit: contain;
        transform: rotate(0deg);
        transition: transform 0.2s ease-in;
      }
    }

    .step-content p {
      line-height: 1.8;
      font-size: 0.75rem;
      margin-bottom: 15px;
      text-align: center;
      opacity: 1;
    }

    &.inverse {
      > span {
        background: #fcb320;
      }

      .step-title {
        color: #fcb320;
      }
    }
    &:hover {
      border-color: #fcb320;
      transition: border 0.2s ease-out;

      .step-image img {
        animation: wobble 0.3s ease-in-out forwards;
      }
    }
  }
}

@keyframes wobble {
  to {
    transform: rotate(10deg);
  }
}

.ms-find-out--more {
  background: #fafcfc;

  .el-row {
    width: 100%;
  }

  .faq {
    text-align: center;
    height: 100%;
    width: 100%;

    h6 {
      font-size: 0.875rem;
      text-align: center;
      font-weight: 500;
      margin-bottom: 30px;
    }

    img {
      height: 100%;
      width: 100%;
      margin-bottom: 10px;
    }
  }
}

.ms-contact--via {
  .el-row {
    width: 100%;
  }

  .contact-via {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 70px;
    }

    > img {
      width: 120px;
      height: auto;
    }

    > div {
      margin-left: 30px;
      text-align: left;

      p {
        margin-bottom: 10px;
        display: flex;
        align-items: center;

        span {
          img {
            margin: 0 5px;
            height: 22px;
            position: relative;
            top: 3px;
          }
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .ms-header--ctas {
    .ms-header--cta {
      padding: 40px 30px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 15px;

      svg {
        margin-right: 0 !important;
        margin-bottom: 10px;
        height: 32px;

        &.partnership {
          height: 30px;
        }
      }

      div {
        text-align: center;
      }
    }
  }

  .ms-about .ms-about--image {
    img {
      height: 280px !important;
      margin-top: 0px;
    }
  }

  .ms-home--options .ms-home--options__image img {
    height: 300px;
  }
}

@media (max-width: 992px) {
  .ms-header {
    height: 70vh !important;

    h1 {
      font-size: 2.5rem !important;
    }

    .slide-image {
      height: 70vh !important;
    }
  }
  .ms-header--ctas {
    .ms-header--cta {
      flex-direction: row !important;
      justify-content: flex-start;

      svg {
        height: 42px !important;
        margin-right: 30px !important;
        margin-bottom: 0 !important;
      }

      &.individual svg {
        margin-right: 50px !important;
      }

      div {
        text-align: left !important;
      }
    }
  }

  .ms-about .ms-about--image {
    justify-content: center;

    img {
      height: 250px !important;
      margin-top: 70px;
    }
  }

  .contact-via {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    > div {
      margin: 0;
      text-align: center !important;
    }
  }
}

@media (max-width: 1024px) {
  .ms-steps {
    .el-row {
      flex-direction: column;

      .el-col-md-8 {
        width: 100% !important;
      }
    }
  }
}

@media (max-width: 600px) {
  .ms-header {
    height: 80vh !important;

    .slide-image {
      height: 80vh !important;
    }

    h1 {
      text-align: center;
      font-size: 2.2rem !important;
    }

    .slide-content {
      text-align: center !important;
      left: 50% !important;
      transform: translate(-50%, -50%) !important;
    }

    .carousel-container span {
      top: 91% !important;

      &.next {
        right: 20px !important;
      }

      &.prev {
        left: 20px !important;
      }
    }
  }

  .ms-header--ctas {
    .el-row {
      width: 100%;
    }

    .ms-header--cta {
      padding: 30px !important;

      &.individual svg {
        margin-right: 30px !important;
      }

      svg {
        height: 36px !important;
        margin-right: 20px !important;

        &.partnership {
          height: 30px !important;
        }
      }
    }
  }

  .ms-home--options__image img {
    height: 250px !important;
  }

  .el-radio-button__inner {
    font-size: 13px !important;
  }

  .ms-steps {
    .ms-steps--step {
      text-align: center;
      flex-direction: column !important;

      > span {
        border: 5px solid #fff;
        position: absolute;
        left: 50% !important;
        transform: translateX(-50%) !important;
        top: -21px !important;
      }

      .step-title {
        text-align: center;
        margin-bottom: 20px;
        color: #58bb8c;
        font-weight: 600;
      }

      .step-image {
        height: 120px;
        margin: 0;
        position: relative !important;

        img {
          height: 90px;
          position: relative !important;
        }
      }

      .step-content {
        text-align: center;

        p {
          font-size: 1rem;
        }
      }

      &.inverse {
        > span {
          background: #fcb320;
        }

        .step-title {
          color: #fcb320;
        }
      }
      &:hover {
        border-color: #fcb320;
        transition: border 0.2s ease-out;

        .step-image img {
          animation: wobble 0.3s ease-in-out forwards;
        }
      }
    }
  }

  .contact-via {
    margin-bottom: 50px;
  }

  .ms-find-out--more .el-row {
    width: unset;
  }
}

.ms-news {
  padding-bottom: 80px;
}
</style>

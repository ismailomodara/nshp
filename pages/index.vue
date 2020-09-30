<template>
  <div>
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
                <img :src="url(slide.slide)" alt="NSHP" />
                <div class="overlay header-gradient"></div>
              </div>
              <div class="slide-content">
                <h1 v-html="slide.text"></h1>
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
        <el-row type="flex" :gutter="40" justify="center" class="flex-wrap">
          <el-col :sm="24" :md="8" :lg="8">
            <div class="ms-header--cta individual">
              <a href="https://assessment.nshp.ng/individual"></a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="91"
                height="91"
                viewBox="0 0 91 91"
              >
                <defs>
                  <style>
                    .b {
                      fill: #58bb8c !important;
                    }
                  </style>
                </defs>
                <g transform="translate(21558 8189)">
                  <path
                    class="b"
                    d="M30.389,34.73A17.365,17.365,0,1,0,13.024,17.365,17.364,17.364,0,0,0,30.389,34.73Zm12.156,4.341H40.279a23.616,23.616,0,0,1-19.78,0H18.233A18.238,18.238,0,0,0,0,57.305v5.644a6.514,6.514,0,0,0,6.512,6.512H54.266a6.514,6.514,0,0,0,6.512-6.512V57.305A18.238,18.238,0,0,0,42.545,39.072Z"
                    transform="translate(-21543 -8178)"
                  />
                </g>
              </svg>
              <div>
                <h4>Individuals</h4>
                <p>A home for You</p>
              </div>
              <img :src="getImage('arrow-right.svg')" alt=">" />
            </div>
          </el-col>
          <el-col :sm="24" :md="8" :lg="8">
            <div class="ms-header--cta">
              <a href="https://assessment.nshp.ng/co-operatives"></a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="91"
                height="91"
                viewBox="0 0 91 91"
              >
                <defs>
                  <style>
                    .b {
                      fill: #58bb8c !important;
                    }
                  </style>
                </defs>
                <g transform="translate(21558 8189)">
                  <path
                    class="b"
                    d="M29.786,37A17.375,17.375,0,1,0,12.411,19.625,17.366,17.366,0,0,0,29.786,37ZM41.7,41.964H40.412a23.989,23.989,0,0,1-21.253,0H17.871A17.876,17.876,0,0,0,0,59.835V64.3A7.448,7.448,0,0,0,7.446,71.75H52.125A7.448,7.448,0,0,0,59.571,64.3V59.835A17.876,17.876,0,0,0,41.7,41.964ZM63.464,37A14.893,14.893,0,1,0,48.571,22.107,14.9,14.9,0,0,0,63.464,37Zm7.446,4.964h-.59a19.563,19.563,0,0,1-13.714,0h-.59a17.231,17.231,0,0,0-8.641,2.389,22.7,22.7,0,0,1,6.159,15.482v5.957c0,.341-.078.667-.093.993h27.4a7.448,7.448,0,0,0,7.446-7.446A17.366,17.366,0,0,0,70.91,41.964Z"
                    transform="translate(-21556.143 -8180.25)"
                  />
                </g>
              </svg>
              <div>
                <h4>Cooperatives</h4>
                <p>Homes for groups</p>
              </div>
              <img :src="getImage('arrow-right.svg')" alt=">" />
            </div>
          </el-col>
          <el-col :sm="24" :md="8" :lg="8">
            <div class="ms-header--cta">
              <router-link to="/partners"></router-link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="91"
                height="91"
                viewBox="0 0 91 91"
              >
                <defs>
                  <style>
                    .b {
                      fill: #58bb8c !important;
                    }
                  </style>
                </defs>
                <g transform="translate(21558 8189)">
                  <path
                    class="b"
                    d="M53.568,4.5H42.983a3.942,3.942,0,0,0-2.662,1.035L28.207,16.626c-.012.012-.025.037-.037.049a4.9,4.9,0,0,0-.259,6.9,5.14,5.14,0,0,0,6.913.333c.012-.012.037-.012.049-.025l9.846-9.02a1.971,1.971,0,0,1,2.662,2.908l-3.216,2.945L62.108,35.283a8.878,8.878,0,0,1,.974.949V12.387L56.353,5.658A3.915,3.915,0,0,0,53.568,4.5Zm13.469,7.911V40a3.939,3.939,0,0,0,3.943,3.943h7.887V12.411ZM72.952,40a1.972,1.972,0,1,1,1.972-1.972A1.977,1.977,0,0,1,72.952,40ZM0,43.934H7.887A3.939,3.939,0,0,0,11.83,39.99V12.411H0Zm5.915-7.874a1.972,1.972,0,1,1-1.972,1.972A1.977,1.977,0,0,1,5.915,36.059Zm53.716,2.292-18.4-14.935-3.7,3.389A8.87,8.87,0,0,1,25.546,13.73L35.626,4.5H25.3a3.936,3.936,0,0,0-2.785,1.158l-6.741,6.728V39.978h2.255L29.181,50.07a7.885,7.885,0,0,0,11.091-1.146L40.3,48.9,42.5,50.81a4.58,4.58,0,0,0,6.445-.665l3.869-4.757.665.542a3.937,3.937,0,0,0,5.545-.579L60.2,43.909a3.95,3.95,0,0,0-.567-5.558Z"
                    transform="translate(-21551.934 -8171.664)"
                  />
                </g>
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
        <el-row type="flex" :gutter="80" align="middle" class="flex-wrap">
          <el-col :sm="24" :md="14" :lg="12">
            <div class="ms-about--content">
              <p>
                Becoming a homeowner in any part of Nigeria just became easier!
                The National Social Housing Programme (NSHP) allows you to
                become an instant homeowner with as low as
                <span class="strong">₦2,000,000 only</span> -
                <span class="italic">Beta house, beta life for everybody!</span>
              </p>
              <el-button type="primary" @click="$router.push('/about-us')"
                >Learn More</el-button
              >
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
        <h3>Home options you can buy</h3>
      </div>
      <el-container>
        <el-row type="flex" :gutter="80" align="middle" class="flex-wrap">
          <el-col :sm="24" :md="12" :lg="12">
            <div class="ms-home--options__content">
              <p>
                Here are some of the offers we would be making available for
                aspiring home owners throughout Nigeria.
              </p>
              <el-timeline>
                <el-timeline-item type="primary" color="#58bb8c" size="large"
                  ><h6>1 Bedroom for ₦2,000,000</h6></el-timeline-item
                >
                <el-timeline-item type="primary" color="#58bb8c" size="large"
                  ><h6>2 Bedroom for ₦2,750,000</h6></el-timeline-item
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
              <el-radio-group v-model="homeOption">
                <el-radio-button label="one">1 Bedroom House</el-radio-button>
                <el-radio-button label="two">2 Bedroom House</el-radio-button>
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
              <h6 class="step-title">Register</h6>
              <div class="step-image">
                <img
                  :src="getImage('home/register.svg')"
                  alt="Show interest for NSHP"
                />
              </div>
              <div class="step-content">
                <p>
                  Complete your profile by submitting your personal details and
                  required documents.
                </p>
                <a href="https://assessment.nshp.ng/individual"
                  ><el-button type="primary">I'm interested </el-button></a
                >
              </div>
            </div>
          </el-col>
          <el-col :sm="24" :md="8" :lg="8">
            <div class="ms-steps--step inverse">
              <span>2</span>
              <h6 class="step-title">Selection</h6>
              <div class="step-image">
                <img
                  :src="getImage('home/selection.svg')"
                  alt="Get Selected for NSHP"
                />
              </div>
              <div class="step-content">
                <p>
                  A unique identification number will be assigned to you for the
                  house allocation.
                </p>
                <el-button
                  class="el-button--secondary"
                  @click="$router.push('/about-us')"
                  >Read more</el-button
                >
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
                  Houses will be distributed to applicants as soon as
                  construction begins
                </p>
                <el-badge value="Coming soon" class="item">
                  <el-button type="primary">Start here</el-button>
                </el-badge>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-container>
    </div>
    <div class="ms-find-out--more ms-section">
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
    <div class="ms-contact--via ms-section">
      <div class="ms-section--heading">
        <h3>Contact us</h3>
      </div>
      <el-container>
        <el-row type="flex" :gutter="20" align="middle" class="flex-wrap">
          <el-col :sm="12" :lg="12">
            <div class="contact-via">
              <img :src="getImage('home/whatsapp.svg')" alt="Home" />
              <div>
                <p>Message via WhatsApp</p>
                <a href="https://linktr.ee/nshp.ng"
                  ><el-button type="primary">Message</el-button></a
                >
              </div>
            </div>
          </el-col>
          <el-col :sm="12" :lg="12">
            <div class="contact-via">
              <img :src="getImage('home/email.svg')" alt="Home" />
              <div>
                <p>Send us an email today</p>
                <a href="mailto:hello@nshp.ng"
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
    <ms-partners />
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import MsPartners from '../components/MsPartners'

import image from '../mixin/image'

export default {
  name: 'Home',
  components: {
    Carousel,
    Slide,
    MsPartners,
  },
  mixins: [image],
  data() {
    return {
      slides: [
        {
          text: 'Homes by Nigerians<br> for Nigerians',
          slide: '1',
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
          slide: '7',
        },
      ],
      homeOption: 'one',
      activeName: '',
    }
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
  height: 60vh;

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
      height: 60vh;
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
      height: 50px;
      width: auto;
      margin-right: 20px;

      path {
        fill: #58bb8c !important;
      }
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
    justify-content: center;
    align-items: center;

    img {
      height: 280px;
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
      height: 80%;
      width: 80%;
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

    span {
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
      span {
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

    img {
      width: 120px;
      height: auto;
    }

    div {
      margin-left: 20px;
      text-align: left;

      p {
        margin-bottom: 10px;
        span {
          img {
            height: 22px;
            position: relative;
            top: 3px;
          }
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .ms-header {
    height: 70vh !important;

    h1 {
      font-size: 2.5rem !important;
    }

    .slide-image img {
      height: 70vh !important;
    }
  }
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

  .ms-about .ms-about--image img {
    height: 220px !important;
    margin-top: 70px;
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
        height: 28px !important;
        margin-right: 20px !important;
      }
    }
  }

  .ms-home--options__image img {
    width: 300px !important;
  }

  .el-radio-button__inner {
    font-size: 13px !important;
  }

  .ms-steps {
    .ms-steps--step {
      text-align: center;
      flex-direction: column !important;

      span {
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
        span {
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
}
</style>

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
        <span class="next" @click="nextMenu">
          <img :src="getImage('arrow-right.svg')" alt="<" />
        </span>
      </div>
    </header>
    <div class="ms-header--ctas ms-section">
      <el-container>
        <el-row type="flex" :gutter="40" justify="center" class="flex-wrap">
          <el-col :sm="24" :md="8" :lg="8">
            <div class="ms-header--cta individual">
              <a href="https://register.nshp.ng/individual"></a>
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
                <p>A home for You</p>
              </div>
              <img :src="getImage('arrow-right.svg')" alt=">" />
            </div>
          </el-col>
          <el-col :sm="24" :md="8" :lg="8">
            <div class="ms-header--cta">
              <a href="https://register.nshp.ng/co-operatives"></a>
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
                <a href="https://register.nshp.ng/individual"
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
                <el-badge value="Soon" class="item">
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
                    NGN 750,000 before you are allocated a house.
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

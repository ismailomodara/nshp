<template>
  <div>
    <header class="ms-header--other">
      <div class="ms-header--other__bg">
        <img :src="getImage('contact/contact-header.jpg')" alt="About NSHP" />
      </div>
      <el-container>
        <div class="ms-header--other__content">
          <h1>Contact Us</h1>
          <video-cta />
        </div>
      </el-container>
      <div class="overlay header-gradient"></div>
    </header>
    <div class="ms-contact--via ms-section">
      <div class="ms-section--heading">
        <h3>Reach out to us</h3>
      </div>
      <el-container>
        <el-row type="flex" :gutter="20">
          <el-col :xs="24" :sm="12" :md="12" :lg="12">
            <div class="contact-via">
              <img :src="getImage('contact/social.svg')" alt="Home" />
              <div>
                <p>Follow us on our social platforms</p>
                <div>
                  <a
                    href="https://www.facebook.com/pages/category/Public---Government-Service/NSHP-104148954758836/"
                    class="ms-social"
                    target="_blank"
                    ><img
                      :src="getImage('contact/facebook.svg')"
                      alt="Facebook"
                  /></a>
                  <a
                    href="https://mobile.twitter.com/nshp_ng"
                    class="ms-social"
                    target="_blank"
                    ><img :src="getImage('contact/twitter.svg')" alt="Twitter"
                  /></a>
                  <!--                  <a href="#" class="ms-social"-->
                  <!--                    ><img src="assets/img/contact/youtube.svg" alt=""-->
                  <!--                  /></a>-->
                  <a
                    href="https://www.instagram.com/nshp_ng/"
                    class="ms-social"
                    target="_blank"
                    ><img
                      :src="getImage('contact/instagram-c.svg')"
                      alt="Instagram"
                  /></a>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12">
            <div class="contact-via">
              <img :src="getImage('home/email.svg')" alt="Home" />
              <div>
                <p>Send us a mail via</p>
                <a href="mailto:hello@nshp.gov.ng" target="_blank"
                  >hello@nshp.gov.ng</a
                >
              </div>
            </div>
          </el-col>
        </el-row>
      </el-container>
    </div>
  </div>
</template>

<script>
import image from '../mixin/image'

export default {
  name: 'Contact',
  mixins: [image],
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
      },
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.ms-contact--via {
  .el-row {
    width: 100%;
  }

  .contact-via {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 70px;
    }

    .ms-social:not(:last-child) {
      margin-right: 15px;
    }
    img {
      width: auto;
      height: 120px;
      margin-bottom: 20px;
    }

    > div {
      text-align: center;

      a {
        color: #58bb8c;
        font-weight: 600;
      }

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

.ms-social {
  img {
    height: 36px !important;
    width: 36px !important;
  }
}

@media (max-width: 1024px) {
  .ms-contact--methods {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .ms-contact--via .el-row {
    flex-direction: column;
  }
}

@media (max-width: 600px) {
  .ms-contact--methods {
    flex-direction: column;
  }

  .el-form {
    margin-top: 40px;
  }
}
</style>

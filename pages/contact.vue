<template>
  <div>
    <header class="ms-header--other">
      <div class="ms-header--other__bg">
        <img :src="getImage('home/slider/slide-2.jpg')" alt="About NSHP" />
      </div>
      <el-container>
        <div class="ms-header--other__content">
          <h1>Contact Us</h1>
        </div>
      </el-container>
      <div class="overlay header-gradient"></div>
    </header>
    <div class="ms-contact--via ms-section">
      <div class="ms-section--heading">
        <h3>Reach out to us</h3>
      </div>
      <el-container>
        <el-row type="flex" :gutter="20" align="middle">
          <el-col :lg="12">
            <div class="ms-contact--methods">
              <div class="contact-via">
                <img :src="getImage('home/whatsapp.svg')" alt="Home" />
                <div>
                  <p>Message via WhatsApp</p>
                  <el-button type="primary">Message</el-button>
                </div>
              </div>
              <div class="contact-via">
                <img :src="getImage('contact/social.svg')" alt="Home" />
                <div>
                  <p>Follow us on our social platforms</p>
                  <div>
                    <a
                      href="https://www.facebook.com/pages/category/Public---Government-Service/NSHP-104148954758836/"
                      class="ms-social"
                      ><img :src="getImage('contact/facebook.svg')" alt=""
                    /></a>
                    <a
                      href="https://mobile.twitter.com/nshp_ng"
                      class="ms-social"
                      ><img :src="getImage('contact/twitter.svg')" alt=""
                    /></a>
                    <!--                  <a href="#" class="ms-social"-->
                    <!--                    ><img src="assets/img/contact/youtube.svg" alt=""-->
                    <!--                  /></a>-->
                    <a
                      href="https://www.instagram.com/nshp_ng/"
                      class="ms-social"
                      ><img :src="getImage('contact/instagram.svg')" alt=""
                    /></a>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :lg="12">
            <el-form :model="form" label-position="top">
              <el-row type="flex">
                <el-col :lg="24">
                  <el-form-item label="FULL NAME">
                    <el-input v-model="form.name" type="text" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row type="flex">
                <el-col :lg="12">
                  <el-form-item label="EMAIL">
                    <el-input v-model="form.email" type="text" />
                  </el-form-item>
                </el-col>
                <el-col :lg="12">
                  <el-form-item label="PHONE NUMBER">
                    <el-input v-model="form.phone" type="text" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row type="flex">
                <el-col :lg="24">
                  <el-form-item label="INTEREST">
                    <el-select
                      v-model="form.interest"
                      placeholder="Select your interest"
                    >
                      <el-option
                        label="Home for Individuals"
                        value="individual"
                      />
                      <el-option
                        label="Home for Cooperative"
                        value="cooperative"
                      />
                      <el-option label="Becoming a Partner" value="partner" />
                      <el-option label="Becoming a Supplier" value="supplier" />
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row type="flex">
                <el-col :lg="24">
                  <el-form-item label="MESSAGE">
                    <el-input v-model="form.message" type="textarea" rows="4" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-button type="primary">Submit</el-button>
            </el-form>
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

    img {
      width: auto;
      height: 120px;
    }

    > div {
      text-align: center;

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

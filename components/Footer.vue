<template>
  <footer class="ms-footer">
    <img
      class="footer-illustration"
      :src="getImage('footer-svg.png')"
      alt="."
    />
    <el-container>
      <el-row type="flex" :gutter="10" class="flex-wrap">
        <el-col :sm="24" :md="12" :lg="12">
          <div class="footer-logo">
            <img
              :src="getImage('partners/nesp.png')"
              alt="NESP"
              loading="lazy"
            />
            <img :src="getImage('nshp-logo.svg')" alt="NSHP" loading="lazy" />
          </div>
          <p>
            NSHP will provide low cost homes through alternative financing
            options in all states in Nigeria and the FCT.
          </p>
        </el-col>
        <el-col :sm="24" :md="12" :lg="12">
          <div class="ms-footer--actions">
            <h5>Quick Links</h5>
            <ul class="ms-footer-links">
              <li><nuxt-link to="/about-nshp">About NSHP</nuxt-link></li>
              <li><nuxt-link to="/partnerships"> Partnerships </nuxt-link></li>
              <li><nuxt-link to="/news">News</nuxt-link></li>
              <li><nuxt-link to="/faq">FAQs</nuxt-link></li>
              <li>
                <nuxt-link to="/privacy-policy">Privacy policy</nuxt-link>
              </li>
              <li><nuxt-link to="/terms-of-use">Terms of Use</nuxt-link></li>
              <li><nuxt-link to="/contact">Contact Us</nuxt-link></li>
            </ul>
          </div>
          <div class="ms-footer--actions">
            <h5>Follow Us on</h5>
            <div class="ms-social--links">
              <a
                href="https://www.facebook.com/pages/category/Public---Government-Service/NSHP-104148954758836/"
                target="_blank"
                class="ms-footer-social facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                >
                  <g
                    id="Group_267"
                    data-name="Group 267"
                    transform="translate(-1150 -8981)"
                  >
                    <circle
                      id="Ellipse_29"
                      data-name="Ellipse 29"
                      cx="25"
                      cy="25"
                      r="25"
                      transform="translate(1150 8981)"
                      fill="#fff"
                      opacity="0.091"
                    />
                    <path
                      id="Icon_awesome-facebook-f"
                      data-name="Icon awesome-facebook-f"
                      d="M10.925,10.47,11.442,7.1H8.21V4.915a1.684,1.684,0,0,1,1.9-1.82h1.469V.228A17.919,17.919,0,0,0,8.97,0c-2.662,0-4.4,1.613-4.4,4.534V7.1H1.609V10.47H4.568v8.143H8.21V10.47Z"
                      transform="translate(1167.975 8996.693)"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </a>
              <a
                href="https://mobile.twitter.com/nshp_ng"
                target="_blank"
                class="ms-footer-social twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                >
                  <g
                    id="Group_268"
                    data-name="Group 268"
                    transform="translate(-1150 -8981)"
                  >
                    <circle
                      id="Ellipse_30"
                      data-name="Ellipse 29"
                      cx="25"
                      cy="25"
                      r="25"
                      transform="translate(1150 8981)"
                      fill="#fff"
                      opacity="0.091"
                    />
                    <path
                      id="Icon_awesome-twitter"
                      data-name="Icon awesome-twitter"
                      d="M21.5,8.231c.015.213.015.426.015.639A13.876,13.876,0,0,1,7.541,22.841,13.877,13.877,0,0,1,0,20.637a10.159,10.159,0,0,0,1.186.061,9.835,9.835,0,0,0,6.1-2.1,4.919,4.919,0,0,1-4.592-3.406,6.193,6.193,0,0,0,.927.076A5.194,5.194,0,0,0,4.911,15.1a4.911,4.911,0,0,1-3.938-4.82v-.061a4.946,4.946,0,0,0,2.22.623,4.918,4.918,0,0,1-1.52-6.568A13.959,13.959,0,0,0,11.8,9.417a5.544,5.544,0,0,1-.122-1.125,4.915,4.915,0,0,1,8.5-3.36,9.668,9.668,0,0,0,3.117-1.186,4.9,4.9,0,0,1-2.159,2.706,9.845,9.845,0,0,0,2.828-.76A10.556,10.556,0,0,1,21.5,8.231Z"
                      transform="translate(1163.02 8992.889)"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </a>
              <!--            <a href="#" class="ms-footer-social youtube" target="_blank"-->
              <!--              ><svg-->
              <!--                xmlns="http://www.w3.org/2000/svg"-->
              <!--                width="50"-->
              <!--                height="50"-->
              <!--                viewBox="0 0 50 50"-->
              <!--              >-->
              <!--                <g-->
              <!--                  id="Group_269"-->
              <!--                  data-name="Group 269"-->
              <!--                  transform="translate(-1150 -8981)"-->
              <!--                >-->
              <!--                  <circle-->
              <!--                    id="Ellipse_31"-->
              <!--                    data-name="Ellipse 29"-->
              <!--                    cx="25"-->
              <!--                    cy="25"-->
              <!--                    r="25"-->
              <!--                    transform="translate(1150 8981)"-->
              <!--                    fill="#fff"-->
              <!--                    opacity="0.091"-->
              <!--                  />-->
              <!--                  <path-->
              <!--                    id="Icon_awesome-youtube"-->
              <!--                    data-name="Icon awesome-youtube"-->
              <!--                    d="M22.541,6.915A2.758,2.758,0,0,0,20.6,4.962C18.888,4.5,12.025,4.5,12.025,4.5s-6.864,0-8.575.462A2.758,2.758,0,0,0,1.509,6.915a28.932,28.932,0,0,0-.459,5.317,28.932,28.932,0,0,0,.459,5.317,2.717,2.717,0,0,0,1.941,1.922c1.712.462,8.575.462,8.575.462s6.864,0,8.575-.462a2.717,2.717,0,0,0,1.941-1.922A28.932,28.932,0,0,0,23,12.232a28.932,28.932,0,0,0-.459-5.317ZM9.78,15.5V8.969l5.737,3.264L9.78,15.5Z"-->
              <!--                    transform="translate(1163.225 8993.783)"-->
              <!--                    fill="#fff"-->
              <!--                  />-->
              <!--                </g>-->
              <!--              </svg>-->
              <!--            </a>-->
              <a
                href="https://www.instagram.com/nshp_ng/"
                target="_blank"
                class="ms-footer-social instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                >
                  <g
                    id="Group_409"
                    data-name="Group 409"
                    transform="translate(-1150 -8981)"
                  >
                    <circle
                      id="Ellipse_32"
                      data-name="Ellipse 29"
                      cx="25"
                      cy="25"
                      r="25"
                      transform="translate(1150 8981)"
                      fill="#fff"
                      opacity="0.091"
                    />
                    <g
                      id="Icon_feather-instagram"
                      data-name="Icon feather-instagram"
                      transform="translate(1161.609 8992.809)"
                    >
                      <path
                        id="Path_398"
                        data-name="Path 398"
                        d="M8.1,3H18.286a5.1,5.1,0,0,1,5.1,5.1V18.286a5.1,5.1,0,0,1-5.1,5.1H8.1a5.1,5.1,0,0,1-5.1-5.1V8.1A5.1,5.1,0,0,1,8.1,3Z"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <path
                        id="Path_399"
                        data-name="Path 399"
                        d="M20.173,15.413a4.076,4.076,0,1,1-3.434-3.434,4.076,4.076,0,0,1,3.434,3.434Z"
                        transform="translate(-2.906 -2.865)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <path
                        id="Path_400"
                        data-name="Path 400"
                        d="M26.25,9.75h0"
                        transform="translate(-7.454 -2.164)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-container>
    <el-container>
      <div class="copyright">
        <hr />
        <p>copyright © 2020 - NSHP. All rights reserved.</p>
      </div>
    </el-container>
  </footer>
</template>

<script>
import image from '../mixin/image'
export default {
  name: 'Footer',
  mixins: [image],
  data() {
    return {
      search: {
        query: '',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.ms-footer {
  margin-top: 55px;
  padding: 40px 0;
  background: #163627;
  position: relative;

  .footer-illustration {
    position: absolute;
    top: -55px;
    left: 0;
    width: 100%;
  }

  .footer-logo {
    margin-bottom: 15px;
    opacity: 0.74;
    display: flex;

    img {
      height: 80px;
      margin-right: 20px;
    }

    + p {
      width: 90%;
      opacity: 0.74;
    }
  }

  p {
    font-size: 0.875rem;
    color: #fff;
  }

  h5 {
    color: #58bb8c;
    text-transform: uppercase;
    font-size: 0.8rem;
    margin-bottom: 15px;
  }

  .ms-footer-links {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    li {
      padding: 0 40px 20px 0;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }

      a {
        color: #ffffff;
        font-size: 0.8rem;
        margin: 10px 0;
        opacity: 0.8;

        &:hover {
          opacity: 1;
          color: #fcb320;
          transition: all 0.3s ease-out;
        }
      }
    }
  }

  .ms-footer--actions {
    margin-bottom: 30px;
    > a {
      color: #58bb8c;
      text-decoration: underline;
    }
  }

  .ms-footer--search {
    display: flex;
    align-items: center;
  }

  .ms-social--links {
    display: flex;
    align-items: center;

    .ms-footer-social {
      display: flex;
      align-items: center;

      span {
        color: #fff;
        font-size: 0.75rem;
        opacity: 0.74;
      }

      svg {
        height: 36px;
        width: 36px;
        margin-right: 20px;
      }

      &.facebook:hover {
        svg circle {
          fill: #3d5a99 !important;
          opacity: 1;
          transition: all 0.25s ease-out;
        }
        span {
          color: #3d5a99;
        }
      }

      &.twitter:hover {
        svg circle {
          fill: #2eaae1;
          opacity: 1;
          transition: all 0.25s ease-out;
        }
        span {
          color: #2eaae1;
        }
      }

      &.youtube:hover {
        svg circle {
          fill: #cd211f;
          opacity: 1;
          transition: all 0.25s ease-out;
        }
        span {
          color: #cd211f;
        }
      }

      &.instagram:hover {
        svg circle {
          fill: #b4408d;
          opacity: 1;
          transition: all 0.25s ease-out;
        }
        span {
          color: #b4408d;
        }
      }
    }
  }

  .copyright {
    width: 100%;
    hr {
      border-color: #fff;
      opacity: 0.1;
      margin-top: 20px;
    }

    p {
      text-align: center;
      opacity: 0.6;
      font-size: 0.75rem;
    }
  }
}

@media (max-width: 1024px) {
  .ms-footer {
    .footer-illustration {
      top: -40px !important;
    }
  }
}

@media (max-width: 992px) {
  .ms-footer {
    .el-col-24:not(:last-child) {
      margin-bottom: 40px;
    }

    .footer-illustration {
      top: -30px !important;
      transform: scale(2);
    }

    .footer-logo + p {
      width: 100%;
    }

    .ms-footer--search {
      flex-direction: column;
      justify-content: center;

      .el-button {
        margin-top: 10px;
      }
    }
  }
}

@media (max-width: 600px) {
  .ms-footer {
    .el-col-24:not(:last-child) {
      margin-bottom: 40px;
    }

    .footer-illustration {
      top: -15px !important;
    }

    .ms-footer-links {
      li {
        padding: 10px 30px 10px 0;
      }
    }
  }
}
</style>

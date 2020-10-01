<template>
  <div>
    <div :class="['ms-navbar', { light: showLightNav === true }]">
      <div class="ms-navbar--strip">
        <el-container>
          <div>
            <a href="mailto:hello@nshp.ng" target="_blank"
              ><i class="el-icon-message"></i><span>hello@nshp.ng</span></a
            >
          </div>
          <div>
            <a href="https://linktr.ee/nshp.ng" target="_blank"
              ><i class="el-icon-phone"></i><span>+234 812 345 6789</span></a
            >
          </div>
        </el-container>
      </div>
      <el-container>
        <nuxt-link to="/"
          ><div class="ms-logo">
            <img
              :src="getImage(`navlogos${!showLightNav ? '-white' : ''}.svg`)"
              alt="Federal Government of Nigeria, NSHP"
            /></div
        ></nuxt-link>
        <div id="toggle" class="ms-mobile--menu__toggler" @click="toggleMenu">
          <span class="top"></span>
          <span class="middle"></span>
          <span class="bottom"></span>
        </div>
        <ul class="ms-nav-links">
          <li
            v-for="(link, i) in navLinks"
            :key="i"
            :class="{ active: page === link.url }"
          >
            <nuxt-link v-if="link.url !== '/news'" :to="link.url">{{
              link.label
            }}</nuxt-link>
            <!--            <a v-else href="#" target="_blank">News</a>-->
          </li>
        </ul>
      </el-container>
    </div>
    <div id="ms-mobile--menu" class="ms-mobile--menu">
      <div class="ms-mobile--menu__content">
        <div class="ms-mobile--menu__toggler" @click="toggleMenu">
          <span class="top"></span>
          <span class="middle"></span>
          <span class="bottom"></span>
        </div>
        <ul class="ms-mobile--menu__links">
          <li
            v-for="(link, i) in navLinks"
            :key="i"
            :class="['nav-item', { active: page === link.url }]"
          >
            <nuxt-link
              v-if="link.url !== 'news'"
              :to="link.url"
              class="nav-item"
              >{{ link.label }}</nuxt-link
            >
            <a v-else href="#" target="_blank">News</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import image from '../mixin/image'

export default {
  name: 'Navigation',
  mixins: [image],
  data() {
    return {
      showLightNav: false,
      navLinks: [
        {
          label: 'Home',
          url: '/',
        },
        {
          label: 'About NSHP',
          url: '/about-us',
        },
        {
          label: 'FAQ',
          url: '/faq',
        },
        // {
        //   label: 'News',
        //   url: '/news',
        // },
        {
          label: 'Contact',
          url: '/contact',
        },
      ],
      page: '/',
    }
  },
  watch: {
    $route() {
      document
        .querySelector('.ms-mobile--menu__toggler')
        .classList.remove('active')
      document.querySelector('.ms-mobile--menu').classList.remove('open')
      document.querySelector('body').classList.remove('mobile-nav')
      this.page = this.$route.path
    },
  },
  mounted() {
    this.page = this.$route.path
    window.addEventListener('scroll', () => {
      this.showLightNav = window.pageYOffset > 100
    })
  },
  created() {
    this.showLightNav = !this.$route.name
  },
  methods: {
    toggleMenu() {
      document
        .querySelector('.ms-mobile--menu__toggler')
        .classList.toggle('active')
      document.querySelector('body').classList.toggle('mobile-nav')
      document.querySelector('.ms-mobile--menu').classList.toggle('open')
    },
  },
}
</script>

<style scoped lang="scss">
.ms-navbar {
  padding: 10px 0;
  background: transparent;
  z-index: 11;
  width: 100%;
  position: fixed;
  transition: background 0.7s ease-in;

  .ms-navbar--strip {
    background: #163627;
    color: #fff;
    padding: 5px 0;
    position: relative;
    top: -80px;
    transition: top 1s ease 0s;

    .el-container {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      > div {
        margin-right: 30px;
      }

      a {
        color: #fff;
        opacity: 0.74;
        font-size: 0.75rem;
        font-weight: 600;
        transition: color 0.3s ease-out;

        &:hover {
          color: #fcb320;
          transition: color 0.3s ease-in;
        }

        i {
          margin-right: 10px;
        }
      }
    }
  }

  > .el-container {
    position: relative;
    top: -40px;
    left: 0;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.7s ease-in;
  }

  .ms-logo img {
    height: 70px;
  }

  .ms-nav-links {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;

    li {
      padding: 10px 25px;

      a {
        color: #fff;
        font-size: 0.75rem;
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        transition: color 0.7s ease-in;
      }

      &.active a {
        color: #58bb8c;
        font-weight: 600;
      }

      &:hover:not(.active) a {
        color: #58bb8c;
        transition: color 0.7s ease-in;
      }
    }
  }

  &.light {
    padding-top: 0;
    background: #fff;
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.2) !important;
    transition: all 0.7s ease-out;

    .ms-navbar--strip {
      top: 0;
      margin-bottom: 10px;
      transition: top 0.7s ease-out;
    }

    .el-container {
      top: 0;
      transition: top 0.7s ease-out;
    }

    .ms-nav-links {
      li {
        padding: 10px 25px;

        a {
          color: #000;
          transition: color 0.7s ease-out;
        }

        &.active a {
          color: #58bb8c;
          font-weight: 600;
        }

        &:hover:not(.active) a {
          color: #58bb8c;
          transition: color 0.7s ease-out;
        }
      }
    }
  }
}

.ms-mobile--menu__toggler {
  position: absolute;
  right: 5%;
  height: 27px;
  width: 35px;
  cursor: pointer;
  z-index: 100;
  transition: opacity 0.25s ease;
  display: none;
}

.ms-mobile--menu__toggler:hover {
  opacity: 0.7;
}

.ms-mobile--menu__toggler span {
  background: #58bb8c;
  border: none;
  height: 3px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.35s ease;
  cursor: pointer;
  z-index: 5;
}

.ms-mobile--menu__toggler span:nth-of-type(2) {
  top: 10px;
}

.ms-mobile--menu__toggler span:nth-of-type(3) {
  top: 20px;
}

.ms-mobile--menu {
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  visibility: hidden;
  transition: opacity 0.35s, visibility 0.35s, width 0.35s;
  z-index: 1000;
}

.ms-mobile--menu .ms-mobile--menu__toggler {
  opacity: 0;
}

.ms-mobile--menu.open .ms-mobile--menu__toggler {
  opacity: 1;
  transition: 0.7s ease-in;
  right: 15% !important;
}

.ms-mobile--menu__content {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 40px;
  height: 100%;
  background: #00000090;
}

.ms-mobile--menu:after {
  content: '';
  background: #58bb8c;
  right: -100%;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all 0.35s ease;
}

.ms-mobile--menu.open {
  visibility: visible;
  height: 100%;
}

.ms-mobile--menu.open:after {
  right: -70px;
}

.ms-mobile--menu.open .ms-mobile--menu__toggler .top {
  -webkit-transform: translateY(10px) translateX(0) rotate(45deg);
  transform: translateY(10px) translateX(0) rotate(45deg);
  background: #fff;
}

.ms-mobile--menu.open .ms-mobile--menu__toggler .middle {
  opacity: 0;
  background: #58bb8c;
}

.ms-mobile--menu.open .ms-mobile--menu__toggler .bottom {
  -webkit-transform: translateY(-10px) translateX(0) rotate(-45deg);
  transform: translateY(-10px) translateX(0) rotate(-45deg);
  background: #fff;
}

.ms-mobile--menu__links {
  list-style: none;
  padding: 0;
  position: relative;
  z-index: 3;
  margin: 80px 0 0 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}

.ms-mobile--menu__links li {
  display: block;
  position: relative;
  opacity: 0;
  margin-bottom: 30px;
  cursor: pointer;
}

.ms-mobile--menu__links li a {
  color: #fff !important;
  font-size: 1.5rem;
  opacity: 0.8;
  font-weight: 400;
}

.ms-mobile--menu__links li.active a {
  padding-bottom: 10px;
  opacity: 1;
  color: #0b1207 !important;
  border-bottom: 4px solid #fcb320;
  font-weight: 600;
}

.ms-mobile--menu__links li a:hover {
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

.ms-mobile--menu.open .ms-mobile--menu__links li {
  -webkit-animation: fadeInRight 0.5s ease forwards;
  animation: fadeInRight 0.5s ease forwards;
  -webkit-animation-delay: 0.35s;
  animation-delay: 0.35s;
}

.ms-mobile--menu.open .ms-mobile--menu__links li:nth-of-type(2) {
  -webkit-animation-delay: 0.45s;
  animation-delay: 0.45s;
}

.ms-mobile--menu.open .ms-mobile--menu__links li:nth-of-type(3) {
  -webkit-animation-delay: 0.55s;
  animation-delay: 0.55s;
}

.ms-mobile--menu.open .ms-mobile--menu__links li:nth-of-type(4) {
  -webkit-animation-delay: 0.65s;
  animation-delay: 0.65s;
}

.ms-mobile--menu.open .ms-mobile--menu__links li:nth-of-type(5) {
  -webkit-animation-delay: 0.75s;
  animation-delay: 0.75s;
}

@-webkit-keyframes fadeInRight {
  0% {
    opacity: 0;
    left: 20%;
  }

  100% {
    opacity: 1;
    left: 0;
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    left: 20%;
  }

  100% {
    opacity: 1;
    left: 0;
  }
}

@media (max-width: 1024px) {
  .ms-navbar {
    padding: 0 0 20px;
  }
}

@media (max-width: 992px) {
  .ms-navbar {
    padding: 0 0 10px;
  }

  .ms-mobile--menu__toggler {
    display: block;
  }

  .ms-nav-links {
    display: none !important;
  }
}

@media (max-width: 600px) {
  .ms-navbar {
    .ms-logo img {
      height: 50px;
    }

    > .el-container {
      top: -20px !important;
    }

    &.light {
      > .el-container {
        top: 0 !important;
      }
    }
  }
}
</style>

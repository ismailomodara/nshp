<template>
  <div>
    <div class="ms-navbar">
      <el-container>
        <div class="ms-logo">
          <nuxt-link to="/"
            ><img
              src="../assets/img/website/navlogos.svg"
              alt="Federal Government of Nigeria, NSHP"
          /></nuxt-link>
        </div>
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
            <a v-else href="#" target="_blank">News</a>
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
export default {
  name: 'Navigation',
  data() {
    return {
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
          label: 'Faq',
          url: '/faq',
        },
        {
          label: 'News',
          url: '/news',
        },
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
    },
  },
  mounted() {
    this.page = this.$route.path
  },
  methods: {
    toggleMenu() {
      document
        .querySelector('.ms-mobile--menu__toggler')
        .classList.toggle('active')
      document.querySelector('.ms-mobile--menu').classList.toggle('open')
    },
  },
}
</script>

<style scoped lang="scss">
.ms-navbar {
  padding: 10px 0;
  background: #fff;
  z-index: 2;
  width: 100%;

  .el-container {
    position: relative;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ms-logo img {
    height: 60px;
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
        color: #000;
        font-size: 0.75rem;
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
      }

      &.active a {
        color: #58bb8c;
        font-weight: 600;
      }

      &:hover:not(.active) a {
        color: #58bb8c;
        transition: color 0.3s ease-out;
      }
    }
  }
}

.ms-mobile--menu__toggler {
  position: absolute;
  right: 7%;
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

.ms-navbar.light .ms-mobile--menu__toggler span {
  background: #fff;
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
  transition: 0.3s ease-in;
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

@media (max-width: 992px) {
  .ms-navbar {
    padding: 5px 0;
  }

  .ms-mobile--menu__toggler {
    display: block;
  }

  .ms-nav-links {
    display: none !important;
  }
}
</style>

<template>
  <div>
    <header class="ms-header--other">
      <div class="ms-header--other__bg">
        <img
          :src="getImage('partners/partners-header.jpg')"
          alt="Become a Partner NSHP"
        />
      </div>
      <el-container>
        <div class="ms-header--other__content">
          <h1>Homes for Nigerians, by Nigerians</h1>
        </div>
      </el-container>
      <div class="overlay header-gradient"></div>
    </header>
    <div class="ms-partners ms-section">
      <div class="ms-section--heading">
        <h3>Help us develop homes for Nigerians</h3>
        <p>
          Our dynamic approach to ‘Reach All’ is based on partnerships with
          multiple stakeholders to build affordable homes and create jobs for
          Nigerians. To build 300,000 homes, we require the brightest minds and
          strongest convictions to help us achieve our goal. If you share our
          vision, join us to build affordable homes.
        </p>
      </div>
      <el-container>
        <el-row type="flex" :gutter="40" class="flex-wrap">
          <el-col
            v-for="(type, i) in partnersType"
            :key="i"
            :sm="24"
            :md="12"
            :lg="12"
          >
            <div class="ms-partner--type">
              <a :href="type.url"></a>
              <img class="bg" :src="getImage(`partners/${type.bg}`)" />
              <img
                class="icon"
                :src="getImage(`partners/${type.image}.svg`)"
                alt="Home"
              />
              <div class="overlay"></div>
              <div class="content">
                <h4 class="web">{{ type.title }}</h4>
                <h4 class="mobile" v-html="type.titleMobile"></h4>
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
  name: 'Partners',
  mixins: [image],
  data() {
    return {
      partnersType: [
        {
          bg: 'sme-delivery-partner-individuals.jpg',
          url: 'https://assessment.nshp.ng/delivery-partners',
          image: 'partner-w',
          title: 'SME Delivery Partner (Individuals)',
          titleMobile: 'SME Delivery Partner <br>(Individuals)',
        },
        {
          bg: 'sme-delivery-partner-groups.jpg',
          url: 'https://assessment.nshp.ng/delivery-partners-group',
          image: 'partner-w',
          title: 'SME Delivery Partner (Groups)',
          titleMobile: 'SME Delivery Partner<br>(Groups)',
        },
        {
          bg: 'consultant.jpg',
          url: 'https://assessment.nshp.ng/management-consultants',
          image: 'consultant-w',
          title: 'Independent Project Manager',
          titleMobile: 'Independent<br> Project Manager',
        },
        {
          bg: 'contractor.jpg',
          url: ' https://assessment.nshp.ng/management-contractors',
          image: 'contractor-w',
          title: 'Management Contractor',
          titleMobile: 'Management Contractor',
        },
        {
          bg: 'manufacturer.jpg',
          url: 'https://assessment.nshp.ng/manufacturers',
          image: 'supplier-w',
          title: 'Manufacturer',
          titleMobile: 'Manufacturer',
        },
        {
          bg: 'supplier.jpg',
          url: 'https://assessment.nshp.ng/supplier',
          image: 'supplier-w',
          title: 'Supplier',
          titleMobile: 'Supplier',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.ms-section--heading p {
  width: 100%;
}

.ms-partners {
  background: #fff;

  .ms-partner--type {
    background: #001a0b10;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 0 30px;
    height: 180px;
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;
    transition: all 0.2s ease-in;

    &:hover {
      box-shadow: -4px 16px 30px rgba(0, 0, 0, 0.06);
      transform: translateY(-4px);
      transition: all 0.2s ease-out;
    }

    a {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 10;
    }

    img.icon {
      height: 60px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 30px;
      opacity: 0.94;
      z-index: 8;
    }

    img.bg {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
    }

    .content {
      position: relative;
      z-index: 9;

      h4 {
        font-weight: 600;
        font-size: 1.1rem;
        color: #fff;
        line-height: 1.6;

        &.mobile {
          display: none;
        }
      }

      p {
        font-size: 1.1rem;
        margin-bottom: 0;
      }
    }
  }
}

@media (max-width: 1024px) {
  .ms-partners .ms-partner--type {
    h4 {
      line-height: 1.8;
      &.web {
        display: none !important;
      }

      &.mobile {
        display: block !important;
      }
    }

    img.icon {
      height: 40px;
    }
  }
}

@media (max-width: 600px) {
  .ms-partners .ms-partner--type {
    padding: 0 12px;
  }
}
</style>

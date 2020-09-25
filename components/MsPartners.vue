<template>
  <div class="ms-our--partner ms-section">
    <div class="ms-section--heading">
      <h3>Our Partner</h3>
    </div>
    <el-container>
      <el-row type="flex" :gutter="30" class="flex-wrap mt-4">
        <el-col :sm="12" :md="10" :lg="8">
          <div class="ms-partner--type">
            <h6>Financial Partners</h6>
          </div>
          <carousel ref="slider" :per-page="2">
            <slide
              v-for="(partner, index) in financial_partners"
              :key="index"
              :data-index="index"
            >
              <div class="partner-logo">
                <img :src="getImage(partner)" alt="NSHP" />
              </div>
            </slide>
          </carousel>
        </el-col>
        <el-col :sm="12" :md="14" :lg="16">
          <div class="ms-partner--type inverse">
            <h6>Strategic Partners</h6>
          </div>
          <carousel
            ref="slider"
            :per-page-custom="[
              [0, 2],
              [600, 3],
              [1366, 4],
            ]"
            :loop="true"
            :autoplay="true"
            :autoplay-timeout="3000"
            :autoplay-hover-pause="false"
            :pagination-padding="6"
            :pagination-size="12"
            pagination-color="#ccc"
            pagination-active-color="#FCB320"
          >
            <slide
              v-for="(partner, index) in strategic_partners"
              :key="index"
              :data-index="index"
            >
              <div class="partner-logo">
                <img
                  :src="getImage(partner)"
                  alt="NSHP"
                  :class="{ small: partner.includes('family') }"
                />
              </div>
            </slide>
          </carousel>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import image from '../mixin/image'

export default {
  name: 'MsPartners',
  components: {
    Carousel,
    Slide,
  },
  mixins: [image],
  data() {
    return {
      financial_partners: ['partners/finance.png', 'partners/central_bank.png'],
      strategic_partners: [
        'partners/federal-mortage.png',
        'partners/federal-housing.png',
        'partners/works-and-housing.png',
        'partners/state_government.png',
        'partners/family-home-funds.png',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.ms-our--partner {
  background: #f4faf7;

  .el-row {
    width: 100%;
  }

  .ms-partner--type {
    text-align: center;
    padding: 10px 20px;
    background: #58bb8c;
    border-radius: 5px;
    margin-bottom: 40px;
    width: 200px;

    &.inverse {
      background: #fcb320;
    }

    h6 {
      color: #fff;
    }
  }

  img {
    height: 120px;
    width: auto !important;

    &.small {
      height: 100px;
    }
  }

  .partner-logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 992px) {
  .ms-our--partner .partner-logo {
    margin: 0 20px;
  }
}

@media (max-width: 600px) {
  .ms-our--partner {
    .ms-partner--type {
      margin: auto auto 30px;
    }
    .el-col-24 {
      margin-bottom: 50px;
    }
  }
}
</style>

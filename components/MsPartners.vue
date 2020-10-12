<template>
  <div class="ms-our--partner ms-section">
    <div class="ms-section--heading">
      <h3>Powered by:</h3>
    </div>
    <el-container>
      <el-row type="flex" :gutter="40" class="flex-wrap mt-4">
        <el-col :span="24">
          <carousel
            ref="slider"
            :per-page-custom="[
              [0, 2],
              [600, 5],
              [1366, 6],
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
              v-for="(partner, index) in partners"
              :key="index"
              :data-index="index"
            >
              <div class="partner-logo">
                <img :src="getImage(`partners/${partner}.png`)" alt="NSHP" />
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
      partners: [
        'nesp',
        'family-home-funds',
        'finance',
        'central_bank',
        'federal-mortgage',
        'federal-housing',
        'works-and-housing',
        'state_government',
        'cfn',
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

  .el-container {
    justify-content: center;
  }

  .ms-partner--type {
    text-align: left;
    margin-bottom: 40px;
    position: relative;
    display: flex;
    align-items: center;

    span {
      height: 18px;
      width: 18px;
      border-radius: 100px;
      background: #58bb8c;
      margin-right: 15px;
    }

    h6 {
      color: #0b1207;
      position: relative;
    }

    &.inverse {
      span {
        background: #fcb320;
      }
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
    .el-row {
      width: 100%;
    }

    .ms-partner--type {
      margin: auto auto 30px;
    }
    .el-col-24 {
      margin-bottom: 50px;
    }
  }
}
</style>

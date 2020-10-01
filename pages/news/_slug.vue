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
          <h1>The News Title</h1>
          <p class="ms-news--date">1st Oct, 2020</p>
        </div>
      </el-container>
      <div class="overlay header-gradient"></div>
    </header>
    <div class="ms-news--view ms-section">
      <el-container>
        <el-row type="flex">
          <el-col :span="24">
            <div>
              <p>
                Imagine becoming the latest homeowner in any part of Nigeria,
                amazing right? The National Social Housing Programme (NSHP)
                allows you to become an instant landlord with as low as
                <span class="strong">₦2,000,000 only</span>
              </p>
              <p>
                The initiative is a bold response by the Buhari-led
                administration to tackle the adverse economic and health
                challenges faced by Nigerians due to the global COVID19
                pandemic. It introduces a new and dynamic approach that brings
                together experience and expertise from multiple stakeholders to
                develop a sustainable and impactful solution to housing and
                unemployment in Nigeria.
              </p>
              <div class="ms-sub--section">
                <h4>Objectives</h4>
                <p>NSHP is set to achieve the following objectives:</p>
                <ul>
                  <li>
                    Construct 300,000 homes across Nigeria in 12 months for low
                    income earners.
                  </li>
                  <li>
                    Create up to 1.8m jobs in the value chain of the
                    construction for Nigerians.
                  </li>
                  <li>
                    Increase domestic production of construction materials
                    through the economies of scale.
                  </li>
                  <li>
                    Increase access to home ownership for low income Nigerians
                    through reduced housing costs and low interest mortgages.
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-container>
    </div>
  </div>
</template>

<script>
import image from '../../mixin/image'

export default {
  name: 'NewsView',
  mixins: [image],
  data() {
    return {}
  },
  mounted() {
    document.querySelector('body').style.background = '#fff'
  },
}
</script>

<style lang="scss" scoped>
.ms-news--date {
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
}

.ms-news--view {
  background: #fff;

  > .el-container {
    max-width: 75% !important;
    margin: auto;
  }

  .ms-sub--section {
    margin-bottom: 20px;

    h4 {
      margin-bottom: 15px;
    }
  }

  p {
    font-size: 1rem;
    line-height: 2.2;
    color: #0b1207;
    opacity: 1;
    text-align: justify;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  ul {
    list-style: square;

    li {
      padding: 10px;
      line-height: 2;
    }
  }
}

@media (min-width: 1440px) {
  .ms-news--view {
    padding-bottom: 80px;

    > .el-container {
      max-width: 1000px !important;
    }
  }
}

@media (max-width: 600px) {
  .ms-news--view {
    > .el-container {
      max-width: 90% !important;
    }
  }
}
</style>

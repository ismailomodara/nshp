<template>
  <div>
    <header class="ms-header--other">
      <div class="ms-header--other__bg">
        <img :src="getImage('home/slider/slide-1.jpg')" alt="About NSHP" />
      </div>
      <el-container>
        <div class="ms-header--other__content">
          <h1>Jobs for Nigerians <br />through Homes</h1>
        </div>
      </el-container>
      <div class="overlay header-gradient"></div>
    </header>
    <div class="ms-visions ms-section">
      <div class="ms-section--heading">
        <h3>The Vision</h3>
        <p>
          Here are some of the impacts the programme as a whole would be making
          in the Nigerian Economy.
        </p>
      </div>
      <el-container>
        <el-row type="flex" :gutter="40" class="flex-wrap">
          <el-col
            v-for="(vision, i) in visions"
            :key="i"
            :sm="24"
            :md="12"
            :lg="12"
          >
            <div class="ms-vision">
              <img :src="getImage(`vision/${vision.image}.svg`)" alt="Home" />
              <div>
                <h3>{{ vision.title }}</h3>
                <p>{{ vision.tagline }}</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-container>
    </div>
    <div class="ms-about ms-section">
      <div class="ms-section--heading">
        <h3>More about NSHP</h3>
      </div>
      <el-container>
        <el-row type="flex" :gutter="80" align="middle" class="flex-wrap">
          <el-col :span="24">
            <div class="ms-about--content">
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
            </div>
          </el-col>
        </el-row>
      </el-container>
      <el-container>
        <el-row type="flex" :gutter="80" align="middle" class="flex-wrap">
          <el-col :sm="24" :md="14" :lg="12">
            <div class="ms-about--content">
              <p>NSHP is set to achieve the following objectives:</p>
              <ul>
                <li>
                  Construct 300,000 homes across Nigeria in 12 months for low
                  income earners.
                </li>
                <li>
                  Create up to 1.8m jobs in the value chain of the construction
                  for Nigerians.
                </li>
                <li>
                  Increase domestic production of construction materials through
                  the economies of scale.
                </li>
                <li>
                  Increase access to home ownership for low income Nigerians
                  through reduced housing costs and low interest mortgages.
                </li>
              </ul>
              <p>
                There amazing offers waiting for you
                <a href="https://nshp.ng/individual" target="_blank"
                  >I'm interested</a
                >
              </p>
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
  </div>
</template>

<script>
import image from '../mixin/image'

export default {
  name: 'AboutUs',
  mixins: [image],
  data() {
    return {
      visions: [
        {
          image: 'homes',
          title: '300,000',
          tagline: 'Homes across the country',
        },
        {
          image: 'estates',
          title: '1,000',
          tagline: 'Estates per year',
        },
        {
          image: 'states',
          title: '36',
          tagline: 'States + FCT (774 LGAs)',
        },
        {
          image: 'partners',
          title: '6,000',
          tagline: 'Partnerships (SMEs)',
        },
        {
          image: 'consultants',
          title: '1,000',
          tagline: 'Management Consultants',
        },
        {
          image: 'contractors',
          title: '37',
          tagline: 'Management Contractors',
        },
        {
          image: 'content',
          title: '100%',
          tagline: 'Local Content Target',
        },
        {
          image: 'jobs',
          title: '13,000,000',
          tagline: 'Jobs for Nigerians',
        },
        {
          image: 'enterprises',
          title: '300,000',
          tagline: 'Micro Enterprises',
        },
        {
          image: 'women',
          title: '4,000,000',
          tagline: 'Jobs for Women',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.ms-visions {
  background: #f4faf7;

  .ms-vision {
    background: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 0 30px;
    height: 180px;
    box-shadow: -4px 16px 30px rgba(0, 0, 0, 0.06);
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;

    img {
      height: 60px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 30px;
      opacity: 0.94;
    }

    div {
      h3 {
        font-weight: 600;
        font-size: 1.8rem;
      }

      p {
        font-size: 1.1rem;
        margin-bottom: 0;
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
      animation: scale 7000ms ease-in-out forwards;
    }
  }

  .ms-about--content p {
    margin-bottom: 30px;
  }

  ul {
    list-style: square;
    margin: 0 0 30px;

    li {
      padding: 15px 0;
      font-size: 1rem;
      opacity: 0.8;
      line-height: 1.8;
    }
  }
}

@media (max-width: 992px) {
  .ms-about .ms-about--image img {
    height: 200px !important;
    margin-top: 70px;
  }
}
</style>

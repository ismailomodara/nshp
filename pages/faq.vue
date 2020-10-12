<template>
  <div>
    <header class="ms-header--other">
      <div class="ms-header--other__bg">
        <img
          :src="getImage('home/slider/shikini_money_for_beta_house.jpg')"
          alt="About NSHP"
        />
      </div>
      <el-container>
        <div class="ms-header--other__content">
          <h1>Frequently Asked Questions</h1>
        </div>
      </el-container>
      <div class="overlay header-gradient"></div>
    </header>
    <div class="ms-faqs ms-section">
      <div class="ms-section--heading">
        <h3>Answers to common questions</h3>
        <p>
          Do you have any questions about the National Social Housing Programme?
          Find answers to our frequently asked questions below and if you still
          have questions, feel free to contact us through any of our channels or
          through social media.
        </p>
      </div>
      <el-container>
        <el-row type="flex" :gutter="40" class="flex-wrap">
          <el-col :lg="24">
            <el-collapse v-model="activeName" accordion>
              <el-collapse-item
                title="What is the National Social Housing Programme (NSHP)?"
                name="1"
              >
                <div>
                  <p>
                    National Social Housing Programme (NSHP) is a bold response
                    by the Buhari-led administration to tackle the adverse
                    economic and health challenges faced by Nigerians due to the
                    global COVID-19 pandemic.<br />
                    The Family Homes Funds has been commissioned to implement
                    the Social Housing Program as an integral part of The
                    Federal Government’s Economic Sustainability Plan.<br />
                    The NSHP introduces a new and dynamic approach that brings
                    together experience and expertise from multiple stakeholders
                    to develop a sustainable and impactful solution to housing
                    and unemployment in Nigeria.
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item
                title="How does it work?"
                class="inverse"
                name="2"
              >
                <div>
                  <div>
                    <p>
                      We have put in place a seamless process in three simple
                      steps
                    </p>
                    <ul>
                      <li>Show Interest</li>
                      <li>Selection</li>
                      <li>Own</li>
                    </ul>
                    <el-button
                      type="primary"
                      size="small"
                      @click="$router.push('/about-us')"
                      >Find out details</el-button
                    >
                  </div>
                </div>
              </el-collapse-item>
              <el-collapse-item
                title="Who is eligible/qualifies to own a home on the NSHP?"
                name="3"
              >
                <div>
                  <p>
                    To be eligible to own a home, you must fulfil the following
                    criteria when the applications are open:
                  </p>
                  <ul>
                    <li>Be a Nigerian citizen.</li>
                    <li>Be over 18 years of age.</li>
                    <li>Have a valid national identity card.</li>
                    <li>
                      You must then complete your profile by submitting your
                      personal details, housing preferences (the type of house
                      you are applying for).
                    </li>
                    <li>Show a reliable income stream/affordability</li>
                  </ul>
                </div>
              </el-collapse-item>
              <el-collapse-item
                title="What is the structure of the homes?"
                name="4"
                class="inverse"
              >
                <div>
                  <p>
                    Our objective is to ensure that Nigerians with low or medium
                    income especially in the informal sector have access to
                    homes they can afford.
                  </p>
                  <p>
                    To meet this objective, we have designed an extendible
                    1-bedroom self-contained apartment with a living/dining
                    room, kitchen store, bedroom and two toilets. These
                    apartments are detached and sits on at least 250sqm and can
                    be extended to 2/3 bedrooms at minimal costs.
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Where are these homes built?" name="5">
                <div>
                  <p>
                    The houses will be built in all states in Nigeria including
                    the FCT. To reach the grassroot, members of the public will
                    be informed as new projects are built. This is also to allow
                    you choose your preferred location.
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item
                title="Can I own more than one home at a time?"
                name="6"
                class="inverse"
              >
                <div>
                  <p>
                    The NSHP is set to provide low cost housing for Nigerians
                    within the low income range and as such, allocation of
                    houses will be free and fair. A person will not be allocated
                    more than one house at a time.
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item
                title="Can two or more people buy a house together?"
                name="7"
              >
                <div>
                  <p>
                    Two or more people can jointly pay for a home depending on
                    the agreement made. This means that cooperatives or small
                    groups can register their members for the National Social
                    Housing Programme.
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item
                title="How long will it take for me to get an allocation?"
                name="8"
                class="inverse"
              >
                <div>
                  <p>
                    Once the land/location as well as the list of beneficiaries
                    for the specific location have been finalised, arrangements
                    for allocation in that location can begin.
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item
                title="How can I know that my money is safe, and I will get as house as promised?"
                name="9"
              >
                <div>
                  <p>
                    The program is managed by the FHFL owned by the Federal
                    Ministry of Finance, Budget and National Planning and the
                    Nigerian Sovereign Investment Authority. The
                    mortgages/affordability will be enhanced by the CBN and FMBN
                    for loans that will span appropriate periods suitable and
                    affordable by beneficiaries.
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item
                title="Who do I talk to if I have a problem?"
                name="10"
                class="inverse"
              >
                <div>
                  <p>
                    As soon as your application is verified, you will have
                    access to the Housing Portal for necessary information as
                    well as the Call Centre which is being set up at the moment.
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item
                title="What if I am no longer interested in the National Social Housing Programme"
                name="11"
              >
                <div>
                  <p>
                    We strongly advise you stay committed once your application
                    has been submitted and verified. However, we recognize that
                    some circumstances are beyond your control; the government
                    is committed to seeing that the project is successfully
                    implemented.
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item
                title="How do I become a supplier?"
                name="12"
                class="inverse"
              >
                <div>
                  <p>
                    As supplier, you must be registered to distribute or
                    certified to manufacture products for use in the
                    construction value chain. Complete
                    <a
                      href="https://assessment.nshp.ng/supplier"
                      target="_blank"
                      >this form</a
                    >
                    with your valid details as a pre-requisite for registration.
                  </p>
                </div>
              </el-collapse-item>
            </el-collapse>
          </el-col>
        </el-row>
      </el-container>
      <div class="is-flex is-justify-center mt-4">
        <a href="National_Housing_Social_Programme_FAQ.pdf" download>
          <el-button type="primary">Download FAQ</el-button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import image from '../mixin/image'

export default {
  name: 'Faq',
  mixins: [image],
  data() {
    return {
      activeName: '',
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.ms-faqs {
  .el-row {
    width: 100%;
  }

  .el-collapse {
    width: 100%;
    margin: auto;
  }
}

@media (max-width: 600px) {
  .ms-faqs .el-row {
    width: auto !important;
  }
}
</style>

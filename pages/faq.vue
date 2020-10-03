<template>
  <div>
    <header class="ms-header--other">
      <div class="ms-header--other__bg">
        <img :src="getImage('home/slider/slide-2.jpg')" alt="About NSHP" />
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
                    global COVID-19 pandemic. The Family Homes Funds has been
                    commissioned to implement the Social Housing Program tagged
                    ‘Jobs Through Homes’ as an integral part of The Federal
                    Government’s Economic Sustainability Plan.
                  </p>
                  <p>
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
                    criteria:
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
                    within the low- and medium-income range spectrum and as
                    such, allocation of houses will be free and fair. A person
                    will not be allocated more than one house at a time.
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
                    There is no fixed time. NSHP is committed to giving you an
                    allocation as soon as you save at least 25% of the cost of
                    your house.
                  </p>
                  <p>
                    This means that if the current price of your home is
                    ₦3,000,000, you will be required to have saved a minimum of
                    ₦ 750,000 before you are allocated a house. The quicker the
                    minimum savings is reached, the quicker the allocation.
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item
                title="How can I know that my money is safe, and I will get as house as
                                            promised?"
                name="9"
              >
                <div>
                  <p>
                    The NSHP commit to protecting all Nigerians against fraud
                    hence all registered and verified participants’
                    subscriptions are managed by a regulated financial
                    institution. In addition, the following measures have also
                    been put in place:
                  </p>
                  <ul>
                    <li>
                      You will get monthly statements of balance on your account
                      which you can cross check with your own records.
                    </li>
                    <li>
                      All disbursements from the account will go towards actual
                      construction of the housing units and can only be
                      authorized by approved persons
                    </li>
                    <li>
                      Your conditional sales agreement is a binding commitment
                      from the NSHP. Once you achieve a minimum 25% savings on
                      your account, we are obliged to make an allocation.
                    </li>
                  </ul>
                </div>
              </el-collapse-item>
              <el-collapse-item
                title="Who do I talk to if I have a problem?"
                name="10"
                class="inverse"
              >
                <div>
                  <p>
                    As soon as your application is verified, you will be
                    allocated an adviser who you can speak to whenever the need
                    arises including issues regarding rescheduling of your
                    payment plan if you are unable to meet up due to temporary
                    constraints.
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item
                title="What if I am no longer interested in the National Social Housing
                                            Programme"
                name="11"
              >
                <div>
                  <p>
                    We strongly advise you stay committed once your application
                    has been submitted and verified. However, we recognize that
                    some circumstances are beyond control; saved funds will be
                    refunded to you less 15% of administrative cost 30 days
                    after notification.
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
                    As a Manufacture/supplier, you must be registered and
                    certified to manufacture products for use in the
                    construction value chain. Complete the form as a
                    prerequisite for registration with accurate and valid
                    details
                    <a href="{{form_base_url}}/manufacturers">here</a>
                  </p>
                </div>
              </el-collapse-item>
            </el-collapse>
          </el-col>
        </el-row>
      </el-container>
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

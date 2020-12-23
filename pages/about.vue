<template>
  <div class="about-us py-5 my-5">
    <div class="container mt-5">
      <div class="d-flex justify-content-center align-items-center mb-5">
        <Dots :length="11" />
        <h1 class="mudransh-heading text-center text-danger mx-4">
          ABOUT MUDRANSH
        </h1>
        <Dots :length="11" />
      </div>
      <div class="row px-4">
        <div class="col-md-6 col-sm-12">
          <p class="mudransh-text text-gray-darken">
            Mudransh, A Financial Mall consists Group of companies of A Retail
            Banking Private Limited Company Incorporated as a Consulting company
            and shall have paid up equity share capital of ten lakh rupees under
            Indian Companies Act 2013. Retial Banking refers to the
            consumer-oriented services offered by commercial banks. These
            services include accounts, mortgages and various types of loans and
            investment services.
          </p>
          <p class="mudransh-text text-gray-darken">
            Mudransh, A Financial Mall prides itself on a perfect understanding
            of the customer. Each product or service it tailor-made to perfectly
            suit the customer needs. It is the guiding philosophy of putting
            people first that has brought the company closer to the grassroos,
            and made it the preferred choice for all the financing requirements
            amongst customers.
          </p>
        </div>
        <div class="col-md-6 col-sm-12">
          <img
            class="img-fluid"
            alt="about_mudransh"
            src="@/assets/images/photos/mudransh-about.jpg"
          />
        </div>
      </div>
    </div>
    <section class="bg-light-gray py-3 mt-5">
      <div class="container">
        <div class="row px-4 mt-5">
          <div class="col-12">
            <div class="d-flex mb-5">
              <div class="line-yellow align-self-center mr-3" />
              <h1 class="mudransh-heading text-danger">OUR TEAM</h1>
            </div>
          </div>
          <div
            class="col-md-4 col-sm-12 mb-5"
            v-for="member in teamMembers"
            :key="member.id"
          >
            <TeamCard :member="member" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Dots from "@/components/Utils/Dots";
import TeamCard from "@/components/Utils/TeamCard";
export default {
  name: "AboutUs",
  loading: true,
  components: {
    Dots,
    TeamCard,
  },
  data: () => ({
    teamMembers: [],
  }),
  scrollToTop: true,
  methods: {
    async getTeamMembers() {
      let { data } = await this.$axios("/wl/v1/teams");
      console.log("DATA", data);
      this.teamMembers = data;
    },
  },
  created() {
    this.getTeamMembers();
  },
};
</script>

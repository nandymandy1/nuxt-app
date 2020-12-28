<template>
  <div class="mudransh-services py-5 my-5">
    <div class="container mt-5">
      <div class="d-flex justify-content-center align-items-center mb-5">
        <Dots :length="15" />
        <h1 class="mudransh-heading text-center text-danger mx-4">
          OUR SERVICES
        </h1>
        <Dots :length="15" />
      </div>
      <div class="row px-4">
        <div class="col-md-6 col-sm-12 font-weight-bold">
          <p>We help you to raise your dreams through our services.</p>
          <ul class="text-danger font-weight-bold">
            <li>Customer first.</li>
            <li>There is a wide choice (all banks in one roof)</li>
            <li>Easy and hastle free banking.</li>
            <li>Highly trusted.</li>
            <li>Safe and secure.</li>
            <li>Full Transparency in the process.</li>
          </ul>
        </div>
        <div class="col-md-6 col-sm-12">
          <img
            class="img-fluid"
            alt="about_mudransh"
            src="https://propertyadviser.in/assets/front/images/real-estate-news/s1/home-loan-benefits-for-women-in-india-742-s1.jpg"
          />
        </div>
      </div>
      <div class="row px-4 mt-5">
        <div class="col-12">
          <div class="d-flex mb-5">
            <div class="line-yellow align-self-center mr-3" />
            <div>
              <h1 class="mudransh-heading text-danger text-uppercase">
                List of services provided by Mudransh
              </h1>
            </div>
          </div>
        </div>
        <div class="col-12" v-if="isLoading">
          <div class="card border-0 border-none">
            <div class="card-body">
              <SkeletonLoader />
            </div>
          </div>
        </div>
        <template v-else>
          <div class="col-12" v-for="service in services" :key="service.id">
            <FeatureCard :feature="service" type="services" />
          </div>
        </template>
      </div>
      <div class="row px-4 mt-5">
        <div class="col-12">
          <div class="d-flex mb-5">
            <div class="line-yellow align-self-center mr-3" />
            <div>
              <h1 class="mudransh-heading text-danger text-uppercase">
                Have a question?
              </h1>
              <h4 class="text-muted">Here to help</h4>
            </div>
          </div>
        </div>
        <div class="col-md-5 col-sm-12">
          <img
            src="@/assets/images/photos/customer-support.png"
            class="img-fluid"
            alt="mudransh_support"
          />
        </div>
        <div class="col-md-7 col-sm-12">
          <p class="text-gray-darken">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            corporis aperiam rem veniam eos nulla eius voluptate veritatis
            explicabo itaque, optio, architecto velit, doloribus vel maxime
            perferendis eveniet. Facilis, nostrum.
          </p>
          <p class="text-gray-darken">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            corporis aperiam rem veniam eos nulla eius voluptate veritatis
            explicabo itaque, optio, architecto velit, doloribus vel maxime
            perferendis eveniet. Facilis, nostrum.
          </p>
          <p class="text-gray-darken">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
            quo.
          </p>
          <NuxtLink
            to="/contact"
            class="button button-1 button-1c bg-danger text-decoration-none text-white"
          >
            CONTACT NOW
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeatureCard from "@/components/Utils/FeatureCard";
import SkeletonLoader from "@/components/Utils/SkeletonLoader";
export default {
  components: { FeatureCard, SkeletonLoader },
  name: "MudranshServices",
  head() {
    return { title: `Mudransh | Services` };
  },
  loading: true,
  data: () => ({
    services: [],
    isLoading: false,
  }),
  methods: {
    async getAllServices() {
      this.isLoading = true;
      let { data } = await this.$axios("/wl/v1/services");
      this.services = data;
      this.isLoading = false;
    },
  },
  scrollToTop: true,
  created() {
    this.getAllServices();
  },
};
</script>

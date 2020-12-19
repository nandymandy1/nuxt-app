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
        <div class="col-md-6 col-sm-12">
          <p class="mudransh-text text-gray-darken">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad rerum
            maiores laboriosam adipisci nulla cupiditate in repudiandae et quo
            voluptate, a molestias sapiente? Sapiente facilis incidunt, atque
            repellendus corporis ea?
          </p>
          <p class="mudransh-text text-gray-darken">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            adipisci, in doloribus, dicta numquam ullam sint blanditiis aut
            officia doloremque impedit explicabo, accusamus iure. Debitis
            voluptatem dolore magni hic molestias minus ipsam, optio quas
            soluta.
          </p>
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
        <div class="col-">
          <div class="d-flex mb-5">
            <div class="line-yellow align-self-center mr-3" />
            <div>
              <h1 class="mudransh-heading text-danger text-uppercase">
                List of services provided by Mudransh
              </h1>
            </div>
          </div>
        </div>
        <Loader v-if="isLoading" />
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
          <p class="mudransh-text text-gray-darken">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            corporis aperiam rem veniam eos nulla eius voluptate veritatis
            explicabo itaque, optio, architecto velit, doloribus vel maxime
            perferendis eveniet. Facilis, nostrum.
          </p>
          <p class="mudransh-text text-gray-darken">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            corporis aperiam rem veniam eos nulla eius voluptate veritatis
            explicabo itaque, optio, architecto velit, doloribus vel maxime
            perferendis eveniet. Facilis, nostrum.
          </p>
          <p class="mudransh-text text-gray-darken">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
            quo.
          </p>
          <button class="btn btn-outline-danger px-5 font-weight-bold">
            CONTACT NOW
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Utils/Loader";
import FeatureCard from "@/components/Utils/FeatureCard";
export default {
  components: { FeatureCard, Loader },
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
  created() {
    this.getAllServices();
  },
};
</script>

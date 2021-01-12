<template>
  <div class="mudransh-features mt-5 py-5 container">
    <div class="row">
      <div class="col-12">
        <div
          class="d-flex justify-content-center align-items-center mb-5 mx-auto"
        >
          <Dots :length="14" />
          <h1 class="mudransh-heading text-center text-danger mx-4">
            {{ data.title }}
          </h1>
          <Dots :length="14" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <img
          :src="data.featured_image.large"
          class="img-fluid my-3 mb-5 mx-auto center rounded"
        />
      </div>
      <div class="col-12 ml-5">
        <div class="feature-content" v-html="data.content" />
        <button
          @click="modalShow = true"
          class="btn btn-outline-danger px-5 font-weight-bold"
        >
          BUY NOW
        </button>
        <button
          @click="addToCart"
          class="btn btn-outline-danger px-5 font-weight-bold"
        >
          ADD TO CART
        </button>
      </div>
    </div>
    <b-modal v-model="modalShow" centered size="lg">
      <template #modal-header>
        <h2 class="text-danger text-center px-3">Apply for {{ data.title }}</h2>
      </template>
      <template #default>
        <div class="row mb-4">
          <div class="requestProgress" v-if="loading">
            <div class="bar" />
          </div>
        </div>
        <div class="row px-3 mudransh-form">
          <div class="col-md-6 col-sm-12">
            <div class="form-group">
              <label for="firstname" class="text-danger font-weight-bold">
                Your First Name
              </label>
              <input
                type="text"
                id="firstname"
                class="form-control"
                placeholder="Your First Name"
                v-model="loanApplication.firstname"
              />
            </div>
            <div class="form-group">
              <label for="lastname" class="text-danger font-weight-bold">
                Your Last Name
              </label>
              <input
                type="text"
                id="lastname"
                class="form-control"
                placeholder="Your Last Name"
                v-model="loanApplication.lastname"
              />
            </div>
            <div class="form-group">
              <label for="email" class="text-danger font-weight-bold">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                class="form-control"
                v-model="loanApplication.email"
                placeholder="Your Email Address"
              />
            </div>
            <div class="form-group">
              <label for="contact" class="text-danger font-weight-bold">
                Your Contact
              </label>
              <input
                type="text"
                id="contact"
                class="form-control"
                v-model="loanApplication.contact"
                placeholder="Your Contact Number"
              />
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <img
              src="@/assets/images/photos/loan-applciation.png"
              alt="mudransh-loan-application"
              class="img-fluid"
            />
          </div>
        </div>
      </template>
      <template #modal-footer>
        <button
          @click="modalShow = false"
          class="btn btn-outline-danger px-5 py-1 font-weight-bold"
        >
          Cancel
        </button>
        <button
          @click="submitApplication"
          :disabled="applcationDisabled || loading"
          class="btn-custom-submit px-5 py-2 font-weight-bold"
        >
          Buy now
        </button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "ParticularFeatureContent",
  head() {
    return {
      title: `Mudransh | ${this.data.title}`,
    };
  },
  data: () => ({
    modalShow: false,
    loanApplication: {
      firstname: "",
      lastname: "",
      contact: "",
      email: "",
    },
    scrollToTop: true,
    message: "",
    loading: false,
    success: false,
  }),
  computed: {
    applcationDisabled() {
      let count = 0;
      for (let i in this.loanApplication) {
        if (this.loanApplication[i] === "") {
          count++;
        }
      }
      return !!count;
    },
  },
  async asyncData({ $axios, params }) {
    let { data } = await $axios.get(`/wl/v1/features/${params.id}`);
    return { data };
  },
  methods: {
    async submitApplication() {
      try {
        this.loading = true;
        let { loanApplication } = this;
        let formData = new FormData();
        for (let i in loanApplication) {
          formData.append(`your-${i}`, loanApplication[i]);
        }
        formData.append(`your-loantype`, this.data.title);
        let { data } = await this.$axios.post(
          "/contact-form-7/v1/contact-forms/127/feedback",
          formData
        );
        if (data.message.startsWith("Thank")) {
          this.message = `Your ${this.data.title} application has been successfully submitted. Our nearest Mudransh agent will soon contact you.`;
          this.success = true;
          this.loanApplication = {
            firstname: "",
            lastname: "",
            contact: "",
            email: "",
          };
          this.modalShow = false;
        } else {
          throw new Error(
            `Your application request for ${this.data.title} was not successfully sent. Please try again in a while.`
          );
        }
      } catch (err) {
        this.message = err.message;
        this.success = false;
      } finally {
        this.loading = false;
        setTimeout(() => {
          this.message = "";
          this.success = false;
        }, 5000);
      }
    },
    addToCart() {
      this.$store.commit("cart/ADD_PRODUCT", this.data);
    },
  },
};
</script>
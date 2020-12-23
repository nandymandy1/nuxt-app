<template>
  <div class="testimonial-card">
    <div class="card bg-dark text-white">
      <img
        class="card-img"
        :src="testimonial.featured_image.thumbnail"
        :alt="`mudransh-${testimonial.slug}`"
      />
      <div class="card-img-overlay">
        <!-- :to="`/testimonials/${testimonial.slug}`" -->
        <button
          @click="showModal = true"
          class="btn btn-fab btn-fab-danger text-white d-flex justify-content-center align-items-center"
        >
          <img
            class="img-fluid"
            alt="mudransh_play_icon"
            :style="{ height: '15px' }"
            src="@/assets/images/icons/play.png"
          />
        </button>
      </div>
    </div>
    <h3 class="text-white text-center mt-4 testimonial-title">
      {{ testimonial.title }}
    </h3>
    <h5 class="text-white text-center testimonial-sub-title">
      {{ testimonial.customer_type }}
    </h5>
    <b-modal v-model="showModal" centered size="lg">
      <template #default>
        <div class="row px-3">
          <div class="col-md-3 col-sm-12">
            <div class="text-center mb-2">
              <img
                class="img-fluid"
                :alt="`mudransh-${testimonial.slug}`"
                :src="testimonial.featured_image.thumbnail"
              />
            </div>
            <h4 class="text-danger text-center">{{ testimonial.title }}</h4>
            <h6 class="text-yellow text-center">
              <span class="text-danger">{{ testimonial.customer_type }}</span>
            </h6>
          </div>
          <div class="col-md-9 col-sm-12" v-if="isLoading">
            <SkeletonLoader />
          </div>
          <div class="col-md-9 col-sm-12" v-else>
            <div v-html="content" />
          </div>
        </div>
      </template>
      <template #modal-footer>
        <button
          @click="showModal = false"
          class="btn-custom-submit px-5 py-2 font-weight-bold"
        >
          Close
        </button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import SkeletonLoader from "./SkeletonLoader";
export default {
  components: { SkeletonLoader },
  name: "TestimonialCard",
  props: {
    testimonial: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    content: "",
    isLoading: false,
    showModal: false,
  }),
  methods: {
    async fetchContent() {
      this.isLoading = true;
      let { data } = await this.$axios.get(
        "/wl/v1/testimonials/" + this.testimonial.slug
      );
      this.content = data.content;
      this.isLoading = false;
    },
  },
  watch: {
    showModal() {
      if (this.showModal && !this.content) {
        this.fetchContent();
      }
    },
  },
};
</script>

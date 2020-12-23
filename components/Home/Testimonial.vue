<template>
  <section class="testimonials bg-testimonial py-5">
    <div class="container py-5 mt-3">
      <div class="row">
        <div
          class="col-md-4 col-sm-12"
          v-for="testimonial in testimonials"
          :key="testimonial.id"
        >
          <TestimonialCard :testimonial="testimonial" />
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-6 col-sm-12">
          <h2 class="testimonial-section-caption text-white">
            SOME OF THE MANY <span class="testimonial-span">SMILES</span> WE’VE
            REINFORCED
          </h2>
        </div>
        <div
          class="col-md-6 col-sm-12 d-flex flex-column justify-content-center px-5"
        >
          <button class="btn btn-block btn-outline-white">
            MEET OUR CUSTOMERS
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TestimonialCard from "../Utils/Testimonialcard";
export default {
  name: "AppTestimonial",
  components: { TestimonialCard },

  data: () => ({
    testimonials: [],
  }),
  methods: {
    async fetchTestimonials() {
      let { data } = await this.$axios("wl/v1/recent-testimonials");
      this.testimonials = data;
    },
  },
  created() {
    this.fetchTestimonials();
  },
};
</script>

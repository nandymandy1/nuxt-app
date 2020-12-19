<template>
  <div class="testimonial-card">
    <div class="card bg-dark text-white">
      <img
        class="card-img"
        :src="testimonial.featured_image.thumbnail"
        :alt="`mudransh-${testimonial.slug}`"
      />
      <div class="card-img-overlay">
        <NuxtLink
          class="btn btn-fab btn-fab-danger text-white d-flex justify-content-center align-items-center"
          :to="`/testimonials/${testimonial.slug}`"
        >
          <img
            class="img-fluid"
            alt="mudransh_play_icon"
            :style="{ height: '15px' }"
            src="@/assets/images/icons/play.png"
          />
        </NuxtLink>
      </div>
    </div>
    <h3 class="text-white text-center mt-4 testimonial-title">
      {{ testimonial.title }}
    </h3>
    <h5 class="text-white text-center testimonial-sub-title">
      {{ testimonial.customer_type }}
    </h5>
  </div>
</template>

<script>
export default {
  name: "TestimonialCard",
  props: {
    testimonial: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="card team-card bg-light mb-5">
    <div class="card-body">
      <div class="row">
        <div class="col-md-7">
          <h2 class="text-danger font-weight-bold">{{ feature.title }}</h2>
          <p class="text-muted">
            {{ feature.excerpt }}
          </p>
          <div class="d-flex justify-content-start align-items-center">
            <NuxtLink
              class="button button-1 button-1c bg-danger text-decoration-none text-white"
              :to="`/${type}/${feature.slug}`"
            >
              READ MORE
            </NuxtLink>
            <button class="button button-1 button-1c bg-yellow ml-1">
              APPLY NOW
            </button>
          </div>
        </div>
        <div class="col-md-5">
          <img
            class="img-fluid feature-img"
            :alt="`mudransh-${feature.slug}`"
            :src="feature.featured_image.large"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    feature: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    showModal: false,
  }),
};
</script>

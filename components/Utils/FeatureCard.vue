<template>
  <div class="card team-card bg-light mb-5">
    <div class="card-body">
      <div class="row">
        <div class="col-md-7">
          <h2 class="text-danger font-weight-bold">{{ feature.title }}</h2>
          <p class="text-muted">
            {{ feature.excerpt }}
          </p>
          <NuxtLink
            :to="`/${type}/${feature.slug}`"
            class="btn btn-outline-danger px-5 font-weight-bold mb-3"
          >
            READ MORE
          </NuxtLink>
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
};
</script>

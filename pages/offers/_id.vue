<template>
  <div class="mudransh-features mt-5 py-5 container">
    <div class="row mt-3">
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
      <div class="col-md-4 col-sm-12">
        <img :src="data.featured_image.large" class="img-fluid" />
      </div>
      <div class="col-md-8 col-sm-12">
        <div class="feature-content" v-html="data.content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Offer",
  head() {
    return {
      title: `Mudransh | ${this.data.title}`,
    };
  },
  async asyncData({ $axios, params }) {
    let { data } = await $axios.get(`/wl/v1/offers/${params.id}`);
    return { data };
  },
};
</script>

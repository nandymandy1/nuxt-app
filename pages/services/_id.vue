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
      <div class="col-12">
        <div class="text-center">
          <img :src="data.featured_image.large" class="img-fluid" />
        </div>
        <div class="px-md-5 mt-5 text-wrap" v-html="data.content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Mudransh | ${this.data.title}`,
    };
  },
  async asyncData({ $axios, params }) {
    let { data } = await $axios.get(`/wl/v1/services/${params.id}`);
    return {
      data,
    };
  },
  scrollToTop: true,
  name: "ParticularServiceContent",
};
</script>

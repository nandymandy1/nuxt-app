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
      <div class="col-12 text-center">
        <img
          :src="data.featured_image.large"
          class="img-fluid my-3 mb-5 mx-auto center rounded"
        />
      </div>
      <div class="col-12 ml-5">
        <div class="feature-content" v-html="data.content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ParticularBlogContent",
  head() {
    return {
      title: `Mudransh | ${this.data.title}`,
    };
  },
  scrollToTop: true,
  async asyncData({ $axios, params }) {
    let { data } = await $axios.get(`/wl/v1/posts/${params.id}`);
    return { data };
  },
};
</script>

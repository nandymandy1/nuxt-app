<template>
  <div class="mudransh-carousel mt-5 pt-5">
    <br />
    <b-carousel
      controls
      indicators
      id="carousel-1"
      :interval="4000"
      img-width="1024"
      img-height="480"
      background="#ababab"
      v-if="banners.length"
      style="text-shadow: 1px 1px 2px #333"
    >
      <b-carousel-slide v-for="banner in banners" :key="banner.id">
        <template #img>
          <img
            width="1024"
            height="480"
            alt="image slot"
            class="d-block img-fluid w-100"
            :src="banner.featured_image.large"
          />
        </template>
        <h3>{{ banner.title }}</h3>
        <div v-html="banner.content" />
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "MudranshCarousel",
  data: () => ({
    banners: [],
  }),
  methods: {
    async fetchBanners() {
      let { data } = await this.$axios.get("/wl/v1/banners");
      this.banners = data;
    },
  },
  created() {
    this.fetchBanners();
  },
};
</script>

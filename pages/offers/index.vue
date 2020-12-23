<template>
  <div class="mudransh-offers mt-5 py-5 bg-white">
    <div class="container mt-5">
      <div class="d-flex justify-content-center align-items-center mb-5">
        <Dots :length="15" />
        <h1 class="mudransh-heading text-center text-danger mx-4">
          OUR OFFERS
        </h1>
        <Dots :length="15" />
      </div>
      <div class="row px-4 mt-5">
        <div class="col-12" v-if="loading">
          <div class="card loan-card">
            <div class="card-body">
              <SkeletonLoader />
            </div>
          </div>
        </div>
        <div class="col-12" v-for="post in posts" :key="post.id">
          <OfferCard :feature="post" type="offers" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OfferCard from "@/components/Utils/OfferCard";
import SkeletonLoader from "@/components/Utils/SkeletonLoader";
export default {
  components: { OfferCard, SkeletonLoader },
  name: "MudranshOffers",
  head() {
    return { title: `Mudransh | Offers` };
  },
  data: () => ({
    posts: [],
    loading: false,
  }),
  scrollToTop: true,
  methods: {
    async getAllPosts() {
      this.loading = true;
      let { data } = await this.$axios("/wl/v1/offers");
      this.posts = data;
      this.loading = false;
    },
  },
  created() {
    this.getAllPosts();
  },
};
</script>

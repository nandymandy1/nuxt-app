<template>
  <div class="mudransh-features py-5 my-5">
    <div class="container">
      <div class="d-flex justify-content-center align-items-center mb-5">
        <Dots :length="15" />
        <h1 class="mudransh-heading text-center text-danger mx-4">
          OUR PRODUCTS
        </h1>
        <Dots :length="15" />
      </div>
      <p class="text-center text-muted mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum facere
        esse inventore velit excepturi quo ut eos dolor enim repudiandae iste.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odit
        facere similique delectus qui mollitia.
      </p>
      <div class="col-12" v-if="isLoading">
        <div class="card loan-card">
          <div class="card-body">
            <SkeletonLoader />
          </div>
        </div>
      </div>
      <FeatureCard
        v-for="feature in features"
        :key="feature.id"
        :feature="feature"
        type="features"
      />
    </div>
  </div>
</template>

<script>
import FeatureCard from "@/components/Utils/FeatureCard";
import SkeletonLoader from "@/components/Utils/SkeletonLoader";
export default {
  name: "MudranshFeatures",
  components: { FeatureCard, SkeletonLoader },
  data: () => ({
    features: [],
    isLoading: false,
  }),
  head() {
    return {
      title: `Mudransh | Features`,
    };
  },
  scrollToTop: true,
  methods: {
    async getFeatures() {
      this.isLoading = true;
      let { data } = await this.$axios("/wl/v1/features");
      this.features = data;
      this.isLoading = false;
    },
  },
  created() {
    this.getFeatures();
  },
};
</script>

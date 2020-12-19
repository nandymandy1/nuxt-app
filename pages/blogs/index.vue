<template>
  <div class="mudransh-services py-5 my-5">
    <div class="container mt-5">
      <div class="d-flex justify-content-center align-items-center mb-5">
        <Dots :length="15" />
        <h1 class="mudransh-heading text-center text-danger mx-4">OUR BLOGS</h1>
        <Dots :length="15" />
      </div>
      <div class="row px-4 mt-5">
        <div class="col-12" v-for="post in posts" :key="post.id">
          <FeatureCard :feature="post" type="blogs" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeatureCard from "@/components/Utils/FeatureCard";
export default {
  components: { FeatureCard },
  name: "MudranshBlogs",
  head() {
    return { title: `Mudransh | Blogs` };
  },
  loading: true,
  data: () => ({
    posts: [],
  }),
  methods: {
    async getAllPosts() {
      let { data } = await this.$axios("/wl/v1/posts");
      this.posts = data;
    },
  },
  created() {
    this.getAllPosts();
  },
};
</script>

<template>
  <section class="latest-blogs py-5 bg-light-gray">
    <div class="container">
      <div class="d-flex justify-content-center align-items-center mb-5">
        <Dots :length="10" />
        <h1 class="mudransh-heading text-center text-danger mx-4">
          BLOGS AREA STORIES
        </h1>
        <Dots :length="10" />
      </div>
      <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
      <div class="d-flex justify-content-center align-items-center">
        <button class="btn btn-outline-danger px-5 font-weight-bold">
          READ MORE +
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Dots from "../Utils/Dots";
import BlogCard from "../Utils/BlogsCard";
export default {
  name: "LatestBlogs",
  components: {
    Dots,
    BlogCard,
  },
  data: () => ({
    blogs: [],
  }),
  methods: {
    async getBlogs() {
      let { data } = await this.$axios("wl/v1/recent-posts");
      this.blogs = data;
    },
  },
  created() {
    this.getBlogs();
  },
};
</script>

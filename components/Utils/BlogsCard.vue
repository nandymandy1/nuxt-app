<template>
  <div class="blogs-card mb-5">
    <div class="card blog-card p-0">
      <div class="row">
        <div class="col-md-5 col-sm-12 h-100">
          <img
            class="img-fluid"
            :alt="`mudransh-${blog.slug}`"
            :src="blog.featured_image.large"
          />
        </div>
        <div class="col-md-7 col-sm-12 px-5 py-4">
          <h3 class="text-white blog-card-heading">
            {{ blog.title }}
          </h3>
          <h5 class="blog-card-subtitle">Posted on 2 Jan, 2020</h5>
          <div v-html="blog.excerpt" />
          <NuxtLink
            :to="`/blog/${blog.slug}`"
            class="text-yellow blog-link mt-5"
          >
            Read More
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
};
</script>

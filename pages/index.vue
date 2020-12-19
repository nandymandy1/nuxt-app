<template>
  <div>
    <AppCarousel />
    <Testimonial />
    <LatestBlogs />
    <HomeContact />
  </div>
</template>

<script>
import AppCarousel from "@/components/Home/Carousel";
import Testimonial from "@/components/Home/Testimonial";
import LatestBlogs from "@/components/Home/LatestBlogs";
import HomeContact from "@/components/Home/Contact";
export default {
  name: "HomePage",
  loading: false,
  components: {
    AppCarousel,
    Testimonial,
    LatestBlogs,
    HomeContact,
  },
};
</script>

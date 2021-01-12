<template>
  <div>
    <AppCarousel />
    <CBill />
    <PseLoan />
    <FinancialFriend />
    <WorkWithUs />
    <Testimonial />
    <!-- <LatestBlogs /> -->
    <Partners />
    <HomeContact />
  </div>
</template>

<script>
import CBill from "@/components/Home/CBill";
import WorkWithUs from "@/components/Home/WWU";
import Partners from "@/components/Home/Partners";
import HomeContact from "@/components/Home/Contact";
import PseLoan from "@/components/Home/PhoneSayLoan";
import AppCarousel from "@/components/Home/Carousel";
import Testimonial from "@/components/Home/Testimonial";
// import LatestBlogs from "@/components/Home/LatestBlogs";
import FinancialFriend from "@/components/Home/FinancialFriend";
export default {
  name: "HomePage",
  loading: false,
  scrollToTop: true,
  components: {
    CBill,
    PseLoan,
    Partners,
    WorkWithUs,
    AppCarousel,
    Testimonial,
    // LatestBlogs,
    HomeContact,
    FinancialFriend,
  },
  // created() {
  //   this.$store.commit("cart/SET_CART");
  // },
};
</script>

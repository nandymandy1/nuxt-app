<template>
  <div>
    <Navbar />
    <Nuxt />
    <Quick />
    <Footer />
  </div>
</template>
<script>
import Quick from "./_partials/Quick";
import Navbar from "./_partials/Navbar";
import Footer from "./_partials/Footer";
export default {
  components: { Navbar, Footer, Quick },
};
</script>
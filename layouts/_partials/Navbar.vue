<template>
  <div class="mudransh-navbar">
    <b-navbar
      type="light"
      toggleable="lg"
      variant="light"
      class="py-4 fixed-top"
    >
      <div class="container">
        <b-navbar-brand href="/">
          <img
            height="40px"
            alt="mudransh_logo"
            src="@/assets/images/icons/logo.png"
          />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse" />
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <li class="nav-item">
              <NuxtLink class="nav-link mr-2" to="/">Home</NuxtLink>
            </li>
            <!-- <li class="nav-item">
              <NuxtLink class="nav-link mr-2" to="/services">Services</NuxtLink>
            </li> -->
            <li class="nav-item">
              <NuxtLink class="nav-link mr-2" to="/about">About Us</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link mr-2" to="/offers">Our Offers</NuxtLink>
            </li>
            <b-nav-item-dropdown text="Products" right class="mr-2">
              <NuxtLink class="dropdown-item" to="/features">
                All Products
              </NuxtLink>
              <NuxtLink
                v-for="feature in features"
                :to="`/features/${feature.slug}`"
                class="dropdown-item"
                :key="feature.id"
              >
                {{ feature.title }}
              </NuxtLink>
            </b-nav-item-dropdown>
            <li class="nav-item">
              <NuxtLink class="nav-link mr-2" to="/cart">
                <span
                  v-if="$store.getters['cart/cartQty']"
                  class="badge badge-pill badge-danger"
                  :style="{ float: 'right', marginBottom: '-10px' }"
                  >{{ $store.getters["cart/cartQty"] }}
                </span>
                Cart
              </NuxtLink>
            </li>
            <!-- <li class="nav-item">
              <NuxtLink class="nav-link mr-2" to="/blogs"> Blogs </NuxtLink>
            </li> -->
            <li class="nav-item">
              <NuxtLink class="nav-link mr-2" to="/contact">
                Contact Us
              </NuxtLink>
            </li>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    features: [],
    services: [],
  }),
  methods: {
    async fetchAllFeatures() {
      let { data } = await this.$axios.get("/wl/v1/features-list");
      this.features = data;
    },
    async fetchAllServices() {
      let { data } = await this.$axios.get("/wl/v1/services-list");
      this.services = data;
    },
  },
  mounted() {
    this.$store.commit("cart/SET_CART");
    this.fetchAllFeatures();
    this.fetchAllServices();
  },
};
</script>

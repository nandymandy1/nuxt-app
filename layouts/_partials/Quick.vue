<template>
  <div
    class="quick-section bg-red py-5 d-flex justify-content-around text-white"
  >
    <div class="align-self-center d-flex flex-wrap">
      <NuxtLink class="quick-link" to="/faqs">FAQ's</NuxtLink>
      <!-- <NuxtLink class="quick-link" to="/stories">Success Stories</NuxtLink> -->
      <!-- <NuxtLink class="quick-link" to="/media">Media</NuxtLink> -->
      <NuxtLink class="quick-link" to="/work">Careers</NuxtLink>
    </div>
    <div class="align-self-center d-flex">
      <img
        class="align-self-center"
        :style="{ height: '45px' }"
        src="@/assets/images/icons/tel-white.png"
      />
      <a href="tel:05223574076" class="align-self-center quick-link-none">
        + (0522) 357 4076
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quick",
};
</script>

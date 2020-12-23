<template>
  <section class="work-with-us">
    <div class="d-flex">
      <div class="bg-yellow px-5 py-2">
        <h1 class="mudransh-heading text-danger text-uppercase">
          WORK WITH US
        </h1>
      </div>
      <div
        class="bg-danger flex-grow-1 d-flex justify-content-between align-items-center px-5"
      >
        <h2 class="text-white text-yellow">
          Want to know more about our working style.
        </h2>
        <NuxtLink
          to="/work"
          class="btn btn-lg btn-outline-warning align-self-center"
        >
          Join Us
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WorkWithUs",
};
</script>

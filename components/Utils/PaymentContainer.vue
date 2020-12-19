<template>
  <div
    class="px-4 py-2 d-flex justify-content-center align-items-center payment-containers mr-2"
  >
    <img
      :src="src"
      class="img-fluid"
      alt="master-card"
      :style="{ height: height }"
    />
  </div>
</template>

<script>
export default {
  name: "paymentContainer",
  props: {
    height: {
      type: String,
      default: "40px",
    },
    src: {
      type: String,
      required: true,
    },
  },
};
</script>

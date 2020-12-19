<template>
  <div class="d-flex align-self-center">
    <div class="yellow-dot align-self-center" v-for="i in length" :key="i" />
  </div>
</template>

<script>
export default {
  name: "headingDots",
  props: {
    length: {
      type: Number,
      required: true,
    },
  },
};
</script>

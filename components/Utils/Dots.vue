<template>
  <div class="d-flex align-self-center">
    <div class="yellow-dot align-self-center" v-for="i in dots" :key="i" />
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
  computed: {
    dots() {
      if (process.client) {
        if (screen.width < 640) {
          return 3;
        } else {
          return this.length;
        }
      } else {
        return this.length;
      }
    },
  },
};
</script>

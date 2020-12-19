<template>
  <div class="team-card card">
    <div class="row py-5">
      <div class="col-4 mx-auto">
        <img
          height="250px"
          class="img-fluid avatar-img"
          :alt="`mudransh-${member.slug}`"
          :src="member.featured_image.thumbnail"
        />
      </div>
    </div>
    <div class="row pb-2 px-3">
      <div class="col-12 mb-1">
        <h3 class="mudransh-card-heading text-center text-danger">
          {{ member.title }}
        </h3>
        <p class="text-center text-gray-darken">
          {{ member.excerpt }}
        </p>
        <p class="social-icons text-center social-links">
          <a
            class="mr-2"
            target="_blank"
            v-if="member.facebook"
            :href="member.facebook"
            ><fa :icon="['fab', 'facebook']"
          /></a>
          <a
            class="mr-2"
            target="_blank"
            v-if="member.linked_in"
            :href="member.linked_in"
            ><fa :icon="['fab', 'linkedin']"
          /></a>
          <a
            class="mr-2"
            target="_blank"
            v-if="member.twitter"
            :href="member.twitter"
            ><fa :icon="['fab', 'twitter']"
          /></a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamCard",
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
};
</script>

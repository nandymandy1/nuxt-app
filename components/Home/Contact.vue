<template>
  <section class="home-contact bg-white py-5">
    <div class="container my-5">
      <div class="d-flex mb-5">
        <div class="line-yellow align-self-center mr-3" />
        <h1 class="mudransh-heading text-danger">LET'S BUILD A CONVERSATION</h1>
      </div>
      <form class="d-flex justify-content-around quick-contact" @submit.prevent>
        <div class="form-group d-flex">
          <img
            alt="user-icon"
            :style="{ height: '35px' }"
            class="align-self-center mr-3 mb-1"
            src="@/assets/images/icons/user-contact.png"
          />
          <input
            type="text"
            v-model="user.name"
            placeholder="Full Name"
            class="py-1 flex-grow-1 form-mudransh"
          />
        </div>
        <div class="form-group d-flex">
          <img
            alt="phone-icon"
            class="align-self-center mr-3"
            src="@/assets/images/icons/phone-call.png"
          />
          <input
            type="text"
            v-model="user.contact"
            placeholder="Phone Number"
            class="mt-2 py-1 flex-grow-1 form-mudransh"
          />
        </div>
      </form>
      <div class="d-flex justify-content-center align-items-center mt-5">
        <button
          class="button button-1 button-1c bg-danger text-decoration-none text-white py-3"
        >
          SUBMIT
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeContact",
  data: () => ({
    user: {
      name: "",
      contact: "",
    },
  }),
};
</script>

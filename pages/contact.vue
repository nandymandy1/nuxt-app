<template>
  <div class="mudransh-contact pt-5 mt-5 bg-light-gray">
    <div class="wrapper py-5">
      <div class="inner">
        <form @submit.prevent="submitContact">
          <h3 class="text-yellow mudransh-text">Contact Us</h3>
          <p class="text-white">
            Communication is the only tool to convey your message to us. Feel
            free to contact us at any time
          </p>
          <label class="form-group">
            <input
              required
              type="text"
              v-model="contact.name"
              class="form-control"
            />
            <span>Your Name</span>
            <span class="border"></span>
          </label>
          <label class="form-group">
            <input
              required
              type="text"
              v-model="contact.contact"
              class="form-control"
            />
            <span for="">Your Contact Number</span>
            <span class="border"></span>
          </label>
          <label class="form-group">
            <input
              type="email"
              v-model="contact.email"
              class="form-control"
              required
            />
            <span for="">Your Mail</span>
            <span class="border"></span>
          </label>
          <label class="form-group">
            <input
              type="text"
              v-model="contact.subject"
              class="form-control"
              required
            />
            <span for="">Your Subject</span>
            <span class="border"></span>
          </label>
          <label class="form-group">
            <textarea
              name=""
              id=""
              rows="30"
              class="form-control"
              required
              v-model="contact.message"
            ></textarea>
            <span for="">Your Message</span>
            <span class="border"></span>
          </label>
          <button type="submit">
            Submit
            <i class="zmdi zmdi-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mudranshContact",
  data: () => ({
    contact: {
      name: "",
      email: "",
      message: "",
      contact: "",
      subject: "",
    },
  }),
  methods: {
    async submitContact() {
      let formData = new FormData();
      for (let i in this.contact) {
        formData.append(`your-${i}`, this.contact[i]);
      }
      let { data } = await this.$axios.post(
        "/contact-form-7/v1/contact-forms/5/feedback",
        formData
      );
      console.log("CONTACT_RESPONSE", data);
    },
  },
};
</script>
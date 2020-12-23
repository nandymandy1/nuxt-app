<template>
  <div class="pt-5 mt-5 py-5 bg-light-gray contact-section">
    <div class="mt-5">
      <div class="row">
        <div class="col-md-6 col-sm-12 ml-auto">
          <div v-if="message">
            <div class="alert alert-success" v-if="success && message">
              <p>{{ message }}</p>
            </div>
            <div class="alert alert-danger" v-else>
              <p>
                {{ message }}
              </p>
            </div>
          </div>
          <div class="card bg-danger border-none border-0">
            <div class="card-body">
              <form @submit.prevent="submitContact" class="mudransh-form">
                <div class="row">
                  <div class="col-md-6 col-sm-12 form-group">
                    <label for="name" class="text-yellow font-weight-bold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      v-model="contact.name"
                      placeholder="Your Name"
                      class="form-control"
                      id="name"
                    />
                  </div>
                  <div class="col-md-6 col-sm-12 form-group">
                    <label for="email" class="text-yellow font-weight-bold">
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="Your Mailing Address"
                      class="form-control"
                      id="email"
                      v-model="contact.email"
                    />
                  </div>
                  <div class="col-md-6 col-sm-12 form-group">
                    <label for="contact" class="text-yellow font-weight-bold"
                      >Your Contact Number</label
                    >
                    <input
                      type="text"
                      placeholder="Your Contact Number"
                      class="form-control"
                      id="contact"
                      v-model="contact.contact"
                    />
                  </div>
                  <div class="col-md-6 col-sm-12 form-group">
                    <label for="subject" class="text-yellow font-weight-bold">
                      Your Message Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Your Message Subject"
                      class="form-control"
                      id="subject"
                      v-model="contact.subject"
                    />
                  </div>
                  <div class="col-md-6 col-sm-12 form-group">
                    <label for="message" class="text-yellow font-weight-bold">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="10"
                      class="form-control"
                      v-model="contact.message"
                      placeholder="Your Message Goes here..."
                    ></textarea>
                  </div>
                  <div class="col-md-6 col-sm-12 form-group">
                    <div class="text-center pt-3">
                      <img
                        class="img-fluid"
                        :style="{ height: '300px' }"
                        alt="mudransh-contact-image"
                        src="@/assets/images/photos/contact-mail.png"
                      />
                    </div>
                  </div>
                  <div class="col-12 mt-3">
                    <div class="text-center" v-if="loading">
                      <bSpinner variant="warning" label="Spinning" />
                    </div>
                    <button v-else type="submit">
                      Submit
                      <i class="zmdi zmdi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
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
    loading: false,
    message: "",
    success: false,
  }),
  scrollToTop: true,
  methods: {
    async submitContact() {
      try {
        this.loading = true;
        let formData = new FormData();
        for (let i in this.contact) {
          formData.append(`your-${i}`, this.contact[i]);
        }
        let { data } = await this.$axios.post(
          "/contact-form-7/v1/contact-forms/5/feedback",
          formData
        );
        if (data.message.startsWith("Thank")) {
          this.message =
            "Your request to become a Mudransh Agent is successfully sent. We will soon contact you.";
          this.success = true;
          this.contact = {
            name: "",
            email: "",
            message: "",
            contact: "",
            subject: "",
          };
        } else {
          throw new Error(
            "Your request to become a Mudransh Agent is not successfully sent. Please try again in a while."
          );
        }
      } catch (err) {
        this.message = err.message;
        this.success = false;
      } finally {
        this.loading = false;
        setTimeout(() => {
          this.message = "";
          this.success = false;
        }, 5000);
      }
    },
  },
};
</script>
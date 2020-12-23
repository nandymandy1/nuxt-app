<template>
  <section class="work-with-us mt-5 py-5">
    <div class="container">
      <div class="row mt-5">
        <div class="col-12">
          <div class="d-flex mb-5">
            <div class="line-yellow align-self-center mr-3" />
            <div>
              <h1 class="mudransh-heading text-danger text-uppercase">
                WORK WITH US
              </h1>
            </div>
          </div>
        </div>
        <div class="col-md-5 col-sm-12">
          <img
            class="img-fluid mb-4"
            alt="mudransh-team-work"
            src="@/assets/images/photos/team.png"
          />
          <p class="w-w-u-text">
            As it is rightly said that
            <b>
              <i> "Alone we can do so little, together we can do so much." </i>
            </b>
            We strongly believe in the concept of buidling highly efficient and
            competitive teams, to provide the maximum benefits to our customer
            with ease.
          </p>
          <p class="w-w-u-text">
            We want to bring all banks and thier services under single roof to
            cater the needs of our customers.
          </p>
          <p class="w-w-u-text">
            We want to build a better communication with our customers.
          </p>
        </div>
        <div class="col-md-7 col-sm-12">
          <img
            src="@/assets/images/photos/work-with-us.png"
            class="img-fluid"
            alt=""
          />
        </div>
      </div>
      <h3 class="text-danger font-helvatica-bold">Want to join our team?</h3>
      <div class="row">
        <div class="col-md-6 col-sm-12">
          We provide
          <span class="text-danger">
            PAN India Aggregator and DSA (Direct Sales Agent)
          </span>
          joining programs.
        </div>
        <div class="col-12 mt-4">
          <h5 class="text-danger">What is PAN India Aggregator?</h5>
          <p>
            This program is created by Mudrash Planning team in order to spread
            our services to customers' reach. Application Process is simple and
            easy, all you need is just a work-space and staff of 2-3 employees
            to handle the customer queries and do all the paper work.
          </p>
        </div>
        <div class="col-12 mt-4">
          <h5 class="text-danger">What is Direct Sales Angent (DSA)?</h5>
          <p>
            DSA is a company agent which represents the Mudransh Finance
            Services to the people and build trust with people. Application
            process is easy and simple. All you need is the following documents
            and
          </p>
          <ul>
            <li>Adhaar Card</li>
            <li>PAN Card</li>
            <li>2 Passport Size Photographs</li>
            <li>Agreement Declaration in Rupees 100 Stamp with Notary</li>
          </ul>
        </div>
      </div>
    </div>
    <section class="bg-light-gray py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 mt-4" v-if="message">
            <div class="alert alert-success" v-if="success && message">
              <p>{{ message }}</p>
            </div>
            <div class="alert alert-danger" v-else>
              <p>
                {{ message }}
              </p>
            </div>
          </div>
          <div class="col-md-12 mt-2">
            <div class="card bg-danger border-none border-0">
              <div class="card-body">
                <h3 class="text-yellow font-size-large">Apply Now</h3>
                <form @submit.prevent="applyForAgent">
                  <div class="row mt-4 mudransh-form">
                    <div class="col-md-6 col-sm-12 form-group">
                      <label for="name" class="text-yellow font-weight-bold">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstname"
                        v-model="agent.firstname"
                        class="form-control"
                        placeholder="Your First Name"
                      />
                    </div>
                    <div class="col-md-6 col-sm-12 form-group">
                      <label
                        for="lastname"
                        class="text-yellow font-weight-bold"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastname"
                        v-model="agent.lastname"
                        class="form-control"
                        placeholder="Your Last Name"
                      />
                    </div>
                    <div class="col-md-6 col-sm-12 form-group">
                      <label for="contact" class="text-yellow font-weight-bold">
                        Contact Number
                      </label>
                      <input
                        type="text"
                        id="contact"
                        class="form-control"
                        v-model="agent.contact"
                        placeholder="+91 000-000-0000"
                      />
                    </div>
                    <div class="col-md-6 col-sm-12 form-group">
                      <label
                        for="location"
                        class="text-yellow font-weight-bold"
                      >
                        City (District)
                      </label>
                      <input
                        type="text"
                        id="location"
                        v-model="agent.city"
                        class="form-control"
                        placeholder="Your City/District Name"
                      />
                    </div>
                    <div class="col-md-6 col-sm-12 form-group">
                      <label for="email" class="text-yellow font-weight-bold">
                        Your Mailing Address
                      </label>
                      <input
                        id="email"
                        type="text"
                        v-model="agent.email"
                        class="form-control"
                        placeholder="someone@example.com"
                      />
                    </div>
                    <div class="col-12 mt-5">
                      <div class="text-center" v-if="loading">
                        <bSpinner variant="warning" label="Spinning" />
                      </div>
                      <button type="submit" v-else>
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
    </section>
  </section>
</template>

<script>
export default {
  name: "WorkWithUs",
  data: () => ({
    agent: {
      city: "",
      email: "",
      contact: "",
      lastname: "",
      firstname: "",
    },
    loading: false,
    message: "",
    success: false,
  }),
  methods: {
    async applyForAgent() {
      try {
        let formData = new FormData();
        for (let i in this.agent) {
          formData.append(`your-${i}`, this.agent[i]);
        }
        this.loading = true;
        let { data } = await this.$axios.post(
          "/contact-form-7/v1/contact-forms/73/feedback",
          formData
        );

        if (data.message.startsWith("Thank")) {
          this.message =
            "Your request to become a Mudransh Agent is successfully sent. We will soon contact you.";
          this.success = true;
          this.agent = {
            city: "",
            email: "",
            contact: "",
            lastname: "",
            firstname: "",
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
  scrollToTop: true,
};
</script>
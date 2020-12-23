<template>
  <div class="mudransh-emi-calculator my-5 py-5">
    <div class="container mt-5">
      <div class="d-flex justify-content-center align-items-center mb-5">
        <Dots :length="15" />
        <h1 class="mudransh-heading text-center text-danger mx-4">
          EMI Calculator
        </h1>
        <Dots :length="15" />
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
                <h3 class="text-yellow font-size-large">
                  Get your Loan Estimates
                </h3>
                <form @submit.prevent="calculateEmis">
                  <div class="row mt-4 mudransh-form">
                    <div class="col-md-6 col-sm-12 form-group">
                      <label for="contact" class="text-yellow font-weight-bold">
                        Your Contact Number
                      </label>
                      <input
                        min="0"
                        id="contact"
                        type="text"
                        v-model="contact"
                        class="form-control"
                        placeholder="Your Contact Number"
                      />
                    </div>
                    <div class="col-md-6 col-sm-12 form-group">
                      <label for="amount" class="text-yellow font-weight-bold">
                        Your Email
                      </label>
                      <input
                        min="0"
                        id="email"
                        type="email"
                        v-model="email"
                        class="form-control"
                        placeholder="Your Mailing Address"
                      />
                    </div>
                    <div class="col-md-6 col-sm-12 form-group">
                      <label for="amount" class="text-yellow font-weight-bold">
                        Amount Needed?
                      </label>
                      <input
                        min="0"
                        id="amount"
                        type="number"
                        v-model="amount"
                        class="form-control"
                        placeholder="Your Required Amount"
                      />
                    </div>
                    <div class="col-md-6 col-sm-12 form-group">
                      <label for="time" class="text-yellow font-weight-bold">
                        Your Loan Term
                      </label>
                      <input
                        min="0"
                        id="time"
                        type="number"
                        v-model="time"
                        class="form-control"
                        placeholder="Your Loan Term"
                      />
                    </div>
                    <div class="col-md-6 col-sm-12 form-group">
                      <label for="rate" class="text-yellow font-weight-bold">
                        Rate of Loan
                      </label>
                      <input
                        min="0"
                        id="rate"
                        step="any"
                        type="number"
                        v-model="rate"
                        class="form-control"
                        placeholder="10.9"
                      />
                    </div>
                    <div class="col-md-6 col-sm-12 form-group">
                      <div class="text-center pt-3">
                        <img
                          class="img-fluid"
                          :style="{ height: '250px' }"
                          src="@/assets/images/photos/calculator.png"
                          alt="mudransh-contact-image"
                        />
                      </div>
                    </div>
                    <div class="col-12 mt-5">
                      <div class="text-center" v-if="loading">
                        <bSpinner variant="warning" label="Spinning" />
                      </div>
                      <button
                        v-else
                        type="submit"
                        :disabled="
                          !(Number(rate) * Number(time) * Number(amount)) &&
                          !email
                        "
                      >
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
        <div class="row mt-5" v-if="details">
          <div class="col-md-12 col-sm-12">
            <div class="card loan-card h-100 border-0">
              <div class="card-body">
                <h3 class="card-title text-danger">Your Loan Statistics</h3>
                <div class="row">
                  <div class="col-md-8 col-sm-12">
                    <VueApexCharts
                      type="bar"
                      width="100%"
                      :series="seriesLoan"
                      :options="optionsLoan"
                    />
                  </div>
                  <div
                    class="col-md-4 col-sm-12 py-5 d-flex flex-column justify-content-between"
                  >
                    <div>
                      <VueApexCharts
                        type="pie"
                        width="100%"
                        :series="seriesPI"
                        :options="optionsPI"
                      />
                    </div>
                    <div>
                      <p>
                        Total Interest: ₹{{
                          this.details.interestSum.toFixed(2)
                        }}
                      </p>
                      <p>Total Amount: ₹{{ this.details.amount.toFixed(2) }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5" v-if="details">
          <div class="col-12 mb-4">
            <h3 class="text-danger">Your Loan Schedule</h3>
          </div>
          <div
            class="col-md-4 col-sm-6 mb-3"
            v-for="(installment, i) in details.installments"
            :key="i"
          >
            <div class="card h-100 loan-card">
              <div class="card-body">
                <h4 class="card-title text-danger">Month {{ i + 1 }}</h4>
                <p class="mb-1">
                  Interest: ₹{{ installment.interest.toFixed(2) }}
                </p>
                <p class="mb-1">
                  Principle: ₹{{ installment.capital.toFixed(2) }}
                </p>
                <p class="mb-1">
                  Remaining Amount: ₹{{ installment.remain.toFixed(2) }}
                </p>
                <p class="mb-1">
                  Total Interest Paid: ₹{{ installment.interestSum.toFixed(2) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { calculateEMIs } from "../plugins/loan";

export default {
  data: () => ({
    rate: "",
    time: "",
    amount: "",
    message: "",
    email: "",
    contact: "",
    details: null,
    loading: false,
    success: false,
    optionsLoan: {
      chart: {
        stacked: true,
        id: "vuechart-example",
      },
      xaxis: {
        categories: [],
      },
      colors: ["#c0333d", "#fbb12f"],
      animations: {
        speed: 200,
      },
    },
    seriesLoan: [],
    optionsPI: {
      chart: {
        type: "pie",
      },
      labels: ["Interest", "Principle"],
      colors: ["#fbb12f", "#c0333d"],
      dataLabels: {
        formatter: function (val) {
          return val.toFixed(2) + "%";
        },
      },
      animations: {
        speed: 300,
      },
    },
    seriesPI: [],
  }),
  scrollToTop: true,
  components: {
    VueApexCharts: () => import("vue-apexcharts"),
  },
  methods: {
    async calculateEmis() {
      this.loading = true;
      let details = await calculateEMIs(this.amount, this.time, this.rate);
      this.loading = false;
      let categories = [];
      let interest = {
        data: [],
        name: "Interest",
      };
      let principle = {
        data: [],
        name: "Principle",
      };
      console.log("DETAILS", details);
      for (let i = 0; i < details.installments.length; i++) {
        categories.push(`Month ${i + 1}`);
        principle.data.push(details.installments[i].capital.toFixed(2));
        interest.data.push(details.installments[i].interest.toFixed(2));
      }
      this.seriesPI = [details.interestSum, Number(this.amount)];
      this.optionsLoan.xaxis.categories = categories;
      this.seriesLoan = [principle, interest];
      this.details = details;
      this.captureLoanQuery();
    },
    async captureLoanQuery() {
      try {
        let formData = new FormData();
        formData.append("your-email", this.email);
        formData.append("your-term", this.time);
        formData.append("your-rate", this.rate);
        formData.append("your-amount", this.amount);
        formData.append("your-contact", this.contact);
        let { data } = await this.$axios.post(
          "/contact-form-7/v1/contact-forms/72/feedback",
          formData
        );
      } catch (err) {
        console.log("CAPTURE_DATA_ERROR", err.message);
      }
    },
  },
};
</script>

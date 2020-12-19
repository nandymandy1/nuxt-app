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
          <div class="col-md-6 col-sm-12">
            <div class="card bg-danger">
              <div class="card-body">
                <div class="form-group">
                  <label for="amount" class="text-white font-weight-bold">
                    Amount
                  </label>
                  <input
                    min="0"
                    id="amount"
                    type="number"
                    v-model="amount"
                    class="form-control"
                    placeholder="Amount"
                  />
                </div>
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
// import Loader from "../components/Utils/Loader";
export default {
  // components: { Loader },
  data: () => ({
    rate: 0,
    time: 0,
    amount: 0,
    details: null,
    isLoading: false,
  }),
  methods: {
    async calculateEmis() {
      this.isLoading = true;
      this.details = await calculateEMIs(1000, 4, 10);
      this.isLoading = false;
    },
  },
  async created() {},
};
</script>

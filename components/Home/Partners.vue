<template>
  <section class="py-5">
    <div class="container">
      <div class="d-flex justify-content-center align-items-center mb-5">
        <Dots :length="10" />
        <h1 class="mudransh-heading text-center text-danger mx-4">
          OUR INDUSTRY PARTNERS
        </h1>
        <Dots :length="10" />
      </div>
    </div>
    <div class="partner-bank-page py-5">
      <div class="container mt-5">
        <div class="row">
          <div
            class="col-sm-6 col-md-3 mb-4"
            v-for="bank in banks"
            :key="bank.id"
          >
            <div class="card bank-card">
              <div class="card-body">
                <img
                  :src="bank.bank_image"
                  :alt="`mudransh-${bank.slug}`"
                  class="img-fluid img-gray-hover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PartnerBanks",
  data: () => ({
    banks: [],
  }),
  methods: {
    async getBanks() {
      let { data } = await this.$axios.get("/wl/v1/banks");
      this.banks = data;
    },
  },
  created() {
    this.getBanks();
  },
};
</script>

<template>
  <section class="home-section phone-se-loan bg-white py-5">
    <div class="d-flex justify-content-center align-items-center mb-5">
      <Dots :length="13" />
      <h1 class="mudransh-heading text-center text-danger mx-4">
        PHONE SE LOAN
      </h1>
      <Dots :length="13" />
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-4 col-sm-6 mb-5">
          <div class="card feature-card h-100">
            <div class="text-center">
              <img
                class="mb-4"
                alt="mudransh-money-bg"
                :style="{ height: '75px !important' }"
                src="@/assets/images/icons/money-bag.png"
              />
            </div>
            <h3>Maximum Loan Amount</h3>
            <p class="small">
              Card description with lots of great facts and interesting details.
            </p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 mb-5">
          <div class="card feature-card h-100">
            <div class="text-center">
              <img
                class="mb-4"
                alt="mudransh-calendar"
                :style="{ height: '75px !important' }"
                src="@/assets/images/icons/calendar.png"
              />
            </div>
            <h3>Maximum Loan Term</h3>
            <p class="small">
              Card description with lots of great facts and interesting details.
            </p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 mb-5">
          <div class="card feature-card h-100">
            <div class="text-center">
              <img
                class="mb-4"
                alt="mudransh-settings"
                :style="{ height: '75px !important' }"
                src="@/assets/images/icons/settings.png"
              />
            </div>
            <h3>Loan Customize Your Needs</h3>
            <p class="small">
              Card description with lots of great facts and interesting details.
            </p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 mb-5">
          <div class="card feature-card h-100">
            <div class="text-center">
              <img
                alt="mudransh-snap"
                class="mb-4 img-fluid"
                :style="{ height: '75px !important' }"
                src="@/assets/images/icons/snap.png"
              />
            </div>
            <h3>Easy Documentation</h3>
            <p class="small">
              Card description with lots of great facts and interesting details.
            </p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 mb-5">
          <div class="card feature-card h-100">
            <div class="text-center">
              <img
                class="mb-4"
                alt="mudransh-stop-watch"
                :style="{ height: '75px !important' }"
                src="@/assets/images/icons/stopwatch.png"
              />
            </div>
            <h3>Quick and transparent processing</h3>
            <p class="small">
              Card description with lots of great facts and interesting details.
            </p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 mb-5">
          <div class="card feature-card h-100">
            <div class="text-center">
              <img
                class="mb-4"
                alt="mudransh-money-umbrella"
                :style="{ height: '75px !important' }"
                src="@/assets/images/icons/save-money.png"
              />
            </div>
            <h3>Save on Interest</h3>
            <p class="small">
              Card description with lots of great facts and interesting details.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PhoneSeLoan",
};
</script>

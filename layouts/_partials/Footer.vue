<template>
  <div class="mudransh-footer bg-footer py-5">
    <div class="container">
      <div class="d-flex justify-content-center align-items-center mb-4">
        <img height="50px" src="@/assets/images/icons/logo.png" alt="" />
      </div>
      <hr class="line-spacer my-3" />
      <div class="row px-5 my-5">
        <div class="col-md-3 col-sm-6">
          <p class="footer-heading">CONTACT US</p>
          <a href="tel:05223574076" class="footer-link">+ (0522) 357 4076</a>
          <br />
          <a href="mailto:info@mudransh.com" class="footer-link">
            info@mudransh.com</a
          >
          <br />
          <a href="tel:44345678903" class="footer-link">Find Store</a> <br />
        </div>
        <div class="col-md-3 col-sm-6">
          <p class="footer-heading">INSURANCES</p>
          <NuxtLink class="footer-link" to="/">Term Insurance</NuxtLink>
          <br />
          <NuxtLink class="footer-link" to="/">Health Insurance</NuxtLink>
          <br />
          <NuxtLink class="footer-link" to="/">
            Private Vehicle Insurance
          </NuxtLink>
          <br />
          <NuxtLink class="footer-link" to="/">Return of Premium</NuxtLink>
          <br />
          <NuxtLink class="footer-link" to="/">Group Health Insurance</NuxtLink>
          <br />
          <NuxtLink class="footer-link" to="/">Home Insurance</NuxtLink>
          <br />
        </div>
        <div class="col-md-3 col-sm-6">
          <p class="footer-heading">Loans</p>
          <NuxtLink class="footer-link" to="/">Gold Loans</NuxtLink>
          <br />
          <NuxtLink class="footer-link" to="/">Home Loans</NuxtLink>
          <br />
          <NuxtLink class="footer-link" to="/">Personal Loans</NuxtLink>
          <br />
          <NuxtLink class="footer-link" to="/">Car Loans</NuxtLink>
          <br />
          <NuxtLink class="footer-link" to="/">MSME Loans</NuxtLink>
          <br />
        </div>
        <div class="col-md-3 col-sm-6">
          <p class="footer-heading">INFORMATION</p>
          <NuxtLink class="footer-link" to="/terms">
            Terms and Conditions
          </NuxtLink>
          <br />
          <NuxtLink class="footer-link" to="/privacy">Privacy Policy</NuxtLink>
          <br />
          <NuxtLink class="footer-link" to="/work">Careers</NuxtLink>
          <br />
          <NuxtLink class="footer-link" to="/">Faq's</NuxtLink>
          <br />
        </div>
      </div>
      <div class="row px-5 d-flex flex-column">
        <p class="footer-heading">Payment Methods Supported</p>
        <div class="d-flex flex-wrap">
          <div
            class="px-4 py-2 d-flex justify-content-center align-items-center payment-containers"
          >
            <img
              class="img-fluid"
              alt="master-card"
              :style="{ height: '40px' }"
              src="@/assets/images/icons/master-card.png"
            />
          </div>
          <div
            class="px-3 py-2 ml-2 d-flex justify-content-center align-items-center payment-containers"
          >
            <img
              alt="visa-card"
              class="img-fluid"
              :style="{ height: '25px' }"
              src="@/assets/images/icons/visa.png"
            />
          </div>
          <div
            class="px-3 py-2 ml-2 d-flex justify-content-center align-items-center payment-containers"
          >
            <img
              alt="rupay-card"
              class="img-fluid"
              :style="{ height: '25px' }"
              src="@/assets/images/icons/rupay.png"
            />
          </div>
          <div
            class="px-3 py-2 ml-2 d-flex justify-content-center align-items-center payment-containers"
          >
            <img
              alt="rupay-card"
              class="img-fluid"
              :style="{ height: '25px' }"
              src="@/assets/images/icons/paytm.png"
            />
          </div>
          <div
            class="px-3 py-2 ml-2 d-flex justify-content-center align-items-center payment-containers"
          >
            <img
              alt="upi-card"
              class="img-fluid"
              :style="{ height: '25px' }"
              src="@/assets/images/icons/upi.png"
            />
          </div>
        </div>
      </div>
      <hr class="line-spacer mt-3" />
      <div class="d-flex px-5">
        <p class="text-gray">
          Social Copyright &copy; Mudransh A Financial Mall 2020 - All Rights
          Reserved
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import PaymentContainer from "@/components/Utils/PaymentContainer";
export default {
  name: "Footer",
  components: {
    PaymentContainer,
  },
};
</script>
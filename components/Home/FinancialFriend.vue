<template>
  <section class="financial-friend mb-5">
    <div class="container">
      <div class="d-flex justify-content-center align-items-center mb-5">
        <Dots :length="12" />
        <h1 class="mudransh-heading text-center text-danger mx-4">
          YOUR FINANCIAL FRIEND
        </h1>
        <Dots :length="12" />
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <h4 class="mb-4">
            We are here to help you out throughout your all financial needs and
            claim your benefits
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            temporibus quaerat voluptate vitae ducimus, nostrum dignissimos
            omnis expedita doloribus cupiditate, soluta rem error maiores
            voluptatem minus cum nesciunt modi ex nobis? Esse dolor adipisci
            sint eos aliquam corrupti eveniet nesciunt?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            repudiandae magni ducimus molestiae accusamus! Amet!
          </p>
        </div>
        <div class="col-md-6 col-sm-12">
          <img
            src="https://www.roadtovr.com/wp-content/uploads/2015/03/youtube-logo2.jpg"
            alt="mudransh-placeholder-video-img"
            class="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FinancialFriend",
};
</script>
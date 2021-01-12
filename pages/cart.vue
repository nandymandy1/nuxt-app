<template>
  <div class="checkout my-5 py-5 container">
    <div class="row mt-5">
      <div class="col-12">
        <div class="card">
          <h3 class="card-header text-danger">Your Shopping Cart</h3>
          <div class="card-body">
            <table class="table" v-if="$store.getters['cart/cartQty']">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product Image</th>
                  <th scope="col">Item</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in cart" :key="item.id">
                  <th scope="row">{{ i + 1 }}</th>
                  <td>
                    <img
                      :src="item.image"
                      class="img-fluid img-thumbnail"
                      :style="{ height: '150px !important' }"
                    />
                  </td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.qty }}</td>
                  <td>₹{{ item.price }}</td>
                  <td>
                    <button
                      class="btn btn-success btn-sm"
                      @click="$store.commit('cart/ADD_PRODUCT', item)"
                    >
                      +
                    </button>
                    <button
                      class="btn btn-warning btn-sm"
                      @click="$store.commit('cart/REDUCE_PRODUCT', item.id)"
                    >
                      -
                    </button>
                    <button
                      class="btn btn-danger btn-sm"
                      @click="$store.commit('cart/REMOVE_PRODUCT', item.id)"
                    >
                      X
                    </button>
                  </td>
                  <td>₹{{ item.price * item.qty }}</td>
                </tr>
              </tbody>
            </table>
            <h5 v-if="$store.getters['cart/cartQty']">
              Your cart total: ₹{{ $store.getters["cart/totalPrice"] }} /-
            </h5>
            <h5 class="text-center text-danger" v-else>
              Your shopping cart is empty... Explore our products page and add
              some products to you cart.
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      cart: "cart/cart",
      totalPrice: "cart/totalPrice",
    }),
  },
  created() {
    this.$store.commit("cart/SET_CART");
  },
};
</script>

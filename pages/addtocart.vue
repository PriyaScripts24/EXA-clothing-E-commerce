<template>
  <div class="flex justify-center">
    <div class="">
      <div class="w-[477px] h-[700px] bg-white flex flex-col gap-4">
        <img src="/multi.png" alt="multiple" class="w-[25px] h-[25px]" />
        <p class="font-bold text-[24px] px-4">Your Cart</p>
        <div v-if="cart.length <= 0">
          <p>cart is empty</p>
        </div>
        <div v-else>
          <div class="flex gap-6 px-4" v-for="item in cart" :key="item">
            <img :src="item.images[0]" alt="buy" class="w-[175px] h-[150px]" />
            <div class="flex flex-col gap-5">
              <div class="flex items-center justify-between gap-8 px-6">
                <div>
                  <p class="font-[400px] text-[16px]">
                    {{ item.name }}
                  </p>
                  <p class="text-[#737373] font-[400px] text-[14px]">
                    Medium | Black
                  </p>
                </div>
                <div>
                  <img
                    src="/Trash.png"
                    alt="trash"
                    class="w-[18px] h-[18px] mt-4"
                  />
                </div>
              </div>
              <div class="flex items-center justify-between gap-24 px-6">
                <div>
                  <div class="flex">
                    <p class="text-[#737373] line-through">999</p>
                    <p>₹{{ item.price }}</p>
                  </div>
                  <p class="text-[#FB8122]">(10% Off)</p>
                </div>
                <div>
                  <div
                    class="flex border border-[#DDDBDC] p-2 w-[70px] h-[50px] gap-3"
                  >
                    <p class="text-[20px]">-</p>
                    <p class="text-[20px]">{{ item.quantity }}</p>
                    <p class="text-[20px]">+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="mt-[150px] flex flex-col gap-4 px-4 border border-white shadow-white"
        >
          <div class="flex items-center justify-between">
            <p class="font-[400px] text-[16px]">
              Subtotal
              <span class="font-[400px] text-[14px]"
                >({{ getTotalQuantity() }} items)</span
              >
            </p>
            <p class="font-[400px] text-[16px]">{{ getTotalPrice() }}/-</p>
          </div>
          <button
            class="bg-black text-white font-[400px] text-[14px] p-2 text-center"
          >
            CONTINUE TO CHECKOUT
          </button>
          <p class="font-[400px] text-[12px] text-center">
            Get it now before it sells out.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      selectIndex: 0,
      cart: [],
    };
  },
  mounted() {
    this.getCart();
  },
  methods: {
    changeImage(index) {
      this.selectIndex = index;
    },
    getTotalQuantity() {
      let quantity = 0;
      for (let e of this.cart) {
        quantity += e.quantity;
      }
      return quantity;
    },
    getTotalPrice() {
      let price = 0;
      for (let e of this.cart) {
        price += parseInt(e.price.toString()) * e.quantity;
      }
      return price;
    },
    async getCart() {
      const response = await axios.get("/api/cart");
      this.cart = response.data.cart;
    },
  },
};
</script>
<style>
.slider {
  animation: slide-rightToLeft 60s linear infinite;
}

@keyframes slide-rightToLeft {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}
</style>

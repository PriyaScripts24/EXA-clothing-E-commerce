<template>
  <div class="relative w-full bg-white">
    <section>
      <div>
        <p
          class="text-white font-medium bg-[#FB8122] text-center w-full text-[12px] md:text-[18px]"
        >
          Enjoy Free Shipping On All Orders
        </p>
      </div>
      <div class="flex items-center justify-around mt-4">
        <img
          src="/logo.png"
          alt="logo"
          class="w-[60px] h-[60px] hidden md:block"
        />
        <nav class="flex gap-6 md:gap-16">
          <a
            href="/"
            class="font-medium md:text-[18px] text-[10px] text-[#FB8122]"
            >Home</a
          >
          <a
            href="/sales"
            class="font-medium md:text-[18px] text-[10px] text-[#321601]"
            >Sale</a
          >
          <a
            href="/products"
            class="font-medium md:text-[18px] text-[10px] text-[#321601]"
            >Product</a
          >
          <a
            href="/about"
            class="font-medium md:text-[18px] text-[10px] text-[#321601]"
            >About us</a
          >
          <a
            href="/contact"
            class="font-medium md:text-[18px] text-[10px] text-[#321601]"
            >Contact</a
          >
        </nav>
        <div class="hidden gap-3 md:flex">
          <img src="/profile.png" alt="profile" class="w-[38px] h-[38px]" />
          <div class="relative">
            <NuxtLink to="/addtocart">
              <img
                src="/card.png"
                alt="card"
                class="bg-[#FB8122] rounded-full text-white w-[40px] h-[40px] p-2"
              />
              <p
                class="absolute px-1 text-white bg-black rounded-full -top-2 left-7"
              >
                {{ cart.length }}
              </p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      cart: [],
    };
  },
  mounted() {
    this.getCart();
  },
  methods: {
    async getCart() {
      const response = await axios.get("/api/cart");
      this.cart = response.data.cart;
    },
  },
};
</script>

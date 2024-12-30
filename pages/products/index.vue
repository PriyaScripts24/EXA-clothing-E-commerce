<template>
  <div>
    <!-- nav.. -->
    <Header></Header>
    <section>
      <div class="mt-10">
        <p
          class="font-semibold text-[42px] text-[#FB8122] text-center font-serif"
        >
          Our Products
        </p>
        <div class="flex items-center justify-center gap-20 px-8 mt-10">
          <div v-for="item in products" :key="item">
            <nuxtLink :to="`/products/${item.id}`">
              <img
                src="/product1.png"
                alt="product"
                class="w-[280px] h-[390px]"
              />
              <p class="font-bold text-[18px] mt-1">{{ item.name }}</p>
            </nuxtLink>
          </div>
        </div>
      </div>
    </section>
    <div class="mt-5">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      const response = await axios.get("/api/products");
      this.products = response.data.products;
    },
  },
};
</script>

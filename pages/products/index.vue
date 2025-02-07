<template>
  <div>
    <!-- nav.. -->
    <Header></Header>
    <section>
      <div class="mt-4 md:mt-10">
        <p
          class="font-semibold md:text-[42px] text-[24px] text-[#FB8122] text-center font-serif"
        >
          Our Products
        </p>
        <section class="justify-center md:flex" v-if="isloading === true">
          <div
            class="border-4 border-orange-600 rounded-full md:w-10 md:h-10 animate-spin border-r-gray-200"
          ></div>
        </section>
        <div
          v-else
          class="flex-wrap items-center justify-center gap-40 px-8 mt-10 ml-12 text-center md:flex md:ml-0"
        >
          <div v-if="products.length === 0">
            <p class="text-[24px] text-[#FB8122] font-semibold">
              No products found
            </p>
          </div>
          <div v-else v-for="item in products" :key="item">
            <nuxtLink :to="`/products/${item.id}`">
              <img
                :src="item.images[0]"
                class="md:w-[280px] md:h-[390px] w-[210px] h-[250px] mt-6 md:mt-0"
              />
              <p class="font-bold text-[18px] md:mt-1 mt-2 -ml-10 md:-ml-0">
                {{ item.name }}
              </p>
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
      isloading: true,
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      const response = await axios.get("/api/products");
      this.products = response.data.products;
      this.isloading = false;
    },
  },
};
</script>

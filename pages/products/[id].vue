<template>
  <div>
    <!-- section1.. -->
    <section>
      <Header></Header>
    </section>
    <!-- section2.. -->
    <section class="py-3">
      <div class="py-1 bg-[#190B00] opacity-60">
        <div
          class="flex slider gap-5 text-white w-full md:h-[30px] h-[15px] md:text-[20px] text-[12px]"
        >
          <p class="flex flex-none">Christmas offer 15% off</p>
          <p class="flex flex-none">Christmas offer 15% off</p>
          <p class="flex flex-none">Christmas offer 15% off</p>
          <p class="flex flex-none">Christmas offer 15% off</p>
          <p class="flex flex-none">Christmas offer 15% off</p>
          <p class="flex flex-none">Christmas offer 15% off</p>
          <p class="flex flex-none">Christmas offer 15% off</p>
          <p class="flex flex-none">Christmas offer 15% off</p>
          <p class="flex flex-none">Christmas offer 15% off</p>
          <p class="flex flex-none">Christmas offer 15% off</p>
        </div>
      </div>
    </section>
    <!-- section3.. -->
    <section class="justify-center md:flex" v-if="product.name === undefined">
      <div
        class="border-4 border-orange-600 rounded-full md:w-10 md:h-10 animate-spin border-r-gray-200"
      ></div>
    </section>
    <section v-else>
      <div class="gap-6 px-8 mt-8 md:flex">
        <div class="gap-3 h-[510px] overflow-hidden overflow-y-auto">
          <div v-for="(image, index) in product.images" :key="index">
            <img
              @click="changeImage(index)"
              :src="image"
              alt="buy1"
              class="md:w-[125px] w-[80px] py-2 md:h-[160px] h-[100px]"
              :class="index === selectIndex ? 'opacity-100' : 'opacity-40'"
            />
          </div>
        </div>
        <img
          :src="product.images[selectIndex]"
          alt="buy"
          class="md:w-[450px] md:h-[510px] w-[200px] h-[300px] -mt-[470px] ml-[125px] md:-mt-0 md:ml-0"
        />
        <div class="flex flex-col gap-8">
          <p
            class="font-bold md:text-[28px] text-[20px] font-sans ml-[140px] md:mt-0 mt-1 md:ml-0"
          >
            {{ product.name }}
          </p>
          <p class="font-[400px] text-[14px] font-sans">
            Basically, Flex. Presenting basic heavyweight T-Shirt with a round,
            rib-trimmed neckline and a straight-cut hem. Oversized fit for a
            baggy, drop shoulder silhouette.
          </p>
          <div class="flex items-center justify-between">
            <div class="flex flex-col gap-3">
              <p class="font-medium text-[16px]">colors</p>
              <img
                src="public/colors5.png"
                alt="colors"
                class="w-[190px] h-[15px]"
              />
            </div>
            <div>
              <p class="font-[400px] text-[14px] text-[#868686] mt-[100px]">
                size guide
              </p>
            </div>
          </div>
          <div class="flex flex-col w-full">
            <button
              class="flex items-center justify-between p-2 px-4 mt-3 bg-white rounded-3xl drop-shadow-lg"
            >
              <p class="font-bold text-[12px]">Size</p>
              <img
                src="public/arrowbutton.png"
                alt="arrow"
                class="w-[25px] h-[25px]"
              />
            </button>
            <button
              class="flex items-center justify-center p-2 px-4 mt-3 bg-[#FEE2CD] rounded-3xl drop-shadow-lg"
              @click="addToCart()"
            >
              <p class="font-bold text-[12px]">Add To Cart</p>
              <p>₹699</p>
            </button>
            <button
              class="flex items-center justify-center p-2 px-4 mt-3 bg-[#FB8122] rounded-3xl drop-shadow-lg text-white"
            >
              <p class="font-bold text-[12px]">Buy Now</p>
            </button>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex gap-3">
              <img src="public/van.png" alt="van" class="w-[30px] h-[20px]" />
              <p class="text-[#868686] font-[400px] text-[14px] font-sans">
                Easy Return
              </p>
            </div>
            <div class="flex gap-3">
              <img
                src="public/like icon.png"
                alt="like"
                class="w-[20px] h-[20px]"
              />
              <p class="text-[#868686] font-[400px] text-[14px] font-sans">
                Add To Wish List
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section4.. -->
    <section>
      <div class="px-20 mt-8 border border-[#CBCBCB] bg-[#FFF1E6] p-3">
        <div>
          <div class="flex items-center justify-between">
            <p class="font-bold text-[20px]">Fitting</p>
            <p class="text-[20px]">+</p>
          </div>
          <hr class="border boder-[#CBCBCB]" />
          <div class="flex items-center justify-between">
            <p class="font-bold text-[20px] text-[#FB8122]">Fabric & care</p>
            <p class="text-[20px] text-[#FB8122]">-</p>
          </div>
          <p>
            Fabric : <br />
            Pure Cotton <br />
            Made in Tirupur-Tamil nadu , 100% Pure Cotton-210 GSM <br />
            Care: <br />
            Cold machine wash, line dry <br />
            Do not tumble dry or dry clean, Do not use bleach or fabric softener
          </p>
        </div>
        <div class="mt-6">
          <div class="flex items-center justify-between">
            <p class="font-bold text-[20px]">Product Detail</p>
            <p class="text-[20px]">+</p>
          </div>
          <hr class="border boder-[#CBCBCB]" />
          <div class="flex items-center justify-between">
            <p class="font-bold text-[20px] text-[#FB8122]">
              Shipping And Return
            </p>
            <p class="text-[20px] text-[#FB8122]">-</p>
          </div>
          <p>
            Shipping: <br />
            is free on Tamil Nadu , All India orders are 50Rs extra <br />
            Returns: <br />
            Unwashed, unworn items are eligible for returns or exchanges within
            30 days of purchase. Final Sale items are not eligible for returns
            or exchanges.
          </p>
        </div>
      </div>
    </section>
    <!-- section5.. -->
    <section>
      <div>
        <p class="font-bold text-[32px] font-sans text-center mt-4">
          You May Also Like
        </p>
        <div class="items-center justify-around px-20 md:flex">
          <div v-for="item in buys" :key="item">
            <Card
              :image="item.image"
              :title="item.title"
              :price="item.price"
              :decription="item.decription"
              :icon="item.icon"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- section6.. -->
    <section>
      <Footer></Footer>
    </section>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      selectIndex: 0,
      product: {},
      buys: [
        {
          title: "Chobbar green ",
          image: "/cart7.png",
          price: "999",
          decription: "Drop Shoulder T-Shirt",
          icon: "/colors4.png",
        },
        {
          title: "DTF Printed ",
          image: "/cart8.png",
          price: "999",
          decription: "Drop Shoulder T-Shirt",
          icon: "/colors5.png",
        },
        {
          title: "Chobbar White",
          image: "/cart9.png",
          price: "999",
          decription: "Drop Shoulder T-Shirt",
          icon: "/colors6.png",
        },
        {
          title: "Dark Hours",
          image: "/cart16.png",
          price: "999",
          decription: "Drop Shoulder T-Shirt",
          icon: "/colors4.png",
        },
      ],
    };
  },
  async mounted() {
    this.getProduct();
  },
  methods: {
    changeImage(index) {
      this.selectIndex = index;
    },
    async getProduct() {
      const response = await axios.get(`/api/products/${useRoute().params.id}`);
      this.product = response.data.product;
    },
    async addToCart() {
      const response = await axios.post(`/api/cart/add`, {
        id: useRoute().params.id,
      });
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

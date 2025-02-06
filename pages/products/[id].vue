<template>
  <div>
    <!-- section1.. -->
    <section>
      <Header></Header>
    </section>
    <!-- section2.. -->
    <section class="py-3">
      <div class="py-1 bg-[#190B00] opacity-60 overflow-hidden">
        <div
          class="flex slider gap-5 text-white md:h-[30px] h-[15px] md:text-[20px] text-[12px]"
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
    <section v-else class="flex items-center justify-around">
      <div class="gap-12 px-8 mt-8 md:flex">
        <div class="gap-3 h-[510px] overflow-hidden overflow-y-auto">
          <div v-for="(image, index) in product.images" :key="index">
            <img
              @click="changeImage(index)"
              :src="image"
              alt="buy1"
              class="md:w-[100px] w-[80px] py-2 md:h-[160px] h-[100px]"
              :class="index === selectIndex ? 'opacity-100' : 'opacity-40'"
            />
          </div>
        </div>
        <img
          :src="product.images[selectIndex]"
          alt="buy"
          class="md:w-[350px] md:h-[510px] w-[200px] h-[300px] -mt-[470px] ml-[125px] md:-mt-0 md:ml-0"
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
              <p class="font-[400px] text-[14px] text-[#868686] md:mt-[100px]">
                size guide
              </p>
            </div>
          </div>
          <div class="flex flex-col w-full -mt-2 md:-mt-0">
            <div>
              <button
                @click="toggleDropdown"
                class="flex items-center justify-between w-full p-2 px-4 mt-3 bg-white rounded-3xl drop-shadow-lg"
              >
                <p class="font-bold text-[12px]">Size</p>
                <img
                  src="public/arrowbutton.png"
                  alt="arrow"
                  class="w-[25px] h-[25px] transition-transform duration-300"
                  :class="{ 'rotate-180': isDropdownOpen }"
                />
              </button>

              <transition name="fade">
                <div
                  v-if="isDropdownOpen"
                  class="p-3 mt-2 bg-white rounded-lg shadow-md"
                >
                  <p class="text-sm">xs (Very Samll)</p>
                  <p class="text-sm">S (Small)</p>
                  <p class="text-sm">M (Medium)</p>
                  <p class="text-sm">L (Large)</p>
                  <p class="text-sm">Xl (Very Large)</p>
                  <p class="text-sm">2XL (2 Large)</p>
                </div>
              </transition>
            </div>

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
              <img
                src="public/van.png"
                alt="van"
                class="md:w-[30px] md:h-[20px] w-[20px] h-[14px]"
              />
              <p
                class="text-[#868686] font-[400px] md:text-[14px] text-[10px] font-sans"
              >
                Easy Return
              </p>
            </div>
            <div class="flex gap-3">
              <img
                src="public/like icon.png"
                alt="like"
                class="md:w-[20px] md:h-[20px] w-[20px] h-[16px]"
              />
              <p
                class="text-[#868686] font-[400px] md:text-[14px] text-[10px] font-sans"
              >
                Add To Wish List
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section4.. -->
    <section>
      <div class="px-16 py-4 mt-8 bg-orange-50">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="py-4 border-b border-gray-300"
        >
          <button
            class="flex justify-between w-full font-bold text-left text-gray-800"
            @click="toggle(index)"
          >
            <span :class="{ 'text-orange-600': item.open }">{{
              item.title
            }}</span>
            <span class="text-orange-600">{{ item.open ? "-" : "+" }}</span>
          </button>
          <div v-if="item.open" class="mt-2 text-gray-700">
            <p v-for="(line, i) in item.content" :key="i">{{ line }}</p>
          </div>
        </div>
        <div class="flex justify-center mt-4">
          <a
            href="/Faq"
            class="text-[16px] font-semibold text-center mt-4 w-[120px] p-2 bg-orange-600 text-white rounded-3xl"
          >
            View More</a
          >
        </div>
      </div>
    </section>
    <!-- section5.. -->
    <section>
      <div>
        <p
          class="font-bold md:text-[32px] text-[22px] font-sans text-center mt-4"
        >
          You May Also Like
        </p>
        <div
          class="items-center justify-around px-20 md:flex -ml-[30px] md:-ml-0"
        >
          <div v-for="item in buys" :key="item">
            <NuxtLink :to="`/products/${index + 1}`">
              <Card
                :image="item.image"
                :title="item.title"
                :price="item.price"
                :decription="item.decription"
                :icon="item.icon"
              />
            </NuxtLink>
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
      isDropdownOpen: false,
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

      faqItems: [
        {
          title: "Fabric & Care",
          content: [
            "Fabric: Pure Cotton",
            "Made in Tirupur-Tamil Nadu, 100% Pure Cotton - 210 GSM",
            "Care: Cold machine wash, line dry",
            "Do not tumble dry or dry clean, Do not use bleach or fabric softener",
          ],
          open: false,
        },
        {
          title: "Shipping And Return",
          content: [
            "Shipping: Free in Tamil Nadu, All India orders are 50Rs extra",
            "Returns: Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase.",
            "Final Sale items are not eligible for returns or exchanges.",
          ],
          open: false,
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
    toggle(index) {
      this.faqItems[index].open = !this.faqItems[index].open;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
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
<style scoped>
button {
  transition: color 0.3s ease;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <div>
    <!-- section1.. -->
    <section>
      <Header></Header>
    </section>
    <!-- section2.. -->
    <section class="py-3">
      <div class="py-1 bg-[#190B00] opacity-60">
        <div class="flex slider gap-5 text-white w-full h-[30px]">
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
    <section>
      <div class="flex gap-6 px-8 mt-8">
        <div class="gap-3 h-[510px] overflow-hidden overflow-y-auto">
          <div v-for="(image, index) in productImages" :key="index">
            <img
              @click="changeImage(index)"
              :src="image"
              alt="buy1"
              class="w-[125px] py-2 h-[160px]"
              :class="index === selectIndex ? 'opacity-100' : 'opacity-40'"
            />
          </div>
        </div>
        <img
          :src="productImages[selectIndex]"
          alt="buy"
          class="w-[450px] h-[510px]"
        />
        <div class="flex flex-col gap-10">
          <p class="font-bold text-[28px] font-sans">
            BASIC BLACK Heavyweight T-shirt
          </p>
          <p class="font-[400px] text-[14px] font-sans">
            Basically, Flex. Presenting basic heavyweight T-Shirt with a round,
            rib-trimmed neckline and a straight-cut hem. Oversized fit for a
            baggy, drop shoulder silhouette.
          </p>
          <div class="flex items-center justify-between">
            <div class="flex flex-col gap-3">
              <p class="font-medium text-[16px]">colors</p>
              <img src="/colors5.png" alt="colors" class="w-[190px] h-[15px]" />
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
                src="/arrowbutton.png"
                alt="arrow"
                class="w-[25px] h-[25px]"
              />
            </button>
            <button
              class="flex items-center justify-center p-2 px-4 mt-3 bg-[#FEE2CD] rounded-3xl drop-shadow-lg"
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
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productImages: ["/buy1.png", "/buy2.png", "/buy3.png", "/buy4.png"],
      selectIndex: 0,
    };
  },
  methods: {
    changeImage(index) {
      this.selectIndex = index;
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

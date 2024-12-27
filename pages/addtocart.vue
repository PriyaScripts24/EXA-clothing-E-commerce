<template>
  <div class="overflow-hidden">
    <div class="bg-[#000000] opacity-40 relative">
      <section>
        <Header></Header>
      </section>
      <!-- section2.. -->
      <section class="py-3">
        <div class="py-1">
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
          <div class="flex flex-col gap-8">
            <p class="font-bold text-[28px] font-sans text-white">
              BASIC BLACK Heavyweight T-shirt
            </p>
            <p class="font-[400px] text-[14px] font-sans text-white">
              Basically, Flex. Presenting basic heavyweight T-Shirt with a
              round, rib-trimmed neckline and a straight-cut hem. Oversized fit
              for a baggy, drop shoulder silhouette.
            </p>
            <div class="flex items-center justify-between">
              <div class="flex flex-col gap-3">
                <p class="font-medium text-[16px] text-white">colors</p>
                <img
                  src="/colors5.png"
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
            <div class="flex items-center justify-between">
              <div class="flex gap-3">
                <img src="/van.png" alt="van" class="w-[30px] h-[20px]" />
                <p class="text-[#868686] font-[400px] text-[14px] font-sans">
                  Easy Return
                </p>
              </div>
              <div class="flex gap-3">
                <img
                  src="/like icon.png"
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
    </div>
    <div class="absolute -mt-[700px] right-0">
      <div class="w-[477px] h-[700px] bg-white flex flex-col gap-4">
        <img src="/multi.png" alt="multiple" class="w-[25px] h-[25px]" />
        <p class="font-bold text-[24px] px-4">Your Cart</p>
        <div class="flex gap-6 px-4">
          <img src="/buy1.png" alt="buy" class="w-[175px] h-[150px]" />
          <div class="flex flex-col gap-5">
            <div class="flex items-center justify-between gap-8 px-6">
              <div>
                <p class="font-[400px] text-[16px]">
                  The Organic Cotton Long-Sleeve Turtleneck
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
                  <p>₹899</p>
                </div>
                <p class="text-[#FB8122]">(10% Off)</p>
              </div>
              <div>
                <div
                  class="flex border border-[#DDDBDC] p-2 w-[70px] h-[50px] gap-3"
                >
                  <p class="text-[20px]">-</p>
                  <p class="text-[20px]">1</p>
                  <p class="text-[20px]">+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-6 px-4">
          <img src="/cart13.png" alt="buy" class="w-[130px] h-[150px]" />
          <div class="flex flex-col gap-5">
            <div class="flex items-center justify-between px-6 gap-14">
              <div>
                <p class="font-[400px] text-[16px]">Urban | Printed shorts</p>
                <p class="text-[#737373] font-[400px] text-[14px]">
                  Small | Green
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
            <div class="flex items-center justify-between px-6 gap-14">
              <div>
                <div class="flex">
                  <p class="text-[#737373] line-through">699</p>
                  <p>₹399</p>
                </div>
                <p class="text-[#FB8122]">(30% Off)</p>
              </div>
              <div>
                <div
                  class="flex border border-[#DDDBDC] p-2 w-[70px] h-[50px] gap-3"
                >
                  <p class="text-[20px]">-</p>
                  <p class="text-[20px]">1</p>
                  <p class="text-[20px]">+</p>
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
              Subtotal <span class="font-[400px] text-[14px]">(2 items)</span>
            </p>
            <p class="font-[400px] text-[16px]">1298/-</p>
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

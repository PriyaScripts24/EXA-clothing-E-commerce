<template>
  <div>
    <!-- nav.. -->
    <Header></Header>
    <!-- section1.. -->
    <section class="bg-[#FFF1E6]">
      <div class="p-10 mt-4 font-poppins">
        <div
          class="items-center justify-center gap-20 text-center md:mt-10 md:flex"
        >
          <div class="md:-ml-[20px]">
            <p class="font-bold text-[20px] text-center">Offers</p>
            <div class="gap-10 mt-6 md:mt-10 md:flex">
              <div class="flex flex-col gap-5">
                <a href="#">Oversized T-Shirt</a>
                <a href="#">Drop Shoulder</a>
                <a href="#">Printed Shirts</a>
                <a href="#">Printed Shorts</a>
              </div>
              <div class="flex flex-col gap-5 mt-4 md:mt-0">
                <a href="#">Front Print T-Shirt</a>
                <a href="#">Back Print T-Shirt</a>
              </div>
            </div>
          </div>
          <div class="md:flex gap-10 ml-[60px] md:-mt-3 mt-5">
            <div>
              <img
                src="/sale1.png"
                alt="sale"
                class="w-[250px] h-[380px]rounded-tl-2xl"
              />
              <div class="p-2 bg-white rounded-b-2xl">
                <p class="text-[12px] text-center">front Printed T-Shirt</p>
                <p class="font-bold text-center">UPTO 20%</p>
              </div>
            </div>
            <div class="mt-5 md:mt-0">
              <div class="">
                <div class="p-2 bg-white rounded-t-2xl">
                  <p class="text-[12px] text-center">front Printed T-Shirt</p>
                  <p class="font-bold text-center">UPTO 20%</p>
                </div>
                <img
                  src="/sale2.png"
                  alt="sale"
                  class="w-[250px] h-[380px]rounded-tl-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section3.. -->
    <section class="-mt-4">
      <Footer></Footer>
    </section>
  </div>
</template>

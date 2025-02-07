<template>
  <div>
    <!-- nav.. -->
    <Header></Header>
    <!-- section1.. -->
    <section class="bg-[#FFF1E6]">
      <div class="p-10 mt-4 font-poppins">
        <div
          class="flex flex-col items-center justify-center gap-20 text-center md:mt-10"
        >
          <div class="md:-ml-[20px]">
            <p class="font-bold text-[20px] text-center">Offers</p>
            <div class="gap-10 mt-6 md:mt-10 md:flex">
              <div class="flex flex-col gap-5">
                <a href="#" key="" @click="isOpen = !isOpen"
                  >Oversized T-Shirt</a
                >
                <a href="#" @click="isOpenShow = !isOpenShow">Drop Shoulder</a>
                <a href="#" @click="isOpenBook = !isOpenBook">Printed Shirts</a>
                <a href="#" @click="isOpenImg = !isOpenImg">Printed Shorts</a>
              </div>
              <div class="flex flex-col gap-5 mt-4 md:mt-0">
                <a href="#" @click="isOpenFile = !isOpenFile"
                  >Front Print T-Shirt</a
                >
                <a href="#" @click="isOpenCal = !isOpenCal"
                  >Back Print T-Shirt</a
                >
              </div>
            </div>
          </div>
          <div v-if="isOpen">
            <div class="gap-20 px-12 md:justify-around md:px-0 md:flex">
              <div v-for="(item, index) in oversize" :key="index">
                <NuxtLink :to="`/products/${index + 1}`">
                  <Card
                    :image="item.image"
                    :title="item.title"
                    :price="item.price"
                    :decription="item.decription"
                    :icon="item.icon"
                    :button="item.button"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
          <div v-if="isOpenShow">
            <div class="gap-20 px-12 md:justify-around md:px-0 md:flex">
              <div v-for="(item, index) in Drop" :key="index">
                <NuxtLink :to="`/products/${index + 1}`">
                  <Card
                    :image="item.image"
                    :title="item.title"
                    :price="item.price"
                    :decription="item.decription"
                    :icon="item.icon"
                    :button="item.button"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
          <div v-if="isOpenBook">
            <div class="gap-20 px-12 md:justify-around md:px-0 md:flex">
              <div v-for="(item, index) in Shirts" :key="index">
                <NuxtLink :to="`/products/${index + 1}`">
                  <Card
                    :image="item.image"
                    :title="item.title"
                    :price="item.price"
                    :decription="item.decription"
                    :icon="item.icon"
                    :button="item.button"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
          <div v-if="isOpenImg">
            <div class="gap-20 px-12 md:justify-around md:px-0 md:flex">
              <div v-for="(item, index) in shorts" :key="index">
                <NuxtLink :to="`/products/${index + 1}`">
                  <Card
                    :image="item.image"
                    :title="item.title"
                    :price="item.price"
                    :decription="item.decription"
                    :icon="item.icon"
                    :button="item.button"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
          <div v-if="isOpenFile">
            <div class="gap-20 px-12 md:justify-around md:px-0 md:flex">
              <div v-for="(item, index) in front" :key="index">
                <NuxtLink :to="`/products/${index + 1}`">
                  <Card
                    :image="item.image"
                    :title="item.title"
                    :price="item.price"
                    :decription="item.decription"
                    :icon="item.icon"
                    :button="item.button"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
          <div v-if="isOpenCal">
            <div class="gap-20 px-12 md:justify-around md:px-0 md:flex">
              <div v-for="(item, index) in back" :key="index">
                <NuxtLink :to="`/products/${index + 1}`">
                  <Card
                    :image="item.image"
                    :title="item.title"
                    :price="item.price"
                    :decription="item.decription"
                    :icon="item.icon"
                    :button="item.button"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="md:flex gap-20 ml-[60px] mt-10 justify-center">
          <div>
            <img
              src="/sale1.png"
              alt="sale"
              class="w-[250px] h-[380px]rounded-tl-2xl"
            />
            <div class="p-2 bg-slate-400 rounded-b-2xl">
              <p class="text-[12px] text-center">front Printed T-Shirt</p>
              <p class="font-bold text-center">UPTO 20%</p>
            </div>
          </div>
          <div class="mt-5 md:mt-0">
            <div class="">
              <div class="p-2 bg-slate-400 rounded-t-2xl">
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
    </section>
    <!-- section3.. -->
    <section class="-mt-4">
      <Footer></Footer>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
      isOpenShow: false,
      isOpenBook: false,
      isOpenImg: false,
      isOpenFile: false,
      isOpenCal: false,
      oversize: [
        {
          title: "Travis",
          image: "/cart4.png",
          price: "899",
          decription: "Over Sized",
          icon: "/colors4.png",
        },
        {
          title: "Rise",
          image: "/cart5.png",
          price: "899",
          decription: "Over Sized",
          icon: "/colors5.png",
        },
        {
          title: "Bleed What the flex",
          image: "/cart6.png",
          price: "899",
          decription: "Over Sized",
          icon: "/colors6.png",
        },
      ],
      Drop: [
        {
          title: "Chobbar green",
          image: "/cart7.png",
          price: "999",
          decription: "Drop Shoulder T-Shirt",
          icon: "/colors4.png",
        },
        {
          title: "DTF Printed",
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
      ],
      Shirts: [
        {
          title: "Golden Flower",
          image: "/cart10.png",
          price: "1099",
          decription: "Printed shirt",
          icon: "/colors4.png",
        },
        {
          title: "Casual Dotted",
          image: "/cart11.png",
          price: "1099",
          decription: "Printed shirt",
          icon: "/colors5.png",
        },
        {
          title: "Party Wear",
          image: "/cart12.png",
          price: "1099",
          decription: "Printed shirt",
          icon: "/colors6.png",
        },
      ],
      shorts: [
        {
          title: "Urban",
          image: "/cart13.png",
          price: "399",
          decription: "Printed shorts",
          icon: "/colors4.png",
        },
        {
          title: "Tropical green",
          image: "/cart14.png",
          price: "399",
          decription: "Printed shorts",
          icon: "/colors5.png",
        },
        {
          title: "Cargo",
          image: "/cart15.png",
          price: "399",
          decription: "Printed shorts",
          icon: "/colors6.png",
        },
      ],
      front: [
        {
          title: "Golden Flower",
          image: "/cart10.png",
          price: "1099",
          decription: "Printed shirt",
          icon: "/colors4.png",
        },
        {
          title: "Casual Dotted",
          image: "/cart11.png",
          price: "1099",
          decription: "Printed shirt",
          icon: "/colors5.png",
        },
        {
          title: "Party Wear",
          image: "/cart12.png",
          price: "1099",
          decription: "Printed shirt",
          icon: "/colors6.png",
        },
      ],
      back: [
        {
          title: "Kakashi Hatake",
          image: "/cart1.png",
          price: "699",
          decription: "Drop shoulder",
          icon: "/colors1.png",
          button: "New",
        },
        {
          title: "Demon Inside",
          image: "/cart2.png",
          price: "699",
          decription: "Drop shoulder",
          icon: "/colors2.png",
          button: "New",
        },
        {
          title: "Itachi Uchika",
          image: "/cart3.png",
          price: "699",
          decription: "Drop shoulder",
          icon: "/colors3.png",
          button: "New",
        },
      ],
    };
  },
};
</script>

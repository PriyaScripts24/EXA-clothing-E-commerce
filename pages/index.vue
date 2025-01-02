<template>
  <div class="overflow-auto font-poppins">
    <!-- nav... -->
    <Header></Header>
    <!-- bg img... -->
    <section>
      <div>
        <img src="/background.png" alt="background" class="w-full mt-4" />
      </div>
    </section>
    <!-- section1... -->
    <section>
      <div class="flex items-center justify-between px-16 mt-2">
        <p class="font-bold text-[35px]">New Arrivals</p>
        <p class="font-bold text-[17px]">View all</p>
      </div>
      <div class="flex items-center justify-around">
        <div v-for="(item, index) in arrivals" :key="index">
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
    </section>
    <!-- section2 -->
    <section>
      <div class="flex items-center justify-between px-16 mt-2">
        <p class="font-bold text-[35px]">Oversize T-shirt</p>
        <p class="font-bold text-[17px]">View all</p>
      </div>
      <div class="flex items-center justify-around">
        <div v-for="(item, index) in oversize" :key="index">
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
    </section>
    <!-- section3 -->
    <section>
      <div class="flex items-center justify-between px-16 mt-2">
        <p class="font-bold text-[35px]">Drop Shoulder T-Shirt</p>
        <p class="font-bold text-[17px]">View all</p>
      </div>
      <div class="flex items-center justify-around">
        <div v-for="item in products" :key="item">
          <Card
            :image="item.image"
            :title="item.title"
            :price="item.price"
            :decription="item.decription"
            :icon="item.icon"
          />
        </div>
      </div>
    </section>
    <!-- section4... -->
    <section>
      <div class="flex items-center justify-between px-16 mt-2">
        <p class="font-bold text-[35px]">Printed Shirts</p>
        <p class="font-bold text-[17px]">View all</p>
      </div>
      <div class="flex items-center justify-around">
        <div v-for="item in docus" :key="item">
          <Card
            :image="item.image"
            :title="item.title"
            :price="item.price"
            :decription="item.decription"
            :icon="item.icon"
          />
        </div>
      </div>
    </section>
    <!-- section5... -->
    <section>
      <div class="flex items-center justify-between px-16 mt-2">
        <p class="font-bold text-[35px]">Printed Shorts</p>
        <p class="font-bold text-[17px]">View all</p>
      </div>
      <div class="flex items-center justify-around">
        <div v-for="item in types" :key="item">
          <Card
            :image="item.image"
            :title="item.title"
            :price="item.price"
            :decription="item.decription"
            :icon="item.icon"
          />
        </div>
      </div>
    </section>
    <!-- section6.. -->
    <section>
      <div
        class="flex items-center justify-around mt-14 bg-[#FFF1E6] w-[1270px] h-[370px] ml-[130px] rounded-2xl"
      >
        <div class="flex px-5 mt-[20px] text-center">
          <img
            src="/public/background2.png"
            alt="background"
            class="w-[380px] h-[320px] ml-[10px]"
          />
          <div class="px-10 ml-[200px]">
            <p class="text-[#C85904] font-serif text-[40px] -ml-[520px]">
              Exclusive offer
            </p>
            <div class="mt-8">
              <p class="-ml-[200px] text-[#C85904]">
                Unlock the ultimate style upgrade with our exclusive offer Enjoy
                savings of up to
              </p>
              <p class="-ml-[520px] text-[#C85904]">
                40% off on our latest New Arrivals
              </p>
            </div>
            <div
              class="flex flex-col items-center justify-center mt-5 -ml-[200px]"
            >
              <p
                class="text-salte-800 text-[20px] font-serif leading-12 text-[#C85904]"
              >
                {{ date }}
              </p>
              <div class="flex gap-2">
                <div
                  v-for="(i, index) in time.split(':')"
                  :key="index"
                  class="flex items-center gap-2 mt-3"
                >
                  <p
                    class="text-center font-bold text-[20px] p-3 rounded-sm bg-white text-[#C85904]"
                  >
                    {{ i }}
                  </p>
                  <p v-if="index < 3" class="fond-bold text-[20px]">:</p>
                </div>
              </div>
            </div>
            <button
              class="bg-[#FB8122] text-white px-[120px] p-2 rounded-full mt-6 -ml-[180px]"
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- section7.. -->
    <section>
      <p
        class="font-serif font-medium text-[44px] overflow- text-center mt-4 text-[#FB8122]"
      >
        Shop By Fandom
      </p>
      <div class="overflow-x-auto scroll-">
        <div class="flex gap-10 slider">
          <!-- <div class="flex items-center justify-center gap-10"> -->
          <div class="flex flex-col items-center justify-center flex-none">
            <img
              src="/public/game1.png"
              alt="game"
              class="w-[350px] h-[340px]"
            />
            <img
              src="/public/letter1.png"
              alt="letter"
              class="w-[250px] h-[80px]"
            />
          </div>
          <div class="flex flex-col items-center justify-center flex-none">
            <img
              src="/public/game2.png"
              alt="game"
              class="w-[350px] h-[340px]"
            />
            <img
              src="/public/letter2.png"
              alt="letter"
              class="w-[250px] h-[80px]"
            />
          </div>
          <div class="flex flex-col items-center justify-center flex-none">
            <img
              src="/public/game3.png"
              alt="game"
              class="w-[350px] h-[340px]"
            /><img
              src="/public/letter3.png"
              alt="letter"
              class="w-[250px] h-[80px]"
            />
          </div>
          <div class="flex flex-col items-center justify-center flex-none">
            <img
              src="/public/game1.png"
              alt="game"
              class="w-[350px] h-[340px]"
            />
            <img
              src="/public/letter1.png"
              alt="letter"
              class="w-[250px] h-[80px]"
            />
          </div>
          <div class="flex flex-col items-center justify-center flex-none">
            <img
              src="/public/game2.png"
              alt="game"
              class="w-[350px] h-[340px]"
            />
            <img
              src="/public/letter2.png"
              alt="letter"
              class="w-[250px] h-[80px]"
            />
          </div>
          <div class="flex flex-col items-center justify-center flex-none">
            <img
              src="/public/game3.png"
              alt="game"
              class="w-[350px] h-[340px]"
            /><img
              src="/public/letter3.png"
              alt="letter"
              class="w-[250px] h-[80px]"
            />
          </div>
        </div>
        <!-- </div> -->
      </div>
    </section>
    <!-- section8.. -->
    <section>
      <div
        class="bg-[#FFF1E6] w-full h-[400px] mt-3 flex justify-between items-center p-20"
      >
        <div class="flex gap-2 mt-5">
          <div data-aos="fade-up">
            <img
              src="/shirt1.png"
              alt="shirt"
              class="w-[220px] h-[250px] mt-24"
            />
          </div>
          <div data-aos="fade-down">
            <img
              src="/shirt2.png"
              alt="shirt"
              class="w-[220px] h-[250px] mt-6"
            />
          </div>
        </div>
        <div class="flex flex-col gap-8">
          <p class="font-bold text-[32px] font-sans leading-6">Get 30% Off</p>
          <p class="font-medium text-[12px] font-sans">
            for all new product purchases <br />
            &nbsp;&nbsp;&nbsp;&nbsp;min purchase Rs : 1500/-
          </p>
          <button
            class="bg-[#FB8122] text-white px-3 p-2 rounded-full text-[16px]"
          >
            SHOP NOW
          </button>
        </div>
        <div class="flex gap-2 mt-5">
          <div data-aos="fade-down">
            <img
              src="/shirt3.png"
              alt="shirt"
              class="w-[220px] h-[250px] mt-6"
            />
          </div>
          <div data-aos="fade-up">
            <img
              src="/shirt4.png"
              alt="shirt"
              class="w-[220px] h-[250px] mt-24"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- section9.. -->
    <section class="px-20">
      <p
        class="text-[#FB8122] font-medium text-[42px] text-center font-serif mt-4"
      >
        Feedback Corner
      </p>
      <!-- <div class="flex items-center justify-center gap-10 mt-5"> -->

      <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <div
            class="w-[420px] h-[230px] rounded-2xl shadow-2xl p-5 gap-6 flex flex-col"
          >
            <img src="/comma.png" alt="camma" class="w-[20px] h-[20px]" />
            <p class="text-[#C85904]">Wesly Raj</p>
            <p>
              The customer experience was exceptional from start to finish. The
              website is user-friendly, the checkout process was smooth, and the
              clothes I ordered fit perfectly. I'm beyond satisfied!
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="w-[420px] h-[230px] rounded-2xl shadow-2xl p-5 gap-6 flex flex-col bg-[#FFF1E6]"
          >
            <img src="/comma.png" alt="camma" class="w-[20px] h-[20px]" />
            <p class="text-[#C85904]">Victor Raj</p>
            <p>
              I absolutely love the quality and style of the clothing I
              purchased from this website. customer service was outstanding, and
              I received my order quickly. Highly recommended!
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="w-[420px] h-[230px] rounded-2xl shadow-2xl p-5 gap-6 flex flex-col"
          >
            <img src="/comma.png" alt="camma" class="w-[20px] h-[20px]" />
            <p class="text-[#C85904]">Jones</p>
            <p>
              I had a great experience shopping on this website. The clothes I
              bought are fashionable and comfortable. Highly satisfied!
            </p>
          </div>
        </swiper-slide>
        <!-- </div> -->
      </swiper>
    </section>
    <!-- section10.. -->
    <section>
      <p class="text-[#FB8122] font-serif text-[42px] text-center mt-10">
        Pay securely with
      </p>
      <marquee>
        <div class="flex items-center justify-center gap-20 mt-10">
          <img src="/gpay.png" class="w-[80px] h-[50px]" alt="gpay" />
          <img src="/phonepe.png" class="w-[80px] h-[50px]" alt="phonepe" />
          <img src="/paytm.png" class="w-[80px] h-[50px]" alt="paytm" />
          <img
            src="/master card.png"
            class="w-[80px] h-[50px]"
            alt="mastercard"
          />
          <img src="/amazonpay.png" class="w-[80px] h-[50px]" alt="amazonpay" />
          <img src="/paypal.png" class="w-[80px] h-[50px]" alt="paypal" />
          <img src="/pay.png" class="w-[80px] h-[50px]" alt="pay" />
        </div>
      </marquee>
    </section>
    <!-- section11.. -->
    <Footer />
  </div>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/scrollbar";
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper/modules";

// import required modules
import { createDateFormatter } from "intl-dateformat";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      arrivals: [
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
      products: [
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
      docus: [
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
      types: [
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
      time: "",
      date: "",
    };
  },

  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation, Scrollbar],
    };
  },
  mounted() {
    AOS.init();
    const formatDate = createDateFormatter({
      // numeric hour
      h: ({ hour }) => (hour[0] === "0" ? hour[1] : hour),
      // milliseconds
      SSS: (parts, date) => String(date.getTime()).slice(-3),
    });
    setInterval(() => {
      const date = new Date();
      this.time = formatDate(date, "hh:mm:ss:A");
    }, 1000);
    this.date = formatDate(new Date(), "DD-MM-YYYY MMM ddd");
  },
};
</script>
<style>
/* For WebKit browsers (Chrome, Safari, Edge) */
::-webkit-scrollbar {
  display: none; /* Hides the scrollbar */
}

/* For Firefox */
* {
  scrollbar-width: none; /* Hides the scrollbar */
  -ms-overflow-style: none; /* For Internet Explorer */
}
.slider {
  animation: slide-rightToLeft 10s linear infinite;
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

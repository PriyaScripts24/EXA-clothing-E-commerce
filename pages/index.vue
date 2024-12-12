<template>
  <div>
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
        <div v-for="item in arrivals" :key="item">
          <Card
            :image="item.image"
            :title="item.title"
            :price="item.price"
            :decription="item.decription"
            :icon="item.icon"
            :button="item.button"
          />
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
        <div v-for="item in items" :key="item">
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
          />
        </div>
      </div>
    </section>
    <!-- section5... -->
    <section>
      <div class="flex items-center justify-between px-16 mt-2">
        <p class="font-bold text-[35px]">Printed Shirts</p>
        <p class="font-bold text-[17px]">View all</p>
      </div>
      <div class="flex items-center justify-around">
        <div v-for="item in types" :key="item">
          <Card
            :image="item.image"
            :title="item.title"
            :price="item.price"
            :decription="item.decription"
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
            <div class="flex flex-col items-center justify-center mt-5 -ml-[200px]">
              <p class="text-salte-800 text-[20px] font-serif leading-12 text-[#C85904]">
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
            <button class="bg-[#FB8122] text-white px-[120px] p-2 rounded-full mt-6 -ml-[180px]">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- section7.. -->
     <section>
      <p class="font-serif font-medium text-[44px] text-center mt-4 text-[#FB8122] ">Shop By Fandom</p>
      <div class="flex gap-3 mt-4">
        <div class="flex flex-col items-center gap-2">
          <img src="/public/game1.png" alt="game" class="w-[700px] h-[340px] -ml-[190px]">
          <img src="/public/letter1.png" alt="letter" class="w-[250px] h-[80px] -ml-[450px]">
        </div>
        <div class="flex flex-col items-center">
          <img src="/public/game2.png" alt="game" class="w-[1200px] h-[340px] ">
          <img src="/public/letter2.png" alt="letter" class="w-[250px] h-[80px]  ">
        </div>
        <div class="flex flex-col items-center">
          <img src="/public/game3.png" alt="game" class="w-[700px] h-[340px] -mr-[190px]">
          <img src="/public/letter3.png" alt="letter" class="w-[250px] h-[80px] -mr-[450px] ">
        </div>
      </div>
     </section>
  </div>
</template>
<script>
import { createDateFormatter } from "intl-dateformat";
export default {
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
      items: [
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
        },
        {
          title: "DTF Printed",
          image: "/cart8.png",
          price: "999",
          decription: "Drop Shoulder T-Shirt",
        },
        {
          title: "Chobbar White",
          image: "/cart9.png",
          price: "999",
          decription: "Drop Shoulder T-Shirt",
        },
      ],
      docus: [
        {
          title: "Golden Flower",
          image: "/cart10.png",
          price: "1099",
          decription: "Printed shirt",
        },
        {
          title: "Casual Dotted",
          image: "/cart11.png",
          price: "1099",
          decription: "Printed shirt",
        },
        {
          title: "Party Wear",
          image: "/cart12.png",
          price: "1099",
          decription: "Printed shirt",
        },
      ],
      types: [
        {
          title: "Urban",
          image: "/cart13.png",
          price: "399",
          decription: "Printed shorts",
        },
        {
          title: "Tropical green",
          image: "/cart14.png",
          price: "399",
          decription: "Printed shorts",
        },
        {
          title: "Cargo",
          image: "/cart15.png",
          price: "399",
          decription: "Printed shorts",
        },
      ],
      time: "",
      date: "",
    };
  },
  mounted() {
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

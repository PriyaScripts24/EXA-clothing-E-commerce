<template>
  <div>
    <Header></Header>
    <!-- section1.. -->
    <section>
      <div>
        <p
          class="text-[#FB8122] md:text-[42px] text-[28px] font-bold text-center mt-4 font-serif"
        >
          FAQs
        </p>
        <div class="flex gap-3 px-20 mt-4 -ml-10 md:-ml-0">
          <a
            href="/"
            class="text-[#FB8122] md:text-[16px] text-[12px] font-[400px]"
            >Home</a
          >
          <p class="md:text-[16px] text-[12px] font-[400px]">/</p>
          <p class="md:text-[16px] text-[12px] font-[400px]">FAQs</p>
        </div>
        <p
          class="md:text-[16px] font-bold md:px-[120px] md:mt-7 px-[50px] mt-3"
        >
          FAQS
        </p>
      </div>
    </section>
    <!-- section2.. -->
    <section>
      <div class="p-6 -mt-3 md:px-[150px]">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="py-4 border-b border-gray-300"
        >
          <button
            class="flex justify-between w-full font-bold text-left text-gray-800"
            @click="toggle(index)"
          >
            <span
              :class="{ 'text-orange-600': item.open }"
              class="md:text-[17px] text-[12px]"
              >{{ item.title }}</span
            >
            <span class="text-orange-600">{{ item.open ? "-" : "+" }}</span>
          </button>
          <div v-if="item.open" class="mt-2 text-gray-700">
            <p
              v-for="(line, i) in item.content"
              :key="i"
              class="md:text-[14px] text-[10px]"
            >
              {{ line }}
            </p>
          </div>
        </div>
        <!-- <div class="flex justify-center mt-2">
          <a
            href="/Faq"
            class="text-[16px] font-semibold text-center mt-4 w-[120px] p-2 bg-orange-600 text-white rounded-3xl"
          >
            View More</a
          >
        </div> -->
      </div>
    </section>
    <!-- section3.. -->
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
      faqItems: [
        {
          title: "How do I contact your Customer Service?",
          content: [
            "Our modimal Customer Service Team is available Monday through Friday, 9 am - 5 pm ET, excluding holidays. You can reach us via email at hello@modimal.com (preferred and our fastest response), via chat using the icon in the right bottom cornern of our website, or via voicemail at +1(929) 460-3208. We will make sure to get back to you within 24 business hours.",
          ],
          open: true,
        },
        {
          title: "When will my order ship?",
          content: [
            "Our modimal Customer Service Team is available Monday through Friday, 9 am - 5 pm ET, excluding holidays. You can reach us via email at hello@modimal.com (preferred and our fastest response), via chat using the icon in the right bottom cornern of our website, or via voicemail at +1(929) 460-3208. We will make sure to get back to you within 24 business hours.",
          ],
          open: false,
        },
        {
          title: "Can I cancel or modify my order?",
          content: [
            "Our modimal Customer Service Team is available Monday through Friday, 9 am - 5 pm ET, excluding holidays. You can reach us via email at hello@modimal.com (preferred and our fastest response), via chat using the icon in the right bottom cornern of our website, or via voicemail at +1(929) 460-3208. We will make sure to get back to you within 24 business hours.",
          ],
          open: false,
        },
        {
          title: "What are my shipping options?",
          content: [
            "Our modimal Customer Service Team is available Monday through Friday, 9 am - 5 pm ET, excluding holidays. You can reach us via email at hello@modimal.com (preferred and our fastest response), via chat using the icon in the right bottom cornern of our website, or via voicemail at +1(929) 460-3208. We will make sure to get back to you within 24 business hours.",
          ],
          open: false,
        },
        {
          title: "What type of payment methods do you offer?",
          content: [
            "Our modimal Customer Service Team is available Monday through Friday, 9 am - 5 pm ET, excluding holidays. You can reach us via email at hello@modimal.com (preferred and our fastest response), via chat using the icon in the right bottom cornern of our website, or via voicemail at +1(929) 460-3208. We will make sure to get back to you within 24 business hours.",
          ],
          open: false,
        },
        {
          title: "Which size will fit me best?",
          content: [
            "We offer product and body measurements on each of our products pages, just click on “Size Guide” to find your best fit. Measuring guides are included.",
          ],
          open: true,
        },
        {
          title: "How do I take care of my modimal pieces?",
          content: [
            "We offer product and body measurements on each of our products pages, just click on “Size Guide” to find your best fit. Measuring guides are included.",
          ],
          open: false,
        },
        {
          title: "Where and how do you manufacture your products?",
          content: [
            "We offer product and body measurements on each of our products pages, just click on “Size Guide” to find your best fit. Measuring guides are included.",
          ],
          open: false,
        },
        {
          title: "How do you find and evaluate your suppliers?",
          content: [
            "We offer product and body measurements on each of our products pages, just click on “Size Guide” to find your best fit. Measuring guides are included.",
          ],
          open: false,
        },
        {
          title: "How do your suppliers support their workers?",
          content: [
            "We offer product and body measurements on each of our products pages, just click on “Size Guide” to find your best fit. Measuring guides are included.",
          ],
          open: false,
        },
      ],
    };
  },
  methods: {
    toggle(index) {
      this.faqItems[index].open = !this.faqItems[index].open;
    },
  },
};
</script>

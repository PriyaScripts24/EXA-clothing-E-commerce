<template>
  <div>
    <section>
      <div
        class="bg-[#321601] mt-8 md:flex justify-around items-center md:gap-2 md:h-[350px] text-center p-3"
      >
        <div class="flex flex-col gap-8">
          <p class="font-bold md:text-[20px] text-[15px] text-white mt-4">
            Join our club, get 15% off for your Birthday
          </p>
          <div
            class="flex items-center justify-between border border-white md:w-[450px] md:h-[30px] w-[310px] h-[10px] p-3 px-3 ml-8 md:mt-0"
          >
            <input
              type="text"
              placeholder="Enter Your Email Address"
              class="text-[#FFFFFF] md:text-[16px] text-[12px] bg-[#321601]"
            />
            <img
              src="/public/arrow.png"
              alt="arrow"
              class="w-[15px] h-[10px]"
              @click="sendNotifcation()"
            />
          </div>
          <div class="flex gap-2 ml-7 md:ml-8">
            <input
              type="checkbox"
              class="md:w-[15px] md:h-[15px] w-[12px] h-[12px] md:mt-3"
            />
            <p class="text-white md:text-[14px] text-[10px]">
              By Submittng your email, you agree to receive advertising <br />
              emails from Exa Clothing.
            </p>
          </div>
          <div class="flex gap-4 ml-28 md:ml-7">
            <img
              src="/public/instagram.png"
              class="w-[20px] h-[20px]"
              alt="instagram"
            />
            <img
              src="/public/facebook.png"
              class="w-[20px] h-[20px]"
              alt="facebook"
            />
            <img
              src="/public/pinterest.png"
              class="w-[20px] h-[20px]"
              alt="pinterest"
            />
            <img
              src="/public/behance.png"
              class="w-[20px] h-[20px]"
              alt="behance"
            />
          </div>
        </div>
        <div class="flex flex-col gap-3 mt-3 md:mt-0">
          <p class="text-white font-sans text-[16px] font-bold">
            Help & Support
          </p>
          <a href="#" class="text-[12px] text-white">Orders Tracking</a>
          <a href="#" class="text-[12px] text-white">Orders & Shipping</a>
          <a href="#" class="text-[12px] text-white">Returns & Refunds</a>
          <a href="#" class="text-[12px] text-white">FAQs</a>
          <a href="#" class="text-[12px] text-white">Contact Us</a>
        </div>
        <div class="flex flex-col gap-3 mt-3 md:mt-0">
          <p class="text-white font-sans text-[16px] font-bold">
            About Exa Clothing
          </p>
          <a href="#" class="text-[12px] text-white">Collection</a>
          <a href="#" class="text-[12px] text-white">Offers</a>
          <a href="#" class="text-[12px] text-white">Privacy Policy</a>
          <a href="#" class="text-[12px] text-white">Support System</a>
          <a href="#" class="text-[12px] text-white">Teams & Condition</a>
        </div>
      </div>
      <div
        class="flex justify-center gap-2 -mt-2 md:-mt-2 md:ml-0 bg-[#321601] w-full py-2 md:text-center"
      >
        <img
          src="/public/copyright.png"
          alt="copyright"
          class="w-[20px] h-[20px]"
        />

        <p class="text-white text-[12px]">
          2024 Exa Clothing. All Rights Reserved.
        </p>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
import { Notivue, Notification, push } from "notivue";
export default {
  data() {
    return {
      push,
    };
  },
  mounted() {},
  methods: {
    sendNotifcation() {
      this.push.success({
        title: "Notification",
        message: "You have successfully subscribed to our newsletter",
        type: "success",
      });
    },
  },
};
</script>

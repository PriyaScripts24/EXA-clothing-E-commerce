<template>
  <div>
    <!-- nav.. -->
    <Header></Header>
    <!-- section1.. -->
    <section>
      <p class="text-[#FB8122] text-[42px] text-center mt-4 font-serif">
        Contact Us
      </p>
    </section>
    <!-- section2.. -->
    <section>
      <div
        class="bg-[#FFF1E6] flex flex-col gap-9 justify-start items-start px-[120px] mt-3 py-5"
      >
        <p class="font-[400px] text-[20px] flex flex-col justify-between gap-6">
          We always love hearing from our customers! Please do not hesitate to
          contact us should you have any questions <br />
          regarding our products and sizing recommendations or inquiries about
          your current order.
        </p>
        <p class="font-[400px] text-[20px] flex flex-col justify-between gap-6">
          Contact our Customer Care team through the contact form below, email
          us at customercare@Exacolthing.com or live <br />
          chat with us via our chat widget on the bottom right hand corner of
          this page.
        </p>
        <p class="font-[400px] text-[20px] flex flex-col justify-between gap-6">
          We will aim to respond to you within a business days.
        </p>
      </div>
    </section>
    <!-- section3... -->
    <section>
      <div>
        <div class="flex gap-3 ml-[305px] mt-5">
          <img src="/mail.png" alt="mail" class="w-[25px] h-[25px]" />
          <p class="font-bold text-[24px] -mt-1">Write Us</p>
        </div>
        <div
          class="flex flex-col gap-7 mt-5 px-[120px] justify-center items-center"
        >
          <div class="flex gap-20">
            <input
              v-model="formData.name"
              type="text"
              placeholder="First Name"
              class="border border-black p-1 text-gray-600 w-[420px]"
            />
            <input
              v-model="formData.name"
              type="text"
              placeholder="Last Name"
              class="border border-black p-1 text-gray-600 w-[420px]"
            />
          </div>
          <input
            v-model="formData.email"
            type="text"
            placeholder="Enter Your Email Address"
            class="border border-black p-1 text-gray-600 w-[920px]"
          />
          <div>
            <textarea
              v-model="formData.email"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Your Email Address"
              class="border border-black p-1 text-gray-600 w-[920px]"
            ></textarea>
          </div>
        </div>
        <button
          class="bg-[#FB8122] rounded-full p-2 text-white px-9 mt-8 ml-[305px]"
          @click="submit()"
        >
          Submit
        </button>
      </div>
    </section>
    <!-- section4.. -->
    <section>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62385.75454491273!2d79.02805287054484!3d12.24085373075978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bacc0852cd3d6cd%3A0x74002b16e5bac856!2sTiruvannamalai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1734599461078!5m2!1sen!2sin"
          width="1500"
          height="450"
          style="border: 0"
          allowfullscreen="false"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="px-[100px] mt-10"
        ></iframe>
      </div>
    </section>
    <!-- section5.. -->
    <section>
      <div class="flex justify-around mt-8 items-centers">
        <div
          class="bg-[#FFF1E6] w-[400px] h-[150px] rounded-2xl flex flex-col justify-center items-center gap-2"
        >
          <img src="/chat.png" alt="chat" class="w-[20px] h-[20px]" />
          <p class="font-bold text-[16px]">Chat with us</p>
          <p class="font-[400px] text-[12px]">We are here and ready to chat</p>
          <button class="border border-[#FB8122] px-[100px] p-2 text-[#FB8122]">
            Start chat
          </button>
        </div>
        <div
          class="bg-[#FFF1E6] w-[400px] h-[150px] rounded-2xl flex flex-col justify-center items-center gap-2"
        >
          <img src="/call.png" alt="chat" class="w-[20px] h-[20px]" />
          <p class="font-bold text-[16px]">Call us</p>
          <p class="font-[400px] text-[12px]">We're here to Talk to You</p>
          <button class="border border-[#FB8122] px-[100px] p-2 text-[#FB8122]">
            +91 7418520963
          </button>
        </div>
        <div
          class="bg-[#FFF1E6] w-[400px] h-[150px] rounded-2xl flex flex-col justify-center items-center gap-2"
        >
          <img src="/mail.png" alt="chat" class="w-[20px] h-[20px]" />
          <p class="font-bold text-[16px]">Email Us</p>
          <p class="font-[400px] text-[12px]">
            You are welcome to send us an email
          </p>
          <button class="border border-[#FB8122] px-[100px] p-2 text-[#FB8122]">
            Send Email
          </button>
        </div>
      </div>
    </section>
    <!-- section6... -->
    <section>
      <Footer></Footer>
    </section>
  </div>
</template>

<script>
import { Notivue, Notification, push } from "notivue";
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submit() {
      try {
        console.log(this.formData.name === "");
        if (this.formData.name === "") {
          push.error("Please Eenter your name");
          return;
        }
        if (!this.formData.email) {
          push.error("enter your email");
          return;
        }
        if (!this.formData.email) {
          push.error("entry correct email id");
          return;
        }
        push.success("successfully Done");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

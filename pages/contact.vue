<template>
  <div>
    <!-- nav.. -->
    <Header></Header>
    <!-- section1.. -->
    <section>
      <p
        class="text-[#FB8122] md:text-[42px] text-[28px] text-center mt-4 font-serif"
      >
        Contact Us
      </p>
    </section>
    <!-- section2.. -->
    <section>
      <div
        class="bg-[#FFF1E6] flex flex-col md:gap-9 gap-3 justify-start items-start md:px-[120px] px-5 mt-3 py-5"
      >
        <p
          class="font-[400px] md:text-[20px] text-[12px] flex flex-col justify-between gap-6"
        >
          We always love hearing from our customers! Please do not hesitate to
          contact us should you have any questions <br />
          regarding our products and sizing recommendations or inquiries about
          your current order.
        </p>
        <p
          class="font-[400px] md:text-[20px] text-[12px] flex flex-col justify-between gap-6"
        >
          Contact our Customer Care team through the contact form below, email
          us at customercare@Exacolthing.com or live <br />
          chat with us via our chat widget on the bottom right hand corner of
          this page.
        </p>
        <p
          class="font-[400px] md:text-[20px] text-[12px] flex flex-col justify-between gap-6"
        >
          We will aim to respond to you within a business days.
        </p>
      </div>
    </section>
    <!-- section3... -->
    <section>
      <div>
        <div class="flex gap-3 md:ml-[790px] ml-[120px] mt-5">
          <img src="/mail.png" alt="mail" class="w-[25px] h-[25px]" />
          <p class="font-bold text-[24px] -mt-1">Write Us</p>
        </div>
        <div
          class="flex flex-col gap-7 mt-5 md:px-[120px] md:p-6 px-12 justify-center items-center"
        >
          <div class="md:flex md:gap-20">
            <input
              v-model="formData.firstName"
              type="text"
              placeholder="First Name"
              class="border border-black p-1 text-gray-600 md:w-[420px] px-16 md:px-0"
            />
            <input
              v-model="formData.lastName"
              type="text"
              placeholder="Last Name"
              class="border border-black p-1 text-gray-600 md:w-[420px] mt-4 md:mt-0 px-16 md:px-0"
            />
          </div>
          <input
            v-model="formData.email"
            type="text"
            placeholder="Enter Your Email"
            class="border border-black p-1 text-gray-600 md:w-[920px] px-16 md:px-0 -mt-2 md:-mt-0"
          />
          <div>
            <textarea
              v-model="formData.address"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Your Address"
              class="border border-black p-1 text-gray-600 md:w-[920px] px-12 md:px-0 -mt-2 md:-mt-0 md:h-[200px] h-[140px]"
            ></textarea>
          </div>
        </div>
        <button
          class="bg-[#FB8122] rounded-full p-2 text-white px-9 md:mt-8 mt-3 md:ml-[790px] ml-[140px]"
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
          style="border: 0"
          allowfullscreen="false"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="md:px-[100px] mt-10 md:w-[1700px] md:h-[550px] w-[320px] h-[220px] ml-7 md:mt-0"
        ></iframe>
      </div>
    </section>
    <!-- section5.. -->
    <section>
      <div
        class="mt-8 text-justify md:justify-around md:flex ml-[20px] md:ml-0"
      >
        <div
          class="bg-[#FFF1E6] md:w-[400px] md:h-[150px] w-[340px] h-[140px] rounded-2xl flex flex-col justify-center items-center gap-2"
        >
          <img
            src="/chat.png"
            alt="chat"
            class="md:w-[20px] md:h-[20px] w-[15px] h-[15px]"
          />
          <p class="font-bold md:text-[16px] text-[12px]">Chat with us</p>
          <p class="font-[400px] md:text-[12px] text-[10px]">
            We are here and ready to chat
          </p>
          <button
            class="border border-[#FB8122] md:px-[100px] px-[50px] md:p-2 p-1 md:text-[16px] text-[12px] text-[#FB8122]"
          >
            Start chat
          </button>
        </div>
        <div
          class="bg-[#FFF1E6] md:w-[400px] md:h-[150px] w-[340px] h-[140px] mt-3 md:mt-0 rounded-2xl flex flex-col justify-center items-center gap-2"
        >
          <img
            src="/call.png"
            alt="chat"
            class="md:w-[20px] md:h-[20px] w-[15px] h-[15px]"
          />
          <p class="font-bold md:text-[16px] text-[12px]">Call us</p>
          <p class="font-[400px] md:text-[12px] text-[10px]">
            We're here to Talk to You
          </p>
          <button
            class="border border-[#FB8122] md:px-[100px] px-[50px] md:p-2 p-1 md:text-[16px] text-[12px] text-[#FB8122]"
          >
            +91 7418520963
          </button>
        </div>
        <div
          class="bg-[#FFF1E6] md:w-[400px] md:h-[150px] w-[340px] h-[140px] mt-3 md:mt-0 rounded-2xl flex flex-col justify-center items-center gap-2"
        >
          <img
            src="/mail.png"
            alt="chat"
            class="md:w-[20px] md:h-[20px] w-[15px] h-[15px]"
          />
          <p class="font-bold md:text-[16px] text-[12px]">Email Us</p>
          <p class="font-[400px] md:text-[12px] text-[10px]">
            You are welcome to send us an email
          </p>
          <button
            class="border border-[#FB8122] md:px-[100px] px-[50px] md:p-2 p-1 md:text-[16px] text-[12px] text-[#FB8122]"
          >
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
        firstName: "",
        lastName: "",
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

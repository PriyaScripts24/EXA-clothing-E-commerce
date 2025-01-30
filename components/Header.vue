<template>
  <div class="w-full bg-white">
    <section>
      <div>
        <p
          class="text-white font-medium bg-[#FB8122] text-center w-full text-[12px] md:text-[18px]"
        >
          Enjoy Free Shipping On All Orders
        </p>
      </div>
      <div
        class="flex items-center justify-between px-3 mt-2 md:justify-around md:mt-4"
      >
        <img
          src="/logo.png"
          alt="logo"
          class="w-[60px] h-[60px] hidden md:block"
        />
        <div id="app">
          <header :class="{ sticky: isSticky }">
            <div id="menu-icon" :class="{ 'bx-x': isMenuOpen }">
              <img
                src="/menu.png"
                alt="menu"
                class="w-[40px] h[40px] md:hidden block"
                @click="toggleMenu"
              />
              <div class="hidden md:block">
                <nav class="flex gap-6 md:gap-16">
                  <a
                    href="/"
                    class="font-medium md:text-[18px] text-[10px] text-[#FB8122] hover:text-[#321601]"
                    >Home</a
                  >
                  <a
                    href="/sales"
                    class="font-medium md:text-[18px] text-[10px] text-[#321601] hover:text-[#FB8122]"
                    >Sale</a
                  >
                  <a
                    href="/products"
                    class="font-medium md:text-[18px] text-[10px] text-[#321601] hover:text-[#FB8122]"
                    >Product</a
                  >
                  <a
                    href="/about"
                    class="font-medium md:text-[18px] text-[10px] text-[#321601] hover:text-[#FB8122]"
                    >About us</a
                  >
                  <a
                    href="/contact"
                    class="font-medium md:text-[18px] text-[10px] text-[#321601] hover:text-[#FB8122]"
                    >Contact</a
                  >
                </nav>
              </div>
            </div>
          </header>
        </div>
        <div class="flex gap-3">
          <img
            src="/profile.png"
            alt="profile"
            class="md:w-[38px] md:h-[38px] w-[24px] h-[24px]"
            @click="closeForm()"
          />
          <div class="relative">
            <div @click="openForm()">
              <img
                src="/card.png"
                alt="card"
                class="bg-[#FB8122] rounded-full text-white md:w-[40px] md:h-[40px] w-[24px] h-[24px] md:p-2 p-1"
              />
              <p
                class="absolute text-white bg-black rounded-full md:px-1 -top-2 md:left-7 px-0.5 left-4 text-xs md:text-lg"
              >
                {{ cart.length }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-3" :class="isMenuOpen ? 'block' : 'hidden'">
        <div v-for="(item, index) in nav" :key="index">
          <NuxtLink :to="item.path">
            <h1 :class="getRoute(item.path) ? 'text-red-600' : ''">
              {{ item.name }}
            </h1>
          </NuxtLink>
        </div>
      </div>
    </section>
    <div
      v-if="entryform"
      class="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div class="fixed inset-0 bg-black opacity-50"></div>
      <div
        class="z-10 max-w-4xl max-h-full p-5 mx-auto overflow-auto bg-white rounded-lg shadow-lg md:p-8"
      >
        <div
          class="md:w-[477px] md:h-[700px] w-[275px] h-[330px] bg-white flex flex-col md:gap-4 gap-3"
        >
          <img
            src="public/multi.png"
            alt="multiple"
            class="md:w-[25px] md:h-[25px] w-[15px] h-[15px] right-0"
            @click="openForm()"
          />
          <p class="font-bold md:text-[24px] text-[18px] px-4">Your Cart</p>
          <div v-if="cart.length <= 0">
            <p class="text-[12px] md:text-[20px]">cart is empty</p>
          </div>
          <div v-else>
            <div
              class="flex gap-5 px-4 md:gap-6"
              v-for="item in cart"
              :key="item"
            >
              <img
                :src="item.images[0]"
                alt="buy"
                class="md:w-[175px] md:h-[150px] w-[80px] h-[80px]"
              />
              <div class="flex flex-col gap-6 md:gap-5">
                <div
                  class="flex items-center justify-between gap-6 px-6 md:gap-8"
                >
                  <div>
                    <p class="font-[400px] md:text-[16px] text-[12px]">
                      {{ item.name }}
                    </p>
                    <p
                      class="text-[#737373] font-[400px] md:text-[14px] text-[12px]"
                    >
                      Medium | Black
                    </p>
                  </div>
                  <div>
                    <img
                      src="public/Trash.png"
                      alt="trash"
                      class="md:w-[18px] md:h-[18px] w-[12px] h-[12px] mt-4"
                      @click="deleteCart(item.id)"
                    />
                  </div>
                </div>
                <div
                  class="flex items-center justify-between gap-8 px-6 md:gap-24"
                >
                  <div>
                    <div class="flex">
                      <p
                        class="text-[#737373] line-through text-[12px] md:text[16px]"
                      >
                        999
                      </p>
                      <p class="text-[12px] md:text[16px]">₹{{ item.price }}</p>
                    </div>
                    <p class="text-[#FB8122] text-[12px] md:text[16px]">
                      (10% Off)
                    </p>
                  </div>
                  <div>
                    <div
                      class="flex border border-[#DDDBDC] p-2 md:w-[70px] md:h-[50px] w-[55px] h-[30px] gap-3"
                    >
                      <p
                        class="md:text-[20px] text-[12px]"
                        @click="updatedCart(item.id, item.quantity - 1)"
                      >
                        -
                      </p>
                      <p class="md:text-[20px] text-[12px]">
                        {{ item.quantity }}
                      </p>
                      <p
                        class="md:text-[20px] text[12px] -mt-1"
                        @click="updatedCart(item.id, item.quantity + 1)"
                      >
                        +
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="md:mt-[150px] flex flex-col gap-4 px-4 border border-white shadow-white mt-12"
          >
            <div class="flex items-center justify-between">
              <p class="font-[400px] md:text-[16px] text-[12px]">
                Subtotal
                <span class="font-[400px] md:text-[14px] text-[12px]"
                  >({{ getTotalQuantity() }} items)</span
                >
              </p>
              <p class="font-[400px] md:text-[16px] text-[12px]">
                {{ getTotalPrice() }}/-
              </p>
            </div>
            <button
              class="bg-black text-white font-[400px] md:text-[14px] text-[12px] p-2 text-center rounded-md"
            >
              CONTINUE TO CHECKOUT
            </button>
            <p class="font-[400px] md:text-[12px] text-[10px] text-center">
              Get it now before it sells out.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div
        v-if="signform"
        class="fixed inset-0 z-50 flex items-center justify-center"
      >
        <div class="fixed inset-0 bg-black opacity-50"></div>
        <div class="relative">
          <button
            @click="closeForm()"
            class="absolute flex justify-center w-8 h-8 text-center text-white bg-red-500 rounded-full -top-2 -left-2"
          >
            X
          </button>

          <div
            class="z-10 max-w-6xl max-h-full p-8 mx-auto overflow-auto bg-white rounded-lg shadow-lg"
          >
            <div class="flex flex-col gap-5">
              <div class="gap-2 text-black/60">
                <p class="font-bold">Name :</p>
                <input
                  v-model="formData.name"
                  type="text"
                  name=""
                  placeholder="Entry your name"
                  class="px-3 py-1 border border-black/45"
                />
              </div>
              <div class="gap-2 text-black/60">
                <p class="font-bold">E-mail :</p>
                <input
                  v-model="formData.email"
                  type="emails"
                  name=""
                  placeholder="@gamil.com"
                  class="px-3 py-1 border border-black/45"
                />
              </div>
              <div class="gap-2 text-black/60">
                <p class="font-bold">Password :</p>
                <input
                  v-model="formData.password"
                  type="password"
                  name=""
                  placeholder="8-Digit Number"
                  class="px-3 py-1 border border-black/45"
                />
              </div>
            </div>
            <button
              class="w-[180px] px-4 py-2 font-bold bg-orange-500 hover:bg-orange-800 mt-5 rounded-2xl ml-3"
              @click="submit()"
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { Notivue, Notification, push } from "notivue";
export default {
  data() {
    return {
      cart: [],
      push,
      applyform: true,
      entryform: false,
      signform: false,
      nav: [
        { name: "Home", path: "/" },
        { name: "Sales", path: "/sales" },
        { name: "Products", path: "/products" },
        { name: "About Us", path: "/About" },
        { name: "Contact", path: "/Contact" },
      ],
      formData: {
        name: "",
        email: "",
        password: "",
      },
      isSticky: false,
      isMenuOpen: false,
    };
  },
  mounted() {
    console.log(
      "/products".replace("/", "").split("/")[0],
      useRoute().fullPath.replace("/", "").split("/")[0]
    );
    this.getCart();
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    document.body.classList.remove("no-scroll");
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    getRoute(route) {
      const path = useRoute().fullPath.replace("/", "").split("/")[0];
      return path === route.replace("/", "").split("/")[0];
    },
    async getCart() {
      const response = await axios.get("/api/cart");
      this.cart = response.data.cart;
    },
    openForm() {
      this.entryform = !this.entryform;
      if (this.entryform) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    },
    closeForm() {
      this.signform = !this.signform;
      if (this.signform) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    },
    submit() {
      console.log(this.formData.name === "");
      if (this.formData.name === "") {
        push.error("enter your name");
        return;
      }
      if (!this.formData.email) {
        push.error("enter your email");
        return;
      }
      if (!this.formData.password) {
        push.error("entry correct password");
        return;
      }
      push.success("successfully Done");
    },

    getTotalQuantity() {
      let quantity = 0;
      for (let e of this.cart) {
        quantity += e.quantity;
      }
      return quantity;
    },
    getTotalPrice() {
      let price = 0;
      for (let e of this.cart) {
        price += parseInt(e.price.toString()) * e.quantity;
      }
      return price;
    },
    async updatedCart(id, quantity) {
      console.log(id);
      const response = await axios.post(`/api/cart/updated`, {
        id,
        quantity,
      });
      this.getCart();
    },
    async deleteCart(id) {
      console.log(id);
      const response = await axios.post(`/api/cart/delete`, {
        id,
      });
      this.getCart();
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleScroll() {
      this.isSticky = window.scrollY > 0;
    },
  },
};
</script>
<style>
.no-scroll {
  overflow: hidden;
}
</style>

<template>
  <div>
    <!-- section1.. -->
    <section>
      <Header></Header>
    </section>
    <!-- section2.. -->
    <section>
      <div class="flex flex-wrap justify-center gap-20 md:mt-20">
        <div class="flex-col gap-20 p-5 px-5 md:px-20 md:border md:flex mt-14">
          <div class="form-container">
            <h2 class="font-bold text-[18px] text-[#FB8122]">
              Billing Address
            </h2>

            <label for="country">Country</label>
            <select v-model="form.country" id="country">
              <option value="">Select Country</option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
            </select>

            <label for="address">Address</label>
            <input
              type="text"
              v-model="form.address"
              id="address"
              placeholder="Address"
            />

            <label for="city">City</label>
            <input
              type="text"
              v-model="form.city"
              id="city"
              placeholder="City"
            />

            <label for="state">State</label>
            <input
              type="text"
              v-model="form.state"
              id="state"
              placeholder="State"
            />

            <label for="zip">ZIP Code</label>
            <input
              type="text"
              v-model="form.zip"
              id="zip"
              placeholder="ZIP Code"
            />

            <button @click="submitForm">Submit</button>
          </div>
          <div class="w-[310px] mt-10">
            <h2 class="text-lg font-bold text-[#FB8122]">
              Contact information
            </h2>

            <form @pay.prevent="payForm">
              <div class="mb-4">
                <label
                  class="block text-sm font-medium text-gray-700"
                  for="email"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  v-model="email"
                  class="p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
                  placeholder="Email"
                  required
                />
              </div>

              <div class="mb-4">
                <label
                  class="block text-sm font-medium text-gray-700"
                  for="phone"
                  >Phone</label
                >
                <input
                  type="tel"
                  id="phone"
                  v-model="phone"
                  class="p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
                  placeholder="Phone"
                  required
                />
              </div>

              <button
                type="submit"
                class="py-2 text-white bg-black rounded-md hover:bg-gray-800"
              >
                Pay
              </button>
            </form>
          </div>
        </div>
        <div>
          <div
            class="p-6 bg-white md:mt-10 md:rounded-lg md:shadow-lg md:max-w-md md:mx-auto"
          >
            <h2 class="mb-2 text-xl font-semibold text-center md:text-3xl">
              $200.00
            </h2>
            <button
              class="block mb-4 text-lg text-blue-500 underline md:mx-auto md:text-2xl -px-4"
            >
              View detailed order
            </button>

            <div class="space-y-4">
              <div class="p-4 border rounded-lg">
                <label class="flex items-center space-x-2">
                  <input type="radio" v-model="paymentMethod" value="card" />
                  <span class="font-medium">Credit/Debit Card</span>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                    class="h-6 ml-auto"
                    alt="Visa"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                    class="h-6"
                    alt="Mastercard"
                  />
                </label>

                <div v-if="paymentMethod === 'card'" class="mt-4 space-y-3">
                  <input
                    type="text"
                    v-model="cardNumber"
                    class="w-full p-2 border rounded-md"
                    placeholder="XXXX XXXX XXXX XXXX"
                    maxlength="19"
                  />
                  <input
                    type="text"
                    v-model="cardName"
                    class="w-full p-2 border rounded-md"
                    placeholder="Name on Card"
                  />
                  <div class="flex space-x-2">
                    <input
                      type="text"
                      v-model="expiryDate"
                      class="w-1/2 p-2 border rounded-md"
                      placeholder="MM/YY"
                      maxlength="5"
                    />
                    <input
                      type="text"
                      v-model="cvv"
                      class="w-1/2 p-2 border rounded-md"
                      placeholder="CVV"
                      maxlength="3"
                    />
                  </div>
                  <label class="flex items-center mt-2 space-x-2">
                    <input type="checkbox" v-model="saveCard" />
                    <span>Save card for future payments</span>
                  </label>
                </div>
              </div>

              <div class="p-4 border rounded-lg">
                <label class="flex items-center space-x-2">
                  <input type="radio" v-model="paymentMethod" value="paypal" />
                  <span class="font-medium">PayPal</span>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                    class="h-6 ml-auto"
                    alt="PayPal"
                  />
                </label>
                <p
                  v-if="paymentMethod === 'paypal'"
                  class="mt-2 text-sm text-gray-500"
                >
                  You will be redirected to PayPal to complete your order
                  securely.
                </p>
              </div>
            </div>

            <div class="mt-6 md:px-[120px]">
              <nuxt-link
                to="/pay"
                class="p-5 px-8 py-2 mt-4 ml-24 text-white bg-black rounded-lg md:ml-0 hover:bg-gray-800"
                @click="placeOrder"
                >Place Order</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section3.. -->
    <section>
      <Footer></Footer>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paymentMethod: "card",
      cardNumber: "",
      cardName: "",
      expiryDate: "",
      cvv: "",
      saveCard: false,

      form: {
        country: "",
        address: "",
        city: "",
        state: "",
        zip: "",
      },
      email: "",
      phone: "",
    };
  },

  methods: {
    placeOrder() {
      if (this.paymentMethod === "card") {
        if (
          !this.cardNumber ||
          !this.cardName ||
          !this.expiryDate ||
          !this.cvv
        ) {
          alert("Please fill in all card details.");
          return;
        }
      }
      alert(
        `Payment method: ${this.paymentMethod}\nOrder placed successfully!`
      );
    },
    payForm() {
      console.log("Email:", this.email);
      console.log("Phone:", this.phone);
      alert("Payment submitted!");
    },
    submitForm() {
      console.log("Form Submitted:", this.form);
      alert("Billing address submitted!");
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 300px;
  font-family: Arial, sans-serif;
}

label {
  font-weight: bold;
  display: block;
  margin-top: 10px;
}

select,
input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

button {
  margin-top: 15px;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>

<template>
  <div>
    <div class="flex flex-col items-center justify-center">
      <div class="md:mt-[10%] mt-[50%]">
        <div
          class="flex flex-col items-center justify-center p-6 text-center bg-white rounded-lg shadow-lg mt-[20%] border"
        >
          <div class="">
            <img
              src="public/sucess.png"
              alt="sucess"
              class="md:h-20 md:w-30 h-10 w-15 animate-jump-in animate-infinite animate-duration-[2000ms] animate-delay-1000 animate-ease-in animate-alternate animate-fill-both md:px-60"
            />
          </div>
          <h2 class="mt-6 text-lg font-semibold text-green-600 md:text-2xl">
            Payment Successful
          </h2>
          <p class="mt-4 text-sm text-gray-500 md:text-xl">
            Thank you for your payment. <br />
            Your transaction was completed successfully.
          </p>
          <nuxt-link
            to="/"
            class="block p-2 mt-8 text-black bg-[#FB8122] hover:bg-[#FB8] rounded-md md:px-4 underline-none text-md md:text-xl"
          >
            Go back to Homepage
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

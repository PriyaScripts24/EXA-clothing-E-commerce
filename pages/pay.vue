<template>
  <div>
    <div class="flex flex-col items-center justify-center">
      <div class="mt-[10%]">
        <div
          class="flex flex-col items-center justify-center p-6 text-center bg-white rounded-lg shadow-lg mt-[20%] border"
        >
          <div class="">
            <img
              src="/sucess.png"
              alt="sucess"
              class="h-20 text-white w-30 animate-jump-in animate-infinite animate-duration-[2000ms] animate-delay-1000 animate-ease-in animate-alternate animate-fill-both px-60"
            />
          </div>
          <h2 class="mt-6 text-2xl font-semibold text-green-600">
            Payment Successful
          </h2>
          <p class="mt-4 text-gray-500">
            Thank you for your payment. Your transaction was completed
            successfully.
          </p>
          <nuxt-link
            to="/"
            class="block p-2 px-4 mt-8 text-black bg-blue-500 rounded-md underline-none"
          >
            Go back to Homepage
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

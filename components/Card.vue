<template>
  <div>
    <div class="relative w-[290px] mt-5">
      <img
        :src="image"
        alt="cart"
        class="md:w[420px] md:h-[350px] w-[280px] h-[300px]"
      />
      <div class="absolute flex items-center justify-between w-full px-5 top-1">
        <button
          class="bg-[#FB8122] text-white md:px-3 px-2 rounded-full text-[12px] md:text-[16px]"
        >
          {{ button }}
        </button>
        <img
          src="/public/like icon.png"
          alt="like"
          class="md:w-[20px] md:h-[20px] w-[14px] h-[14px] hover:bg-[#FB8122]"
        />
      </div>
      <div class="px-4 mt-1">
        <p class="text-[14px] md:text-[20px]">{{ title }}</p>
        <div class="flex items-center justify-between mt-1">
          <p class="text-[14px] md:text-[20px]">{{ decription }}</p>
          <p class="text-[14px] md:text-[20px]">₹{{ price }}</p>
        </div>
        <img
          :src="icon"
          alt="color"
          class="md:w-[280px] md:h-[20px] w-[140px] h-[10px] mt-1"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["image", "title", "price", "decription", "icon", "button"],
};
</script>

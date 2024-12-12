<template>
<div>
    <div class="relative w-[290px]  mt-5 ">
        <img :src="image" alt="cart" class="w[420px] h-[350px] ">
      <div class="absolute flex items-center justify-between w-full px-5 top-1 ">
        <button class="bg-[#FB8122] text-white px-3 rounded-full">{{ button }}</button>
        <img src="/public/like icon.png" alt="like" class="w-[20px] h-[20px]">
      </div>
      <div class="px-4 mt-1">
        <p>{{ title }}</p>
        <div class="flex items-center justify-between mt-1">
          <p>{{ decription }}</p>
          <p>₹{{ price }}</p>
        </div>
       <img :src="icon" alt="color" class="w-[280px] h-[20px] mt-1">
      </div>
    </div>
        
</div>
</template>
<script>
export default{
   props:['image','title','price','decription','icon','button']
}
</script>
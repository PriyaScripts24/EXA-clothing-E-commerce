import { cart } from "~/server/cart.js"

export default defineEventHandler((event)=>{
    return {success:true,cart}
})
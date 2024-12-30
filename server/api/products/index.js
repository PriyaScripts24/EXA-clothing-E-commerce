import { products } from "~/server/products.js"

export default defineEventHandler((event)=>{
    return {success:true,products}
})
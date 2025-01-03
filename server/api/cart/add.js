import { cart } from "~/server/cart.js"
import { products } from "~/server/products.js"

export default defineEventHandler(async (event)=>{
    try{
        const {id}= await readBody(event)
        console.log(id)
    for (let item of products){
        if(item.id===id){
            cart.push({id:item.id,name:item.name,images:item.images,price:item.price,quantity:1})
            return {success:true,message:"added"}
        }
    }
    return {success:true,message:"added"}
    }
    catch(err){
        console.log(err)
    }
})
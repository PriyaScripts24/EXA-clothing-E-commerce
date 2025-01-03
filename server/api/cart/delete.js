import { cart } from "~/server/cart.js"
import { products } from "~/server/products.js"

export default defineEventHandler(async (event)=>{
    try{
        const {id}= await readBody(event)
        console.log(id)
    for (let i in cart){
        if(cart[i].id===id){
           
            cart.splice(i,1)
        
            return {success:true,message:"delete"}
        }
    }
    return {success:true,message:"product not found"}
    }
    catch(err){
        console.log(err)
    }
})
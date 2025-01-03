import { cart } from "~/server/cart.js"
import { products } from "~/server/products.js"

export default defineEventHandler(async (event)=>{
    try{
        const {id,quantity}= await readBody(event)
        console.log(id,quantity)
    for (let i in cart){
        if(cart[i].id===id){
            if(quantity===0){
                cart.splice(i,1)
            }else{
            cart[i].quantity=quantity}
            return {success:true,message:"updated"}
        }
    }
    return {success:true,message:"product not found"}
    }
    catch(err){
        console.log(err)
    }
})
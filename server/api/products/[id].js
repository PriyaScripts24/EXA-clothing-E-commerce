import { products } from "~/server/products.js"

export default defineEventHandler((event)=>{
    let product={}
    const {id}= getRouterParams(event)
    for (let item of products){
        if(item.id===id){  
            return {success:true,product:item}
        }
    }
    return {sucess:false,product}
})
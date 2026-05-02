
export const product=async()=>{
    const res=await fetch("https://sun-cart-self.vercel.app/products");
    const data= await res.json()
    return data;
}




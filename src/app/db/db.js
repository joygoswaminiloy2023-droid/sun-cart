export const product=async()=>{
    const res=await fetch("https://sun-cart-self.vercel.app/data.json");
    const data= await res.json()
    return data;
}

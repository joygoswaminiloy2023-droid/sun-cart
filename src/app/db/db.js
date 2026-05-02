
export const product=async()=>{
    const res=await fetch("https://suncart-server.vercel.app/products");
    const data= await res.json()
    return data;
}




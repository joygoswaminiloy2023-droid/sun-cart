
import Card from "../Components/Card";
import Hero from "../Components/Hero";
import SummerCare from "../Components/SummerCare";
import { product } from "../db/db";

export default async function Home() {

  const res = await product(); 
  
  console.log(res); // This will now log your JSON data

  return (
    <>

    <header>
      <Hero></Hero>
    </header>

    <main>

      <div className="max-w-7xl mx-auto p-10">

        {/* popular products  */}
        <div>
        <h1 className="text-3xl font-bold mb-10 text-center md:text-left">Popular Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
     
          {res.map((product,ind) =><Card key={ind} product={product}></Card>)}
        </div>
        </div>

 <div>
        <h1 className="text-3xl font-bold mb-10 text-center md:text-left">Popular Products</h1>
    
     
         <SummerCare></SummerCare>
       
        </div>


      </div>
    </main>

    
      
    </>
  );
}
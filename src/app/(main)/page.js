
import { FaShoppingCart } from "react-icons/fa";
import Card from "../Components/Card";
import Hero from "../Components/Hero";
import SummerCare from "../Components/SummerCare";
import { product } from "../db/db";
import { MdTipsAndUpdates } from "react-icons/md";
import TopBrands from "../Components/TopBrands";

export default async function Home() {

  const res = await product(); 
  
  console.log(res); 

  return (
    <>

    <header>
      <Hero></Hero>
    </header>

    <main>

      <div className="max-w-7xl mx-auto p-10">

        {/* popular products  */}
        <div>
        <h1 className="text-3xl font-bold mb-10 text-center md:text-left flex gap-2 mt-5"><FaShoppingCart /><span className="text-yellow-400">Popular</span> Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
     
          {res.map((product,ind) =><Card key={ind} product={product}></Card>)}
        </div>
        </div>

 <div>
        <h1 className="text-3xl font-bold mb-5 text-center md:text-left mt-10 flex gap-2"><MdTipsAndUpdates/><span className="text-yellow-400">Summer</span>Tips</h1>
    
     
         <SummerCare></SummerCare>

        
       
        </div>


      </div>
       <TopBrands></TopBrands>
    </main>

    
      
    </>
  );
}
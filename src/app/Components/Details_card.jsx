import Image from 'next/image';
import React from 'react';




const Details_card = ({singleproduct}) => {
    const {image,name,description,rating,brand,stock,category,price}=singleproduct;
    return (
   <div className="max-w-5xl mx-auto p-4">
  <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
    
    
    <div className="md:w-1/2 relative bg-gray-50 flex items-center justify-center p-6 border-r border-gray-100">
      <Image src={image} alt={name}width={400}height={400} className="w-full h-auto max-h-100 object-contain rounded-xl transform hover:scale-105 transition-transform duration-300"/>
      {/* Dynamic Stock Badge */}
      <div className={`absolute top-6 left-6 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-sm backdrop-blur-sm ${stock > 0 ? 'bg-green-100/90 text-green-800' : 'bg-red-100/90 text-red-800'}`}>
        {stock > 0 ? `${stock} in stock` : 'Out of Stock'}
      </div>
    </div>


    <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-2">
         
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            {brand} <span className="text-gray-300 mx-2">|</span> {category}
          </p>
       
          <div className="flex items-center gap-1.5 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100">
            <span className="text-yellow-500 text-lg">★</span>
            <span className="text-sm font-bold text-yellow-700">{rating}</span>
          </div>
        </div>

       
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          {name}
        </h1>
        <p className="text-gray-600 text-base leading-relaxed mb-8">
          {description}
        </p>
      </div>

      
      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center justify-between mt-auto">
        <div>
          <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Price</span>
          <p className="text-4xl font-black text-gray-950">${price}</p>
        </div>
        
        <button 
          disabled={stock === 0}
          className={`px-10 py-4 rounded-xl font-bold transition-all shadow-md active:scale-95
            ${stock > 0 
              ? 'bg-gray-950 text-white hover:bg-gray-800 shadow-gray-200' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
            }`}
        >
          {stock > 0 ? 'Add to Cart' : 'Sold Out'}
        </button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Details_card;
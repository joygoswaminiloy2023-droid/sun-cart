import Image from 'next/image';
import { FaRegStar } from 'react-icons/fa';
import {  MdStar } from 'react-icons/md';

const Card = ({ product }) => {
 
  if (product.rating < 4.7) return null;

  return (
    <div className="card bg-white shadow-sm border border-gray-100 hover:border-yellow-500 transition-all duration-300 group">
      
      <figure className="px-3 pt-3">
        <div className="relative w-full h-48 rounded-xl overflow-hidden bg-gray-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </figure>

      <div className="card-body p-4 gap-1">
        {/* Product Name & Rating Star Row */}
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-bold text-gray-800 leading-tight">
            {product.name}
          </h2>
          <div className="flex items-center gap-1 text-sm font-bold text-gray-700">
             <span className="text-yellow-500"><FaRegStar /></span> {product.rating}
          </div>
        </div>

      
    <div className="flex items-center gap-0.5 mb-2">
  <MdStar className="text-yellow-500 text-sm" />
  <MdStar className="text-yellow-500 text-sm" />
  <MdStar className="text-yellow-500 text-sm" />
  <MdStar className="text-yellow-500 text-sm" />
  <MdStar className="text-yellow-500 text-sm" />
</div>

       
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-500 font-semibold">Price</span>
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
        </div>

        
        <div className="card-actions">
          <button className="btn btn-block bg-yellow-500 hover:bg-orange-400 border-none text-white font-bold transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
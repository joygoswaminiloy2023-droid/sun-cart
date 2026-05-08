import { product } from '@/app/db/db';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { MdStar } from 'react-icons/md';

const Page = async () => {

  const products = await product();

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        All Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {products?.map((product) => {


          return (

            <div
              key={product.id}
              className="card bg-white shadow-sm border border-gray-100 hover:border-yellow-500 transition-all duration-300 group"
            >

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

                {/* Product Name & Rating */}
                <div className="flex justify-between items-start">

                  <h2 className="text-lg font-bold text-gray-800 leading-tight">
                    {product.name}
                  </h2>

                  <div className="flex items-center gap-1 text-sm font-bold text-gray-700">

                    <span className="text-yellow-500">
                      <FaRegStar />
                    </span>

                    {product.rating}

                  </div>

                </div>

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-2">

                  <MdStar className="text-yellow-500 text-sm" />
                  <MdStar className="text-yellow-500 text-sm" />
                  <MdStar className="text-yellow-500 text-sm" />
                  <MdStar className="text-yellow-500 text-sm" />
                  <MdStar className="text-yellow-500 text-sm" />

                </div>

                {/* Price */}
                <div className="flex justify-between items-center mb-3">

                  <span className="text-gray-500 font-semibold">
                    Price
                  </span>

                  <span className="text-xl font-bold text-gray-900">
                    ${product.price}
                  </span>

                </div>

                {/* Button */}
                <div className="card-actions">

                  <Link
                    href={`/Popularproducts/${product.id}`}
                    className="btn btn-block bg-yellow-500 hover:bg-orange-400 border-none text-white font-bold transition-colors"
                  >
                    View Details
                  </Link>

                </div>

              </div>

            </div>

          );
        })}

      </div>

    </div>
  );
};

export default Page;
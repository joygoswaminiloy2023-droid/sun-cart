import React from 'react';
import { product } from '../../db/db'
import Card from '@/app/Components/Card';
import { FaShoppingCart } from 'react-icons/fa';

const page = async() => {

      const res = await product(); 
  console.log(res); 

    return (
    <div className="max-w-7xl mx-auto p-10 text-center">
<h1 className='text-4xl'>All Products</h1>
      </div>
    );
};

export default page;
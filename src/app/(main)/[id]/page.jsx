import React from 'react';
import { product } from '../../db/db'
import Details_card from '@/app/Components/Details_card';
import { notFound } from 'next/navigation';

const Details = async({params}) => {
    const res=await params;
    const product_id=Number(res.id);
    console.log(product_id);
    
    const products=await product();
    console.log(products);
const singleproduct=products.find(p=>p.id===product_id)

if(!singleproduct){
    return notFound();
}
    
    return (
        <div className='my-22.5'>
            <Details_card singleproduct={singleproduct}></Details_card>
        </div>
    );
};

export default Details;
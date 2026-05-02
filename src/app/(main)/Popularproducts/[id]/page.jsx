import React from 'react';
import { product } from '../../../db/db'
import Details_card from '@/app/Components/Details_card';
import { notFound } from 'next/navigation';

export const generateMetadata = async ({ params }) => {
    const { id } = await params;

    const products = await product(); 
    const singleProduct = products.find(p => p.id == id);
    console.log(singleProduct.name)

    return {
        title: singleProduct.name,
    };
};

const Details = async({params}) => {
    const res=await params;

    
    const products=await product();
    console.log(products);
const singleproduct=products.find(p=>p.id==res.id)

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
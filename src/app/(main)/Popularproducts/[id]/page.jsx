import React from 'react';
import Details_card from '@/app/Components/Details_card';
import { notFound } from 'next/navigation';

const Details = async ({ params }) => {

    const { id } = await params;
    const product_id = Number(id);


    const res = await fetch("https://sun-cart-self.vercel.app/data.json");
    
    if (!res.ok) {
        return notFound();
    }

    const products = await res.json();


    const singleproduct = products.find(p => p.id === product_id);


    if (!singleproduct) {
        return notFound();
    }

    return (
        <div className='my-22.5'>
            <Details_card singleproduct={singleproduct} />
        </div>
    );
};

export default Details;
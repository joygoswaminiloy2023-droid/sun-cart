import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const TopBrands = () => {

const brands = [
  { name: "Neutrogena", icon: "https://wp.logos-download.com/wp-content/uploads/2019/07/Neutrogena_Logo.png?dl" },
  { name: "La Roche-Posay", icon: "https://photo-assets.usopen.org/images/pics/misc/LRP.png" },
  { name: "Nivea", icon: "https://1000logos.net/wp-content/uploads/2021/04/Nivea-logo.png" },
  { name: "CeraVe", icon: "https://brandlogos.net/wp-content/uploads/2023/10/cerave-logo_brandlogos.net_utxqt.png" },
  { name: "Cetaphil", icon: "https://www.cetaphil.com.sg/on/demandware.static/Sites-Galderma-SG-Site/-/default/dwa1ee173a/images/Cetaphil_Logo_285.png" },
  { name: "Dove", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Dove_logo.png" },
  { name: "Ray Ban", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ray-Ban_logo.svg/1280px-Ray-Ban_logo.svg.png" }
];
    return (
        <div className="py-10 bg-linear-to-r from-yellow-50 to-orange-100">
            <h2 className="text-2xl font-bold text-center mb-6">Top Summer Brands</h2>

            <Marquee   pauseOnHover="true">
                <div className="flex gap-6">
                    {brands.map((item, ind) => (
                        <div
                            key={ind}
                            className="flex flex-col items-center justify-center w-28 h-28 bg-white rounded-full shadow-md hover:shadow-xl hover:scale-110 transition duration-300 border border-gray-200"
                        >
                              <Image
                                src={item.icon}
                                alt={item.name}
                                width={80}
                                height={80}
                                className="object-contain mb-2"
                            />
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default TopBrands;
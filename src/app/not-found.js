'use client'

import Lottie from "lottie-react";
import notFoundSun from "../../public/animation/Not Found.json";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-linear-to-br from-sky-50 via-yellow-50 to-orange-100 text-center px-4">
      
      
      <Lottie animationData={notFoundSun} loop={true} className="w-72" />

      
      

      <p className="text-gray-600 mt-2 max-w-md">
        Oops! The page you are looking for doesn&apos;t exist or has been moved.
      </p>

      
      <Link
        href="/"
        className="mt-6 px-6 py-3 flex gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full shadow-md transition"
      >
        Go Back Home <FaHome />
      </Link>

    </div>
  );
}
"use client";

import React from "react";
import { FaEnvelope, FaLock, FaUser, FaImage, FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Register = () => {

      const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()
  
  const handlereg=(data)=>{
    console.log(data)
  }
  
  

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      
      <div
        className="absolute inset-0 bg-cover bg-center blur-[2px] scale-110"
        style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/002/266/590/small/summer-beach-background-free-vector.jpg')" }}
      ></div>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-full max-w-md bg-transparent backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl p-8">
        
        <h1 className="text-2xl font-bold text-center text-yellow-500 mb-2">
          Create Account
        </h1>

        <p className="text-center text-xl text-white mb-6 font-bold">
           <span className='text-yellow-500'> Sun </span>Cart
        </p>

        <form className="space-y-5" onSubmit={handleSubmit(handlereg)}>

          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-500" />
            <input {...register("Name", { required: "Required" })}
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {errors.Name && <p className="text-red-500">{errors.Name.message}</p>}
          </div>

          <div className="relative">
            <FaImage className="absolute left-3 top-3 text-gray-500" />
            <input {...register("Photo", { required: true })}
              type="text"
              placeholder="Photo URL"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
             {errors.Photo && <p className="text-red-500">{errors.Name.message}</p>}
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
            <input {...register("Email", { required: "Required" })}
              type="email"
              placeholder="Email address"
              className="w-full pl-10 pr-4 py-2 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {errors.Email && <p className="text-red-500">{errors.Email.message}</p>}
          </div>

             <div className="relative">
        <FaLock className="absolute left-3 top-3 text-gray-500" />
       <input
  type="password"
  placeholder="Password"
  className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-800"
  {...register("password", {
    required: "Password cannot be empty",

    minLength: {
      value: 8,
      message: "Password must be at least 8 characters",
    },

    pattern: {
      value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
      message:
        "Must include uppercase, number, and special character",
    },
  })}
/>
        {errors.password && (
  <span className="text-red-500 text-sm">
    {errors.password.message}
  </span>
)}
</div>

          <button className="w-full bg-yellow-400 text-white py-2 rounded-lg hover:bg-sky-400 transition">
            Register
          </button>

          <p className="text-center text-sm text-yellow-400 mt-4">
            Already have an account?{" "}
            <Link href="Login" className="underline text-white">
              Login
            </Link>
          </p>

        </form>

<div className="relative flex items-center py-2">
            <div className="grow border-t border-white/30"></div>
            <span className="shrink mx-4 text-white text-xs uppercase tracking-widest font-semibold">Or continue with</span>
            <div className="grow border-t border-white/30"></div>
          </div>

          <div className="flex gap-4">
            <button 
              type="button" 
              className="flex-1 flex items-center justify-center gap-2 bg-sky-400 hover:bg-yellow-400 text-white py-2 rounded-lg transition-all active:scale-95 shadow-sm font-medium"
            >
              <FaGoogle className="text-white" />Google
            </button>
          </div>

      </div>
    </div>
  );
};

export default Register;
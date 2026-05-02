'use client'
import React from 'react';
import Link from "next/link";
import { FaEnvelope, FaGithub, FaGoogle, FaLock } from "react-icons/fa";
import { useForm } from 'react-hook-form';


const Login = () => {


    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

const handlelogin=(data)=>{
  console.log(data)

}

    return (
  
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

     
      <div
        className="absolute inset-0 bg-cover bg-center blur-[2px] scale-110"
        style={{
          backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/002/266/590/small/summer-beach-background-free-vector.jpg')", 
        }}
      ></div>


      <div className="absolute inset-0 bg-black/40"></div>

      
      <div className="relative z-10 w-full max-w-md bg-transparent backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl p-8">

        <h1 className="text-2xl font-bold text-center text-white mb-2">
          <span className='text-white'>Login to</span><span className='text-yellow-500'> Sun </span>Cart
        </h1>

        <p className="text-center text-sm text-white mb-6">
          Beat the heat with Sun Cart
        </p>

        <form className="space-y-5" onSubmit={handleSubmit(handlelogin)}>

         
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
            <input {...register("Email", { required: "Required" })}
              type="email"
              placeholder="Email address"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
            Login
          </button>

         
          <p className="text-center text-sm text-yellow-600 mt-4">
            Don&apos;t have an account?{" "}
            <Link href="Register" className="underline text-white">
              Sign up
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


export default Login;
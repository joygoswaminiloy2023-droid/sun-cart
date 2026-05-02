'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Nav = () => {
const path=usePathname();
console.log(path)

const { data: session } = authClient.useSession()
const user =session?.user
console.log(user)
  const navLinks = (
      <>
      <li>
        <Link
          href="/"
          className={`hover:text-yellow-500 font-semibold transition-colors ${
            path === "/" ? "border-b-2 border-yellow-500" : ""
          }`}
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          href="/Product"
          className={`hover:text-yellow-500 font-semibold transition-colors ${
            path === "/Product" ? "border-b-2 border-yellow-500" : ""
          }`}
        >
          Products
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar  shadow-md px-4 lg:px-8 bg-sky-400">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
   <div className="dropdown">
  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
    </svg>
  </div>

  <ul 
    tabIndex={0} 
    className="menu menu-sm dropdown-content bg-transparent rounded-box z-100 absolute mt-3 w-52 p-2 shadow-2xl gap-2 text-black"
  >
    {navLinks}
  </ul>
</div>
        
        {/* Logo */}
        <Link href="/" className="btn btn-ghost text-2xl font-bold tracking-tight text-white">
          <span className="text-yellow-500">Sun</span>Cart
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 text-white">
          {navLinks}
        </ul>
      </div>

      
     {user ? (
  <div className="navbar-end flex items-center gap-4">
    {/* Logout Button */}
    <Link 
      href="/Login" // Usually handles a logout route or function
      className="py-2 px-6 rounded-full bg-yellow-500 text-sm font-bold text-white hover:bg-sky-500 transition-all duration-300 shadow-sm"
    >
      Logout
    </Link>

    {/* User Avatar */}
    <Link href="/Profile" className="avatar">
      <div className="w-10 h-10 rounded-full ring-2 ring-yellow-500 ring-offset-base-100 ring-offset-2 cursor-pointer overflow-hidden">
        <Image 
          src={user.image || "/default-avatar.png"} // Fallback image check
          width={40} 
          height={40} 
          alt="User profile"
        />
      </div>
    </Link>
  </div>
) : (
  <div className="navbar-end">
    <Link 
      href="/Login" 
      className="py-2 px-6 rounded-full bg-yellow-500 text-sm font-bold text-white hover:bg-sky-500 transition-all duration-300 shadow-sm"
    >
      Login
    </Link>
  </div>
)}
    </div>
  );
};

export default Nav;
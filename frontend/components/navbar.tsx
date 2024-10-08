'use client';

import Link from 'next/link';
import React from 'react';


const Navbar_3 = () => {

  const handleLoginClick = () => {
    window.location.href = '/login';
  };
  return (
    <nav className="bg-white p-4 bg-opacity-50 fixed top-0 left-0 right-0 z-10 border-shadow">
      <div className="flex  justify-between w-full">
        <p className="text-blue-500 font-sans text-2xl ml-4 font-inter">Moms Canteen</p>
        <div className="flex items-center space-x-10">
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/cart">Cart</Link>
          <button className="bg-green  px-5 py-1 rounded-lg animate-bounce" onClick={() => {
            alert("Order Placed");
          }}>
            Place Order
          </button>
          <button
      className="bg-red-500 px-5 py-1 rounded-lg animate-bounce"
      onClick={handleLoginClick}
    >
      Login
    </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar_3;

import React from 'react';
// import MenuSection from './menu';

const Footer = () => {
    return (
        <footer className="relative bg-blue-500 py-10 mt-20">
            <div className="flex justify-between items-center flex-wrap max-w-6xl mx-auto px-5">
                <div className="flex flex-col items-start text-left absolute left-10">
                    <h1 className="text-lime-500 text-4xl">Moms Canteen</h1>
                    <p className="text-white font-bold text-lg">Order your favourite food from the menu</p>  
                    <button className="bg-green-500 text-white px-5 py-1 rounded-lg mt-2" onClick={() => {
                        alert('Order Placed');
                    }}>
                        Menu
                    </button>
                </div>
                <div className="ml-52">
                    <h4 className="text-lg text-white mb-2">About</h4>
                    <ul className="list-none p-0">
                        <li className="mb-1">
                            <a href="#" className="text-white transition-colors hover:text-lime-500">Our story</a>
                        </li>
                        <li>
                            <a href="#" className="text-white transition-colors hover:text-lime-500">Aim</a>
                        </li>
                    </ul>
                </div>
                <div className="ml-8">
                    <h4 className="text-lg text-white mb-2">Contact us</h4>
                    <ul className="list-none p-0">
                        <li className="mb-1">
                            <a href="#" className="text-white transition-colors hover:text-lime-500">Phone number</a>
                        </li>
                        <li>
                            <a href="#" className="text-white transition-colors hover:text-lime-500">Email</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-5 border-t border-gray-600 pt-3 text-center">
                <a href="#" className="text-white transition-colors hover:text-lime-500 mr-5">Terms & Conditions</a>
                <p className="text-white text-sm mt-2">All rights reserved by JOBLE</p>
            </div>
        </footer>
    );
};

export default Footer;

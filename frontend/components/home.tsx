import React from 'react';
import Navbar_3 from './navbar';
import Footer from './fer';
import MenuSection from './menu';

const Home_Page = () => {
    return (
        <div>
            <Navbar_3 />
            <div className="flex justify-center items-center h-80">
            <h1 className="text-4xl font-bold">Welcome to Moms Canteen</h1>
            </div>
            <div className="justify-center items-center">
            <p className="text-2xl font-bold text-center bg-white">Order your favourite food from the menu</p>
            <MenuSection />
            </div>
            <Footer />
        </div>
    );
};

export default Home_Page;
import React from "react";
import Navbar_3 from "./navbar";
import Footer from "./fer";
import MenuSection from "./menu";

const Home_Page = () => {
  return (
    <div className="bg-blue-300">
      <Navbar_3 />
      <div className="flex justify-center items-center h-52">
        <h1 className="text-4xl text-white font-bold mt-20">Welcome to Moms Canteen</h1>
      </div>
      <div className="snap-x snap-mandatory overflow-x-auto scrollbar-hide flex">
  <div className="snap-center flex-shrink-0 w-full h-64">
    <img src="canteen.jpg" alt="Canteen" className="w-full h-full object-cover" />
  </div>
  <div className="snap-center flex-shrink-0 w-full h-64">
    <img src="canteen-food.jpg" alt="Canteen Food" className="w-full h-full object-cover" />
  </div>
  <div className="snap-center flex-shrink-0 w-full h-64">
    <img src="canteen-food2.jpg" alt="Canteen Food 2" className="w-full h-full object-cover" />
  </div>
</div>
      <div className="justify-center items-center">
        <p className="text-2xl font-bold text-center bg-white">
          Order your favourite food from the menu
        </p>
        <MenuSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home_Page;

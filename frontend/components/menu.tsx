'use client';

import React, { useEffect, useState } from 'react';
import Navbar_3 from './navbar';

const MenuSection = () => {
    const [menudata, setMenudata] = useState([]);
    const [clickedItem, setClickedItem] = useState(null);
    const [cart, setCart] = useState(() => {
        // Retrieve cart from localStorage when component mounts
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Fetch data from backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/menu');
                if (!response.ok) {
                    const errorText = await response.text(); // Get the error response text
                    throw new Error(`Network response was not ok: ${errorText}`);
                }
                const data = await response.json();
                setMenudata(data);
            } catch (error) {
                console.error('There was a problem with your fetch operation:', error);
            }
        };

        fetchData();
    }, []);

    const groupedItems = menudata.reduce((acc, item) => {
        const { category } = item;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(item);
        return acc;
    }, {});

    const handleClick = (sectionIndex, itemIndex) => {
        setClickedItem({ sectionIndex, itemIndex });
    };

    const handleAddToCart = (item) => {
        const updatedCart = [...cart, item];
        setCart(updatedCart);
        // Persist the updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    useEffect(() => {
        const persistCart = JSON.parse(localStorage.getItem('cart'));
        if (persistCart) {
            setCart(persistCart);
        }
    }, []);

    return (
        <div className="h-screen overflow-y-auto bg-gray-100"> {/* Fixed background class */}
            <Navbar_3 />
            <div className="mt-20">
                {Object.entries(groupedItems).map(([section, items], sectionIndex) => (
                    <div key={sectionIndex} className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 text-center capitalize">{section}</h2>
                        <div className="flex flex-wrap justify-center">
                            {items.map((item, index) => (
                                <div key={index} className="m-2 p-1 w-30" onClick={() => handleClick(sectionIndex, index)}>
                                    <div className="text-blue-500 text-center font-bold bg-orange-300">{item.item}</div>
                                    <img src={item.image} alt={item.item} className="w-full h-28 object-cover" />
                                    <div className='flex bg-green-100'> {/* Added background color for visibility */}
                                        {clickedItem && clickedItem.sectionIndex === sectionIndex && clickedItem.itemIndex === index && (
                                            <div className="bg-opacity-75 flex items-center rounded-lg text-center">
                                                <span className="text-blue-600 font-bold ">₹{item.price}</span>
                                            </div>
                                        )}
                                        <div className="text-center text-blue-500 ml-2">Exp.Time: {item.expectedTime}</div>
                                    </div>
                                    <button 
                                        className="bg-blue-500 text-white font-bold py-1 px-2 rounded w-full animate-pulse"
                                        onClick={() => handleAddToCart(item)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuSection;

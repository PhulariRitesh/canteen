'use client';

import React,{useState} from 'react';


const MenuSection = () => {
 
    const [clickedItem, setClickedItem] = useState({ sectionIndex: null, itemIndex: null });
    const [cart, setCart] = useState([]);
    const data = {
        snacks: [
          {
            item: "Burger",
            price: 100,
            image: "burger.jpg",
            expectedTime: "15 mins"
          },
          {
            item: "Pizza",
            price: 200,
            image: "pizza.jpg",
            expectedTime: "20 mins"
          },
          {
            item: "Pasta",
            price: 150,
            image: "pasta.jpg",
            expectedTime: "25 mins"
          },
          {
            item: "Sandwich",
            price: 50,
            image: "sandwich.jpg",
            expectedTime: "10 mins"
          }
        ],
        beverages: [
          {
            item: "Coke",
            price: 50,
            image: "coke.jpg",
            expectedTime: "5 mins"
          },
          {
            item: "Pepsi",
            price: 50,
            image: "pepsi.jpg",
            expectedTime: "5 mins"
          },
          {
            item: "Fanta",
            price: 50,
            image: "fanta.jpg",
            expectedTime: "5 mins"
          },
          {
            item: "Sprite",
            price: 50,
            image: "sprite.jpg",
            expectedTime: "5 mins"
          }
        ],
        desserts: [
          {
            item: "Ice Cream",
            price: 50,
            image: "icecream.jpg",
            expectedTime: "10 mins"
          },
          {
            item: "Cake",
            price: 100,
            image: "cake.jpg",
            expectedTime: "15 mins"
          },
          {
            item: "Donut",
            price: 50,
            image: "donut.jpg",
            expectedTime: "10 mins"
          },
          {
            item: "Cupcake",
            price: 50,
            image: "cupcake.jpg",
            expectedTime: "10 mins"
          }
        ],
        fastfood: [
          {
            item: "French Fries",
            price: 50,
            image: "frenchfries.jpg",
            expectedTime: "10 mins"
          },
          {
            item: "Hot Dog",
            price: 50,
            image: "hotdog.jpg",
            expectedTime: "10 mins"
          },
          {
            item: "Nuggets",
            price: 50,
            image: "nuggets.jpg",
            expectedTime: "15 mins"
          },
          {
            item: "Popcorn",
            price: 50,
            image: "popcorn.jpg",
            expectedTime: "5 mins"
          }
        ],
        roti: [
          {
            item: "Butter Roti",
            price: 10,
            image: "butterroti.jpg",
            expectedTime: "5 mins"
          },
          {
            item: "Plain Roti",
            price: 5,
            image: "plainroti.jpg",
            expectedTime: "5 mins"
          },
        ],
        rice: [
          {
            item: "Plain Rice",
            price: 50,
            image: "plainrice.jpg",
            expectedTime: "15 mins"
          },
          {
            item: "Fried Rice",
            price: 100,
            image: "friedrice.jpg",
            expectedTime: "20 mins"
          },
          {
            item: "Jeera Rice",
            price: 75,
            image: "jeerarice.jpg",
            expectedTime: "15 mins"
          },
          {
            item: "Veg Biryani",
            price: 100,
            image: "vegbiryani.jpg",
            expectedTime: "25 mins"
          },
          {
            item: "Paneer Biryani",
            price: 150,
            image: "paneerbiryani.jpg",
            expectedTime: "30 mins"
          }
        ],
        breakfast: [
          {
            item: "Poha",
            price: 50,
            image: "poha.jpg",
            expectedTime: "10 mins"
          },
          {
            item: "Upma",
            price: 50,
            image: "upma.jpg",
            expectedTime: "10 mins"
          },
          {
            item: "Idli",
            price: 50,
            image: "idli.jpg",
            expectedTime: "10 mins"
          },
          {
            item: "Dosa",
            price: 50,
            image: "dosa.jpg",
            expectedTime: "15 mins"
          }
        ]
      };
      
const handleClick = (sectionIndex, itemIndex) => {
    setClickedItem({ sectionIndex, itemIndex });
};

const handleAddToCart = (item) => {
    setCart([...cart, item]);
    alert("${item.item} added to cart");};
return (
    <div className="h-screen overflow-y-auto bg-gray">
        {Object.entries(data).map(([section, items], sectionIndex) => (
            <div key={sectionIndex} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 text-center capitalize">{section}</h2>
                <div className="flex flex-wrap justify-center">
                    {items.map((item, index) => (
                        <div key={index} className="m-2 p-1 w-30"
                        onClick={() => handleClick(sectionIndex,index)}>
                            <div className="text-blue-500 text-center font-bold bg-orange">{item.item}</div>
                                <img src={item.image} alt={item.item} className="w-full h-28 object-cover" />
                                <div className='flex bg-green'>
{clickedItem && clickedItem.sectionIndex === sectionIndex && clickedItem.itemIndex === index && (
                                    <div className="bg-opacity-75 flex i rounded-lg text-center">
                                        <span className="text-blue-600 font-bold ">₹{item.price}</span>
                                    </div>
                                )}
                                <div className="text-center text-blue-500 ml-2">Exp.Time: {item.expectedTime}</div>
                                </div>
                                
                                <button 
                                    className="bg-blue-500 text-white font-bold py-1 px-2 rounded w-full"
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
);
};
export default MenuSection;

import React from 'react';

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

const AddMenuData = () => {
    const handleAddMenuData = async () => {
        try {
            const response = await fetch('http://localhost:8000/menu', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to add menu data');
            }

            const result = await response.json();
            console.log('Menu data added:', result);
            alert('Menu data added successfully!');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <button onClick={handleAddMenuData} className="bg-blue-500 text-white px-4 py-2 rounded">
                Add All Menu Data
            </button>
        </div>
    );
};

export default AddMenuData;

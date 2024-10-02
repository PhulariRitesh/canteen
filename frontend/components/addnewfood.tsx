import React, { useState } from 'react';
import axios from 'axios';

const AddFoodItem = () => {
    const [item, setItem] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [expectedTime, setExpectedTime] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/food/add', {
                item,
                price,
                image,
                expectedTime,
                category: 'custom', 
                available: true, 
            });

            console.log('New food item added:', response.data);
            // Optionally, reset form fields after successful submission
            setItem('');
            setPrice(0);
            setImage('');
            setExpectedTime('');
        } catch (error) {
            console.error('Error adding food item:', error);
        }
    };

    return (
        <div>
            <h2>Add New Food Item</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Item Name" value={item} onChange={(e) => setItem(e.target.value)} required />
                <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}} required />
                <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
                <dropdown value={category} onChange={(e) => setCategory(e.target.value)} required />
                <input type="text" placeholder="Expected Time" value={expectedTime} onChange={(e) => setExpectedTime(e.target.value)} required />
                <button type="submit">Add Food Item</button>
            </form>
        </div>
    );
};

export default AddFoodItem;

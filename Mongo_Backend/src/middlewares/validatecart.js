const Food = require('../models/food.model');  

const validateCart = async (order) => {
    try {
        const cartItems = order.cart;
        const invalidItems = [];

        // Fetch all menu items from the database
        const menuItems = await Food.find();

        // Check each item in the cart against the menu items
        cartItems.forEach(cartItem => {
            const menuItem = menuItems.find(menu => menu._id.toString() === cartItem._id);
            
            if (!menuItem || !menuItem.available) {
                invalidItems.push({
                    item: cartItem.item,
                    reason: !menuItem ? 'Item not found' : 'Item not available'
                });
            }
        });

        if (invalidItems.length > 0) {
            return { 
                status: false, 
                message: 'Invalid items in cart', 
                invalidItems 
            };
        }

        return { status: true, message: 'Cart is valid' };
    } catch (error) {
        return { status: false, message: 'Error validating cart', error };
    }
};

module.exports = validateCart;

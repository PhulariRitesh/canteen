const validateCart = async (order) => {
    const items = order.items;
    const menuItems = await MenuItem.find({});
    const menuItemsMap = menuItems.reduce((acc, item) => {
        acc[item._id] = item;
        return acc;
    }, {});
    const cartValidation = items.every((item) => {
        const menuItem = menuItemsMap[item.menuItemId];
        return menuItem.stock >= item.quantity;
    });
    return cartValidation;
}
module.exports = validateCart;


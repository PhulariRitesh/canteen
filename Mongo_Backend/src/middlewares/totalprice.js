const totalPrice = (order) => {
    const price = order.items.reduce((acc, item) => {
        return acc + item.price;
    }, 0);
    return price;
    }
module.exports = totalPrice;

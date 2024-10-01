const expectedPreparation = (order) => {
    const preparationTime = order.items.reduce((acc, item) => {
        return acc + item.preparation_time;
    }, 0);
    return preparationTime;
    }
module.exports = expectedPreparation;

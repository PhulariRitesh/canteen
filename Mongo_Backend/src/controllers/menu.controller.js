const menu = require('../models/food.model');

const getmenu = async (req, res) => {
    try {
        const menuitems = await menu.find();
        res.status(200).send(menuitems); // Send only menu items
        console.log("Menu items fetched");
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addmenuData = async (req, res) => {
    try {
        const menuData = req.body; 

        for (const category in menuData) {
            const items = menuData[category];
            for (const item of items) {
                await menu.create({ ...item, category });
            }
        }

        res.status(201).json({ message: 'Menu data added successfully' });
    } catch (error) {
        console.error('Error adding menu data:', error);
        res.status(500).json({ error: 'Failed to add menu data' });
    }
};

const addmenu = async (req, res) => {
    try {
        const newmenu = new menu(req.body);
        await newmenu.save();
        res.status(200).send(newmenu);
    } catch (error) {
        res.status(400).send(error.message); // Fixed
    }
}

const updatemenu = async (req, res) => {
    try {
        const updatedMenu = await menu.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Updated
        res.status(200).send(updatedMenu); // Send the updated menu
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deletemenu = async (req, res) => {
    try {
        await menu.findByIdAndDelete(req.params.id);
        res.status(200).send('Menu item deleted');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = { getmenu, addmenu, addmenuData, updatemenu, deletemenu };

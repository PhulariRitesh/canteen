const menu = require('../models/menu.model');

//Function to fetch all menu items
const getmenu = async (req, res) => {
    try {
        const menuitems = await menu.find();
        res.status(200).send(menuitems);
    } catch (error) {
        res.status(400, error.message);
    }
}

//Function to add new menu item
const addmenu = async (req, res) => {
    try {
        const newmenu = new menu(req.body);
        await newmenu.save();
        res.status(200).send(newmenu);
    } catch (error) {
        res.status(400, error.message);
    }
}

//Function to update menu item
const updatemenu = async (req, res) => {
    try {
        await menu.findByIdAndUpdate(req.params.id, req.body);
        await menu.save();
        res.status(200).send(menu);
    }
    catch (error) {
        res.status(400, error.message);
    }
}

//Function to delete menu item
const deletemenu = async (req, res) => {
    try {
        await menu.findByIdAndDelete(req.params.id);
        res.status(200).send('Menu item deleted');
    }
    catch (error) {
        res.status(400, error.message);
    }
}

module.exports = { getmenu, addmenu, updatemenu, deletemenu };

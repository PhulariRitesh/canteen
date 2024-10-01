const menu = require('../models/food.model');


const getmenu = async (req, res) => {
    try {
        const menuitems = await menu.find();
        res.status(200).send(menuitems);
    } catch (error) {
        res.status(400, error.message);
    }
}

const addmenu = async (req, res) => {
    try {
        const newmenu = new menu(req.body);
        await newmenu.save();
        res.status(200).send(newmenu);
    } catch (error) {
        res.status(400, error.message);
    }
}


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

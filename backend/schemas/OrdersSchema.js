const {Schema} = require("mongoose");

const OrdersSchema = new Schema({
    name : String,
    qty: Number,
    price: Number,
    mode: String,
});

const {Schema} = require("mongoose");

const OrdersSchema = new Schema({
    
});

module.exports = {OrdersSchema};
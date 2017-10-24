const mongoose = require("mongoose")

const BidderSchema = mongoose.Schema({
    name: String,
    amount: Number
}, {timestamps: true})

const ProductSchema = mongoose.Schema({
    prod_name: String,
    img: String,
    desc: String,
    bids: [BidderSchema]
}, {timestamps: true})

mongoose.model("Product", ProductSchema)
const mongoose = require("mongoose")
const Product = mongoose.model("Product")

module.exports = {
    login: (req, res) => {
        req.session.name=req.body.name
        res.json(true)
    },
    login_stat: (req, res) => {
		if(req.session.name){
            console.log(req.session.name, 'is logged in');
            res.json(req.session.name)
		} else {
			res.status(401).json(false)
		}
    },
    get_all: (req, res) => {
		Product.find()
			.then(products => {
				res.json(products)
			})
			.catch(err => {
				console.log("Product.find error", err)
				res.status(500).json(err)
			})
    },
    make_bid: (req, res) => {
        console.log('Data in ctrl', req.body);
        let pdid = req.body.id
        let amt = req.body.amount
        let bidder = req.session.name
        console.log('bid got to ctrl', bidder, pdid, amt);
        let myProd;

        Product.findById({_id: pdid})
            .then((result, err) => {
            myProd = result;

            console.log('in the promise', myProd.prod_name, myProd.bids);
            
            myProd.bids.push({name: bidder, amount: amt})
            // Product.update({ prod_name: pdname}, {$set: { 'bids.name': bidder, 'bids.amount': amt}}, function(err, req){
            myProd.save( function(err, req){
                if(err){
                    console.log('Update product err in ctrl', err);
                } else {
                    console.log('Bid entered at ctrl');
                    res.json(true)
                }
            })
            .catch(err => {
                console.log('Bid save error', err)
                res.status(500).json(err)
            })
            console.log('outside of the .then', myProd.bids);
        })
    }
}
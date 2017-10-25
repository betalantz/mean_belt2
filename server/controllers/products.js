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
    logout: (req, res) => {
		req.session.destroy()
        console.log('user logged out');
        res.redirect("/")
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
            myProd.save( function(err, req){
                if(err){
                    console.log('Update product err in ctrl', err);
                    res.status(400).json(err)
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
    },
    reset: (req, res) => {
        Product.find()
        .then(products => {resetHelper(products, res)
        })
        .catch(err => {
            console.log("Reset error in ctrl", err)
            res.status(500).json(err)
        })
    },
}
function resetHelper (products, res) {
    let count = 0
    for(let product of products){
        let curr_id = product._id
        Product.update({_id: curr_id}, {bids: []}, (err)=>{
            console.log('Reset a product bids', err);
            if (++count == 3){
                res.status(200).json("all ok")
            }
        })
    }
}
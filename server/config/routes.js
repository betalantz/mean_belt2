const path = require("path")

const products = require("./../controllers/products.js")

module.exports = app => {
    app.post("/login", products.login)
    app.get('/login_stat', products.login_stat)
    app.get('/getProducts', products.get_all)
    app.post('/makeBid', products.make_bid)
    
    app.get("*", (req, res) => res.sendFile(path.resolve("./client/dist/index.html")))
}
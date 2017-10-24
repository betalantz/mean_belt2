const path = require("path")

const users = require("./../controllers/products.js")

module.exports = app => {
    
    app.get("*", (req, res) => res.sendFile(path.resolve("./client/dist/index.html")))
}
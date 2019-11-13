const express = require('express');
const app = express();
const products = require("./products");

app.listen(3000);
app.get("/" , (req , res) => {
    res.sendFile(__dirname +"/views/home.html");
});

app.get("/products" , (req , res) => {
    res.json(products);
});

app.get("/product/:productId" , (req, res) =>{
    const id = req.params.productId;
    let productFound = null;

    for (let p of products) {
        if (p._id == id)
            productFound = p;
    };

    if (productFound == null) {
        res.json({
            message: "Product no Found"
        });
    } else {
        res.json(productFound);
    }
});

app.get("/product-v2/:productId" , (req , res) => {
    const id = req.params.productId;
    const productFound = products.find(p => p._id == id);
    if (productFound == null) {
        res.json({
            message: "Product no Found"
        });
    } else {
        res.json(productFound);
    }
});




// app.get("/about" , (req , res) => {
//     res.send("<h1>About</h1>");
// });
//
// app.get("/contact" , (req , res) => {
//     res.send("<h1>contact</h1>");
//     res.send("h1.{color:red; }")
//
// });
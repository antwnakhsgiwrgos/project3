const express = require('express');
const app = express();

app.listen(3000);
app.get("/" , (req , res) => {
    res.sendFile(__dirname +"/views/home.html");
});

app.get("/about" , (req , res) => {
    res.send("<h1>About</h1>");
});

app.get("/contact" , (req , res) => {
    res.send("<h1>contact</h1>");
    res.send("h1.{color:red; }")

});
const express = require("express");

const books = require("./books");

const app = express();

app.set("json spaces", 4);

app.get("/", (req, res) => {
    res.send("<h2>Main page</h2>")
});

app.get("/books", (req, res) => {
    // res.send(books)
    res.json(books)
})

app.listen(3000, console.log("server run!!"));
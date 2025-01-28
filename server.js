//Dependencies
// Load Express 
require('dotenv').config();
const express = require('express'); // Require Express Package
const mongoose = require('mongoose'); // Require mongoose package
const app = express();
// Importing the Book Module
const Book = require("./models/book");




// MIDDLEWARE

    // Connect MongoDB using connection string in the .env file.
    mongoose.connect(process.env.MONGODB_URI) ; 

    // Console.log connection status at start
    mongoose.connection.once("open", () => {
        console.log(`Connected to MongoDB ${mongoose.connection.name}!`) ;
    })



//ROUTES


// New Book Route
app.get("/books/new", (req, res) => {
    res.render("books/new.ejs");
    // res.send("URL Working")
})

let PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
    console.log (`Server Start Listening to the Port No. : ${PORT}`);
})

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

    // This middleware to make sure the form send is in JSON.
    app.use(express.urlencoded({ extended: false }));

//ROUTES


// New Book Route
app.get("/books/new", (req, res) => {
    res.render("books/new.ejs");
    // res.send("URL Working")
});


//Create Route
// app.post ('/books', async (req, res) => {
//     console.log (req.body); // the information.
//     res.redirect("/books/new"); // Redirect the route back to the main page.
// })

app.post("/books", async (req, res) => {
    await Book.create(req.body);
    res.redirect("/books/new"); // Redirect the route back to the main page.
})


let PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
    console.log (`Server Start Listening to the Port No. : ${PORT}`);
})

//DEPENDENCIES
const mongoose = require('mongoose') ;

//SCHEMA STRUCTURE 
const bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    year: Number,
});

// Create our Module
const Book = mongoose.model("Book", bookSchema) ;


// Exporting the Module
module.exports = Book;
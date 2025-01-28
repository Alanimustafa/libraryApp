//Dependencies
// Load Express 
const express = require('express');
const app = express();
require('dotenv').config();

let PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
    console.log (`Server Start Listening to the Port No. : ${PORT}`);
})

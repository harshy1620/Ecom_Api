// requiring dependencies 
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');

// initializing express
const app = express();

// defining the port number
const port=4000;

app.use(bodyParser.urlencoded({extended: true}));

// using routes
app.use('/products', require('./routes/products'));

// starting the server
app.listen(port, function(err){
    if(err){
        console.log('Error in running express server on port',port);
    }
    console.log('Express server is running on port',port);
});
const express = require('express'); // create instanc of express
const app = express(); // call express 
const port = 8000; // specify port

// create a database
const db = require('./configs/mongoose');

//used for url encoding and json data loading
app.use(express.urlencoded());
app.use(express.json());

// router to router-index modules
app.use('/', require('./router'));

// listen to port
app.listen(port, function(err) {
    if(err) {
        console.log(`error at loading page on port: ${port} `, err);
    }
    
    console.log(`App loaded at on port: ${port}`);
})
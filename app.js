const express = require('express');
const app = express();
const port = 8000;

const db = require('./configs/mongoose');

app.use('/', require('./router'));

app.listen(port, function(err) {
    if(err) {
        console.log(`error at loading page on port: ${port} `, err);
    }
    
    console.log(`App loaded at on port: ${port}`);
})
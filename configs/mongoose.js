const mongoose = require('mongoose'); // create instance for mongoose
const env = require('./environment'); // get instance of environment

// connect to specific collection in mongodb
mongoose.connect(`mongodb://localhost/${env.db}`);

// create a connection
const db = mongoose.connection;

// in case of connection is not established
db.on('error', console.error.bind(console, 'Error connecting to mongo db'));

// once connection established -> inform
db.once('open', function() {
    console.log(`Connected to MongoDB: ${env.db}`);
})


module.exports = db;
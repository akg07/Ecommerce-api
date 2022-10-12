const express = require('express');
const router = express.Router();

// route to  api module
router.use('/api', require('./api')); 

module.exports = router;

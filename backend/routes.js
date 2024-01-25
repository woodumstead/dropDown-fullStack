// imports 
const express = require("express");
const router = express.Router();
const controller = require('./controller');

// ---  ROUTES 

// get 
router.get('/',controller.getById);


// ---  EXPORTS 
module.exports = router;
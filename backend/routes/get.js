// Import the express module
const express = require('express');

// Import the controller
const exampleController = require('../controllers/get.js');

// Create a router
const router = express.Router();

// Define the GET route and bind it to the controller function
router.get('/', exampleController.getHomeMessage);

// Export the router to be used in the main file
module.exports = router;

const express = require('express');
const router = express.Router();

// Define routes for different pages

// Handle GET request for the home page
router.get('/', (req, res) => {
  res.render('home'); // Render the 'home' template
});

// Handle GET request for the about page
router.get('/about', (req, res) => {
  res.render('about'); // Render the 'about' template
});

// Handle GET request for the projects page
router.get('/projects', (req, res) => {
  res.render('projects'); // Render the 'projects' template
});

// Handle GET request for the services page
router.get('/services', (req, res) => {
  res.render('services'); // Render the 'services' template
});

// Handle GET request for the contact page
router.get('/contact', (req, res) => {
  res.render('contact'); // Render the 'contact' template
});

// Export the router for use in other parts of the application
module.exports = router;

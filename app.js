// File: app.js
// Student: Chun Kin CHAN, Dixon
// Student ID: 301291863
// Date: 30 Sept, 2023

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Define Express routes for different pages

// Home page route
app.get('/', (req, res) => {
  const pageTitle = 'Home Page';
  const currentYear = new Date().getFullYear();
  res.render('home', { pageTitle, currentYear });
});

// About page route
app.get('/about', (req, res) => {
  const pageTitle = 'About Page';
  const currentYear = new Date().getFullYear();
  res.render('about', { pageTitle, currentYear });
});

// Projects page route
app.get('/projects', (req, res) => {
  const pageTitle = 'Projects Page';
  const currentYear = new Date().getFullYear();
  res.render('projects', { pageTitle, currentYear });
});

// Services page route
app.get('/services', (req, res) => {
  const pageTitle = 'Services Page';
  const currentYear = new Date().getFullYear();
  res.render('services', { pageTitle, currentYear });
});

// Contact page route
app.get('/contact', (req, res) => {
  const pageTitle = 'Contact Page';
  const currentYear = new Date().getFullYear();
  res.render('contact', { pageTitle, currentYear });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

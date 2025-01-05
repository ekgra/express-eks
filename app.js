const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Root endpoint
app.get('/', (req, res) => {
  res.send('API is running');
});

// Dummy endpoint
app.get('/dummy', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}, The dummy page`);
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`API is running on http://localhost:${port}`);
});


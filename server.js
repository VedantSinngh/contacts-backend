const express = require('express');
const dotenv = require('dotenv').config(); // To load .env file
const app = express();

// Define port from .env or fallback to 5000
const port = process.env.PORT || 5000;

// Middleware (Optional)
app.use(express.json()); // For parsing JSON request bodies

// Basic Route
app.get('/', (req, res) => {
    res.send('Welcome to the Express server!');
});

// Start the server
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});

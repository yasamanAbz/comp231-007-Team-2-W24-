// Import required modules
const express = require('express');
const mysql = require('mysql');
const appointmentsRoutes = require('./routes/appointmentsRoutes'); // Import your routes file

// Create Express app
const app = express();

// Connect to MySQL
const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  password: '8911', 
  database: 'appointments', 
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Middleware
app.use(express.json());

// Mount routes
app.use('/api', appointmentsRoutes); // Mount your appointments routes

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

const express = require('express');
const mysql = require('mysql');
const appointmentsRoutes = require('./routes/appointmentsRoutes');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '8911',
  database: 'appointment'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.use(express.json());
app.use('/api', appointmentsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

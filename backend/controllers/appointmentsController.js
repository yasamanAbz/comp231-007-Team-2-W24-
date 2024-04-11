const connection = require('../config/database');

// Controller method to handle scheduling a new appointment
exports.createAppointment = (req, res) => {
  const { date, time, reason } = req.body;

  const query = 'INSERT INTO appointments (date, time, reason) VALUES (?, ?, ?)';
  connection.query(query, [date, time, reason], (err, result) => {
    if (err) {
      console.error('Failed to schedule appointment:', err);
      res.status(500).json({ error: 'Failed to schedule appointment' });
      return;
    }
    res.status(201).json({ id: result.insertId });
  });
};

// Controller method to handle fetching upcoming appointments
exports.getUpcomingAppointments = (req, res) => {
  const query = 'SELECT * FROM appointments WHERE date >= CURDATE()';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Failed to retrieve upcoming appointments:', err);
      res.status(500).json({ error: 'Failed to retrieve upcoming appointments' });
      return;
    }
    res.status(200).json(results);
  });
};

// Controller method to handle cancelling an appointment
exports.cancelAppointment = (req, res) => {
  const appointmentId = req.params.id;

  const query = 'UPDATE appointments SET status = "cancelled" WHERE id = ?';
  connection.query(query, [appointmentId], (err, result) => {
    if (err) {
      console.error('Failed to cancel appointment:', err);
      res.status(500).json({ error: 'Failed to cancel appointment' });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Appointment not found' });
      return;
    }
    res.status(204).end();
  });
};

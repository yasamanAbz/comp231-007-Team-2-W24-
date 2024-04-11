// routes/appointmentsRoutes.js

const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// Create a new appointment
router.post('/appointments', (req, res) => {
    Appointment.create(req.body, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.status(201).json({ message: 'Appointment created successfully', appointment: result });
    });
});

// Get all appointments
router.get('/appointments', (req, res) => {
    Appointment.getAll((err, results) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.status(200).json({ appointments: results });
    });
});

// Get appointment by ID
router.get('/appointments/:id', (req, res) => {
    const id = req.params.id;
    Appointment.getById(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        if (!result) {
            res.status(404).json({ error: 'Appointment not found' });
            return;
        }
        res.status(200).json({ appointment: result });
    });
});

// Update appointment by ID
router.put('/appointments/:id', (req, res) => {
    const id = req.params.id;
    Appointment.update(id, req.body, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Appointment not found' });
            return;
        }
        res.status(200).json({ message: 'Appointment updated successfully' });
    });
});

// Delete appointment by ID
router.delete('/appointments/:id', (req, res) => {
    const id = req.params.id;
    Appointment.delete(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Appointment not found' });
            return;
        }
        res.status(200).json({ message: 'Appointment deleted successfully' });
    });
});

module.exports = router;

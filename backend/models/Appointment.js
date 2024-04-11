// models/Appointment.js

const mysql = require('mysql');
const dbConfig = require('../config/db');

const connection = mysql.createConnection(dbConfig);

class Appointment {
    static create(appointment, callback) {
        const { date, time, reason, status } = appointment;
        const query = 'INSERT INTO appointments (date, time, reason, status) VALUES (?, ?, ?, ?)';
        connection.query(query, [date, time, reason, status], (err, result) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, result);
        });
    }

    static getAll(callback) {
        const query = 'SELECT * FROM appointments';
        connection.query(query, (err, results) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    }

    static getById(id, callback) {
        const query = 'SELECT * FROM appointments WHERE id = ?';
        connection.query(query, [id], (err, results) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results[0]);
        });
    }

    static update(id, appointment, callback) {
        const { date, time, reason, status } = appointment;
        const query = 'UPDATE appointments SET date = ?, time = ?, reason = ?, status = ? WHERE id = ?';
        connection.query(query, [date, time, reason, status, id], (err, result) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, result);
        });
    }

    static delete(id, callback) {
        const query = 'DELETE FROM appointments WHERE id = ?';
        connection.query(query, [id], (err, result) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, result);
        });
    }
}

module.exports = Appointment;

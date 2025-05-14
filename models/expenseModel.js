const db = require('../config/db');

exports.getAll = (callback) => {
    db.query('SELECT * FROM expenses', callback);
};

exports.create = (data, callback) => {
    db.query('INSERT INTO expenses SET ?', data, callback);
};

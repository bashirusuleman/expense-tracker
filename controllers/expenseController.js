const Expense = require('../models/expenseModel');

exports.index = (req, res) => {
    Expense.getAll((err, results) => {
        if (err) throw err;
        res.render('index', { expenses: results });
    });
};

exports.create = (req, res) => {
    const { title, amount, category, date } = req.body;
    Expense.create({ title, amount, category, date }, (err) => {
        if (err) throw err;
        res.redirect('/');
    });
};

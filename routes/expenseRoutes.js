const express = require('express');
const router = express.Router();
const controller = require('../controllers/expenseController');

router.get('/', controller.index);
router.post('/add', controller.create);

module.exports = router;

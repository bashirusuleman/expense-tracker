const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const expenseRoutes = require('./routes/expenseRoutes');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', expenseRoutes);

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

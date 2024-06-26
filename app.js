const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

const pool = require('./db');

const homeRoutes = require('./routes/home');
const moviesRoutes = require('./routes/movies');

app.use(homeRoutes);
app.use(moviesRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

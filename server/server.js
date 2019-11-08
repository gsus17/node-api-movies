const express = require('express');
const app = express();

const moviesApiRoutes = require('./routes/movies.js');

moviesApiRoutes(app);

app.listen('3000', () => {
    console.log('Listening on port 3000')
});
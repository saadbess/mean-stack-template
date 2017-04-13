const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

// Initialising app variable with express
const app = express();

// User routes in a seperate file
const users = require('./routes/users');

// Port variable
const port = 3000;

// Cors middleware allows to make requests to api from a different domain name
app.use(cors());

// Body parser middleware
app.use(bodyParser.json());

// Using the users route
app.use('/users', users);

// Route to the index homepage sending out some text
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

// Calling listen function, takes a port and starts the server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connecting to the Mongo database that is stored in a config file
mongoose.connect(config.database);

// Checking when connected to the database
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database);
});

// Checking if any errors in the database
mongoose.connection.on('error', (err) => {
    console.log('Database error: ', + err );
});

// Initialising app variable with express
const app = express();

// Bringing in users folder from the routes folder
const users = require('./routes/users');

// Port variable
const port = 3000;

// Cors middleware allows to make requests to api from a different domain name
app.use(cors());

// Static folder
app.use(express.static(path.join(__dirname, 'client')));

// Body parser middleware
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

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
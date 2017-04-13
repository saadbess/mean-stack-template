const express = require('express');
const router = express.Router();

// Register route
router.get('/register', (req, res, next) => {
    res.send('REGISTER');
});

// Authenticate route
router.post('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE');
});

// Profile route
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});

// Validate route
router.get('/validate', (req, res, next) => {
    res.send('VALIDATE');
});

module.exports = router;
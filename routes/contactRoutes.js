const express = require('express');
const router = express.Router();

router.route('/api/contacts', (req,res) => {
    res.send('Get all contacts');
});
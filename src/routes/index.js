const express = require('express');
const { modelName } = require('../models/checklist');
const { route } = require('./checklist');

const router = express.Router()

router.get('/', async(req, res) => {
    res.render('pages/index')
})

module.exports = router;
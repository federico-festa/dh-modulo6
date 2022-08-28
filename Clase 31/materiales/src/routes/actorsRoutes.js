const express = require('express');
const router = express.Router();
const actorsController = require('../controllers/actorsController');

router.get('/actors', actorsController.index);
router.get('/actors/detail/:id', actorsController.detail);


module.exports = router;
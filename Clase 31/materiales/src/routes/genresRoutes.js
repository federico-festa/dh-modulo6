const express = require('express');
const router = express.Router();
const genresController = require('../controllers/genresController');

router.get('/genres', genresController.index);
router.get('/genres/detail/:id', genresController.detail);


module.exports = router;
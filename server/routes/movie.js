const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/', movieController.getAllMovies)
router.post('/', movieController.createMovie);
router.put('/:id', movieController.updateMovieById);
router.get('/category/:categoryTitle', movieController.getMoviesByCategory);
router.get('/title/:title', movieController.findMovieByTitle);

module.exports = router;

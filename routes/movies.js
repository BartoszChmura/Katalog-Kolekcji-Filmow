const express = require('express');
const moviesController = require('../controllers/moviesController');
const reviewsController = require('../controllers/reviewsController');


const router = express.Router();

router.get('/movies', moviesController.showMovies);

router.get('/movies/add', moviesController.getAddMovie);

router.post('/movies/add', moviesController.postAddMovie);

router.get('/movies/:id/reviews', reviewsController.showReviews);

router.post('/movies/:id/add-review', reviewsController.addReview);

router.post('/movies/:id/delete', moviesController.deleteMovie);

router.post('/movies/delete-all', moviesController.deleteAllMovies);

router.post('/movies/:id/watched', moviesController.markAsWatched);

router.get('/movies/:id/edit', moviesController.getEditForm);

router.post('/movies/:id/edit', moviesController.postEditMovie);


module.exports = router;

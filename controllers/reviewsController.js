const Movie = require('../models/movie');
const Review = require('../models/review');

exports.showReviews = async (req, res) => {
    try {
        const movieId = req.params.id;
        const movie = await Movie.findById(movieId);
        const reviews = await Review.findByMovieId(movieId);
        if (!movie) {
            return res.status(404).send('Film nie został znaleziony.');
        }
        res.render('movie-reviews', { movie, reviews });
    } catch (error) {
        res.status(500).send('Błąd serwera');
    }
};

exports.addReview = async (req, res) => {
    try {
        const movieId = req.params.id;
        const { username, content } = req.body;
        await Review.add(movieId, username, content);
        res.redirect(`/movies/${movieId}/reviews`);
    } catch (error) {
        res.status(500).send('Błąd serwera podczas dodawania recenzji');
    }
};

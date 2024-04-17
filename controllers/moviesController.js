const Movie = require('../models/movie');
const Review = require('../models/review');

exports.showMovies = async (req, res) => {
    try {
        const movies = await Movie.findAll();
        res.render('movies-list', { movies });
    } catch (error) {
        res.status(500).send('Błąd serwera');
    }
};

exports.getAddMovie = (req, res) => {
    res.render('add-movie');
};

exports.postAddMovie = async (req, res) => {
    const { title, director, rating } = req.body;
    try {
        await Movie.create(title, director, rating);
        res.redirect('/movies');
    } catch (error) {
        res.status(500).send('Błąd podczas dodawania filmu');
    }
};

exports.deleteMovie = async (req, res) => {
    try {
        const movieId = req.params.id;
        await Movie.delete(movieId);
        res.redirect('/movies');
    } catch (error) {
        res.status(500).send('Błąd serwera podczas usuwania filmu');
    }
};

exports.deleteAllMovies = async (req, res) => {
    try {
        await Movie.deleteAll();
        res.redirect('/movies');
    } catch (error) {
        res.status(500).send('Błąd serwera podczas usuwania wszystkich filmów');
    }
};

exports.markAsWatched = async (req, res) => {
    try {
        const movieId = req.params.id;
        await Movie.toggleWatched(movieId);
        res.redirect('/movies');
    } catch (error) {
        console.error('Błąd podczas przełączania statusu oglądania filmu:', error);
        res.status(500).send('Błąd serwera podczas aktualizacji statusu filmu');
    }
};

exports.getEditForm = async (req, res) => {
    try {
        const movieId = req.params.id;
        const movie = await Movie.findById(movieId);
        if (!movie) {
            return res.status(404).send('Film nie został znaleziony.');
        }
        res.render('edit-movie', { movie });
    } catch (error) {
        res.status(500).send('Błąd serwera');
    }
};

exports.postEditMovie = async (req, res) => {
    const { title, director, rating } = req.body;
    const movieId = req.params.id;
    try {
        await Movie.updateInfo(movieId, title, director, rating);
        res.redirect('/movies');
    } catch (error) {
        res.status(500).send('Błąd serwera podczas aktualizacji filmu');
    }
};


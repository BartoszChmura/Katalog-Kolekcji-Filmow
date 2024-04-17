const pool = require('../db');

class Review {
    static async findByMovieId(movieId) {
        const result = await pool.query('SELECT * FROM reviews WHERE movie_id = $1', [movieId]);
        return result.rows;
    }

    static async add(movieId, username, content) {
        const result = await pool.query(
            'INSERT INTO reviews (content, username, movie_id) VALUES ($1, $2, $3) RETURNING *',
            [content, username, movieId]
        );
        return result.rows[0];
    }
}

module.exports = Review;

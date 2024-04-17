const pool = require('../db');

class Movie {

    static async findAll() {
        const result = await pool.query('SELECT * FROM movies ORDER BY id ASC'); // Stabilne sortowanie po ID
        return result.rows;
    }


    static async findById(id) {
        const result = await pool.query('SELECT * FROM movies WHERE id = $1', [id]);
        return result.rows[0];
    }

    static async create(title, director, rating) {
        const result = await pool.query('INSERT INTO movies (title, director, rating) VALUES ($1, $2, $3) RETURNING *', [title, director, rating]);
        return result.rows[0];
    }

    static async updateWatched(id, watched) {
        const result = await pool.query('UPDATE movies SET watched = $1 WHERE id = $2 RETURNING *', [watched, id]);
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query('DELETE FROM movies WHERE id = $1', [id]);
        return result.rowCount;
    }

    static async deleteAll() {
        const result = await pool.query('DELETE FROM movies');
        return result.rowCount;
    }

    static async toggleWatched(id) {
        try {
            const result = await pool.query(
                'UPDATE movies SET watched = NOT watched WHERE id = $1 RETURNING *',
                [id]
            );
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    static async updateInfo(id, title, director, rating) {
        try {
            const result = await pool.query(
                'UPDATE movies SET title = $1, director = $2, rating = $3 WHERE id = $4 RETURNING *',
                [title, director, rating, id]
            );
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

}

module.exports = Movie;

const db = require('../database/models');


const moviesController = {
    index: (req, res) => {
        db.Movie.findAll()
            .then((movies) => {
                res.render('moviesList', {movies: movies});
            });
    },
    detail: (req,res) => {
        db.Movie.findByPk(req.params.id)
            .then((movie) => {
                res.render('moviesDetail', {movie: movie});
            });
    },
    new: (req,res) => {
        db.Movie.findAll({
            order: [['release_date', 'DESC']]
        })
            .then((movies) => {
                res.render('newestMovies', {movies: movies});
            });
    },
    recomended: (req,res) => {
        db.Movie.findAll({})
    }
};

module.exports = moviesController;
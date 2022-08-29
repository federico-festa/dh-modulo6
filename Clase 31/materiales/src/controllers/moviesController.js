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
        db.Movie.findAll({
            where: { 
                rating: {[db.Sequelize.Op.gt]: 7.1}
            },
            order: [['release_date', 'DESC']],
            limit: 5
        })
            .then((movies) => {
                res.render('recommendedMovies', {movies: movies});
            })
    },
    add: (req,res) => {
        res.render('moviesAdd');
    },
    create: (req,res) => {
        db.Movie.create({
            title : req.body.title,
            rating : req.body.rating,
            awards : req.body.awards,
            release_date : req.body.release_date,
            length : req.body.length
        })
        .then((movies)=>{
            res.redirect('/movies');
        });
    },
    edit: (req,res) => {
        db.Movie.findByPk(req.params.id)
            .then((movie) => {
                res.render('moviesEdit', {movie: movie});
            });
    },
    update: (req,res) => {
        db.Movie.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
        },
        {
            where: {id: req.params.id}
        })
        .then((movie) => {
            res.redirect('/movies');
        });
    }
};

module.exports = moviesController;
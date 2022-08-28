const db = require('../database/models');


const genresController = {
    index: (req, res) => {
        db.Genre.findAll()
            .then((genres) => {
                res.render('genresList', {genres: genres});
            });
    },
    detail: (req,res) => {
        db.Genre.findByPk(req.params.id)
            .then((genre) => {
                res.render('genresDetail', {genre: genre});
            });
    }
};

module.exports = genresController;
const db = require('../database/models');


const actorsController = {
    index: (req, res) => {
        db.Actor.findAll()
            .then((actors) => {
                res.render('actorsList', {actors: actors});
            });
    },
    detail: (req,res) => {
        db.Actor.findByPk(req.params.id)
            .then((actor) => {
                res.render('actorsDetail', {actor: actor});
            });
    }
};

module.exports = actorsController;
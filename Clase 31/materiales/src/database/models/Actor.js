module.exports = (sequelize, dataTypes) => {
    const alias = 'Actor';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.DECIMAL
        },
        favorite_movie_id: {
            type: dataTypes.INTEGER
        },
    };
    const config = {
        tableName: 'actors',
        timestamps: false
    };
    const Actor = sequelize.define(alias, cols, config);
    return Actor;
};
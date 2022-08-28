module.exports = (sequelize, dataTypes) => {
    const alias = 'Genre';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        name: {
            type: dataTypes.STRING
        },
        ranking: {
            type: dataTypes.INTEGER
        },
        active: {
            type: dataTypes.INTEGER
        },
    };
    const config = {
        tableName: 'genres'
    };
    const Genre = sequelize.define(alias, cols, config);
    return Genre;
};
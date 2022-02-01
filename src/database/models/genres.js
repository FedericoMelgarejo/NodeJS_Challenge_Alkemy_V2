module.exports = (sequelize, dataTypes) => {

    let alias = "Genres"

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        imageUrl: {
            type: dataTypes.STRING(100),
            allowNull: true,
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: true,
        },
    }

    let config = {
        tableName: "genres",
        timestamps: false
    }

    const Genres = sequelize.define(alias, cols, config)

    Genres.associate = (models) => {
        Genres.hasMany(models.Movie_or_serie, {
            as: 'movies',
            foreignKey: 'fk_genre_id',
        });
    }
    

    return Genres
}
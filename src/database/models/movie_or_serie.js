module.exports = (sequelize, dataTypes) => {
    const alias = 'Movie_or_serie';

    const cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        imageUrl: {
            type: dataTypes.STRING(100),
            allowNull: true,
        },
        title: {
            type: dataTypes.STRING(100),
            allowNull: true,
        },
        releaseDate: {
            type: dataTypes.INTEGER(11),
            allowNull: true,
        },
        rating: {
            type: dataTypes.INTEGER(11),
            allowNull: true,
        },
        fk_genre_id:{
            type: dataTypes.INTEGER(11),
            allowNull: true,
        }
    };

    const config = {
        tableName: "movie_or_serie",
        timestamps: false,
    };

    const Movie_or_serie = sequelize.define(alias, cols, config);

    Movie_or_serie.associate = (models) => {
        Movie_or_serie.belongsTo(models.Genres, {
            as: 'genre',
            foreignKey: 'fk_genre_id',
        });


        Movie_or_serie.hasMany(models.Character, {
            as: 'characters',
            foreignKey: 'fk_movie_id',
        });
    };

    return Movie_or_serie;
};
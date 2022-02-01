module.exports = (sequelize, dataTypes) => {
  let alias = "Character";

  let cols = {
    id: {
      type: dataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    imageUrl: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
    age: {
      type: dataTypes.INTEGER(11),
      allowNull: true,
    },
    weight: {
      type: dataTypes.INTEGER(11),
      allowNull: true,
    },
    history: {
      type: dataTypes.STRING(300),
      allowNull: true,
    },
    fk_movie_id: {
      type: dataTypes.INTEGER(11),
      allowNull: true,
    },
  };

  let config = {
    tableName: "characters",
    timestamps: false,
  };

  const Character = sequelize.define(alias, cols, config);

  Character.associate = (models) => {
    Character.belongsTo(models.Movie_or_serie, {
      as: "movie",
      foreignKey: "fk_movie_id",
    });
  };

  return Character;
};

module.exports = (sequelize, dataTypes) => {
  let alias = "Users";

  let cols = {
    id: {
      type: dataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: dataTypes.STRING(45),
      allowNull: true,
    },
    username: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
    password: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
  };

  let config = {
    tableName: "users",
    timestamps: false,
  };

  const Users = sequelize.define(alias, cols, config);

  return Users;
};

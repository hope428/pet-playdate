const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Playdate extends Model {}

Playdate.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    location: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [5],
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "playdate",
  }
);

module.exports = Playdate;

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class PetPlaydate extends Model {}

PetPlaydate.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "pet",
        key: "id",
        unique: false,
      },
    },
    playdate_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "playdate",
        key: "id",
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "pet_playdate",
  }
);

module.exports = PetPlaydate;

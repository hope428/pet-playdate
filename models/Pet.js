const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Pet extends Model {}

Pet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pet_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pet_age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // Drop-down menu? If so, how would we register it here?
    // Scale 1-5 (1 not at all active (no bones day) to 5 extremely active (bones day).
    activity_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      allowDecimals: true,
    },
    fixed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Pet",
  }
);

module.exports = Pet
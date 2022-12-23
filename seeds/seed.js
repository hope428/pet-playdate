const sequelize = require("../config/connection");
const { Pet, PetPlayDate, PlayDate, User } = require("../models");

const petSeedData = require("../data/petSeedData.json");
const playDateSeedData = require("../data/playDateSeedData.json");
const userSeedData = require("../data/userSeedData.json");

const seedDatabase = async () => {
await sequelize.sync({ force: true });
};
 

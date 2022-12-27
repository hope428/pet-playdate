const sequelize = require("../config/connection");
const { Pet, User, Playdate } = require("../models");

const petSeedData = require("./petSeedData.json");
const playDateSeedData = require("./playDateSeedData.json");
const userSeedData = require("./userSeedData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Pet.bulkCreate(petSeedData, {
    individualHooks: true,
    returning: true,
  });
  await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });

  await Playdate.bulkCreate(playDateSeedData, {
    individualHooks: true,
    returning: true,
  })

  process.exit(0);
};

seedDatabase()

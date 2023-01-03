const router = require("express").Router();
const { Playdate, PetPlaydate, Pet } = require("../models");

router.get("/home", (req, res) => {
  res.render("homepage");
});

router.get("/dashboard", async (req, res) => {
  // pk will be req.session.pet_id when session is all set up
  const petInfo = await Pet.findByPk(1, {
    include: {model: Playdate, through: PetPlaydate, as: 'pet_playdates'}
  })
  const pet = petInfo.get({plain: true})
  console.log(pet);
  res.render("dashboard", pet);
});

router.get("/playdateform", (req, res) => {
  res.render("playdateform");
});
module.exports = router;

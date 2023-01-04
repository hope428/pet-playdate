const router = require("express").Router();
const { Playdate, PetPlaydate, Pet } = require("../models");

router.get("/home", (req, res) => {
  res.render("homepage");
});

router.get("/dashboard", async (req, res) => {
  // pk will be req.session.pet_id when session is all set up
  const petInfo = await Pet.findByPk(3, {
    include: { model: Playdate, through: PetPlaydate, as: "pet_playdates" },
  });
  const pet = petInfo.get({ plain: true });
  res.render("dashboard", pet);
});

router.get("/events/:id", async (req, res) => {
  const event = await Playdate.findByPk(req.params.id, {
    include: {model: Pet, through: PetPlaydate, as: 'playdate_pets'}
  })
  const eventData = event.get({plain: true})
  console.log(eventData);
  res.render("event", eventData)
});

router.get("/playdateform", (req, res) => {
  res.render("playdateform");
});

router.get("/login", (req, res) => {
  res.render("login");
});
module.exports = router;

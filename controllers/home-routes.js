const router = require("express").Router();
const { Playdate, PetPlaydate, Pet } = require("../models");
const withAuth = require('../utils/auth');

router.get("/home", (req, res) => {
  res.render("homepage", { loggedIn: req.session.loggedIn });
});

router.get("/", (req, res) => {
  res.render("homepage", { loggedIn: req.session.loggedIn });
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    if (req.session.UserId) {
      const petId = await Pet.findOne({
        where: {
          user_id: req.session.UserId,
        },
      });

      const petInfo = await Pet.findByPk(petId.id, {
        include: { model: Playdate, through: PetPlaydate, as: "pet_playdates" },
      });
      const pet = petInfo.get({ plain: true });
      res.render("dashboard", {pet, loggedIn: req.session.loggedIn });
    } else {
      res.render("playdateform")
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/events/:id", withAuth, async (req, res) => {
  const event = await Playdate.findByPk(req.params.id, {
    include: { model: Pet, through: PetPlaydate, as: "playdate_pets" },
  });
  const eventData = event.get({ plain: true });
  console.log(eventData);
  res.render("event", {eventData, loggedIn: req.session.loggedIn});
});

router.get("/playdateform", (req, res) => {
  res.render("playdateform", {loggedIn: req.session.loggedIn});
});

router.get("/login", (req, res) => {
  res.render("login", {loggedIn: req.session.loggedIn});
});

router.get("/redirect", (req,res) => {
  res.render("redirect")
});

module.exports = router;

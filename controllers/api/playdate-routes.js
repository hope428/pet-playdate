const router = require("express").Router();
const { Playdate, PetPlaydate, Pet } = require("../../models");

// localhost:3001/api/playdates/new-playdate
router.post("/new-playdate", async (req, res) => {
  try {
    const playdate = await Playdate.findOne({
      where: {
        location: req.body.location,
        date: req.body.date,
      },
    });

    if (!playdate) {
      const newPlaydate = await Playdate.create({
        location: req.body.location,
        date: req.body.date,
      });

      const newPetPlaydate = await PetPlaydate.create({
        // pet id can be tied to current pet's button with data-value
        pet_id: req.body.pet_id,
        playdate_id: newPlaydate.id,
      });
      res.json("created new playdate");
      return;
    }
    // updates through table to reflect pets added to playdate
    const updatePetPlaydate = await PetPlaydate.create({
      playdate_id: playdate.id,
      pet_id: req.body.pet_id,
    });

    res.status(201).json(updatePetPlaydate);
  } catch (error) {
    res.status(500).json(error);
  }
});

//this route gets back all pets and playdates associated with that pet
router.get("/", async (req, res) => {
  try {
    const playdates = await Pet.findAll({
      include: { model: Playdate, through: PetPlaydate, as: "pet_playdates" },
    });
    res.json(playdates);
  } catch (error) {}
});

//route gets back all playdates and lists pets associated with that playdate
router.get('/all', async(req, res) => {
  try {
    const playdates = await Playdate.findAll({
      include: { model: Pet, through: PetPlaydate, as: "playdate_pets" },
    });
    res.json(playdates);
  } catch (error) {}
})

module.exports = router;

const router = require('express').Router();
const {Playdate, PetPlaydate, Pet} = require('../../models')

// localhost:3001/api/playdates/new-playdate
router.post("/new-playdate", async (req, res) => {
    try {
      const newPlaydate = await Playdate.create({
        //this will be from the playdate form
        location: req.body.location,
        //from date picker
        date: req.body.date,
      });

      //creates new petplaydate object for through table
      const newPetPlaydate = await PetPlaydate.create({
        // pet id can be tied to current pet's button with data-value
        pet_id: req.body.pet_id,
        playdate_id: newPlaydate.id
      })
  
      res.status(201).json(newPlaydate);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  //this route gets back all playdates and pets associated with that playdate
  router.get("/", async(req, res) => {
    try {
      const playdates = await Pet.findAll({
        include: {model: Playdate, through: PetPlaydate, as: 'pet_playdates'}
      })
      res.json(playdates)
    } catch (error) {
      
    }
  })

  module.exports = router
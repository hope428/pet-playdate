const router = require('express').Router();
const {Playdate, PetPlaydate, Pet} = require('../../models')

// localhost:3001/api/playdates/new-playdate
router.post("/new-playdate", async (req, res) => {
    try {
      const playdate = await Playdate.findOne({
        where: {
          location: req.body.location,
          date: req.body.date
        }
      })

      if(!playdate){
        const newPlaydate = await Playdate.create({
          location: req.body.location,
          date: req.body.date,
          pet_id: req.body.pet_id
        });

        const newPetPlaydate = await PetPlaydate.create({
          // pet id can be tied to current pet's button with data-value
          pet_id: req.body.pet_id,
          playdate_id: newPlaydate.id
        })
        res.json("created new playdate")
        return;
      }
      // updates through table to reflect pets added to playdate
      const updatePetPlaydate = await PetPlaydate.findOne({
        where: {
          playdate_id: playdate.id,
        }
      })
      await newPetPlaydate.update({
        
      })
  
      res.status(201).json("updating playdate");
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
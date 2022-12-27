const router = require('express').Router();
const {Playdate} = require('../../models')

// localhost:3001/api/playdates/new-playdate
router.post("/new-playdate", async (req, res) => {
    try {
      const newPlaydate = Playdate.create({
        //this will be from the playdate form
        location: req.body.location,
        //from date picker
        date: req.body.date,
      });
  
      res.status(201).json(newPlaydate);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  module.exports = router
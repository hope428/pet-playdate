const router = require('express').Router();
const {User} = require('../../models')


//localhost:3001/api/users/login
router.get('/login', (req, res) => {
    res.send("you are at the login page")
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        })
        if(!user){
            res.status(404).json("Couldn't log you in")
            return;
        }
        const validPassword = await user.checkPassword(req.body.password)
        if(!validPassword){
            res.status(404).json("Couldn't log you in, please try again!")
            return;
        }
        
        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json("Success logging in")
        })
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

//localhost:3001/api/users/signup
router.get('/signup', async (req, res) => {
    //placeholder for /api/users/signup
    res.send("signup here!")
})

router.post('/signup', async (req, res) => {
    try {
        const newUser = await User.create({
            email: req.body.email,
            password: req.body.password,
            pet_name: req.body.pet_name,
            pet_age: req.body.pet_age,
            species: req.body.species,
            gender: req.body.gender,
            activity_level: req.body.activity_level,
            fixed: req.body.fixed,
        })
        console.log(req.body);
        res.status(200).json(newUser)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

module.exports = router;
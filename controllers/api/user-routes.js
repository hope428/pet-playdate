const router = require('express').Router();
const {User, Pet} = require('../../models')


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
            req.session.email = user.email;
            res.status(200).json("Success logging in")
        })
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

//localhost:3001/api/users/signup
router.post('/signup', async (req, res) => {
    try {
    //send info to create new user
        const newUser = await User.create({
            email: req.body.email,
            password: req.body.password,
        })
    //send information to create new pet
        const newPet = await Pet.create({
            pet_name: req.body.pet_name,
            pet_age: req.body.pet_age,
            species: req.body.species,
            gender: req.body.gender,
            activity_level: req.body.activity_level,
            fixed: req.body.fixed,
            user_id: newUser.id
        })
        
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.UserId = newUser.id;
            res.status(200).json('Signed up!')
        })
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end()
        })
    } else {
        res.status(404).end()
    }
})

module.exports = router;
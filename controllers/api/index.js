const router = require('express').Router();
const userRoutes = require('./user-routes');
const playdateRoutes = require('./playdate-routes')

router.use('/users', userRoutes)
router.use('/playdates', playdateRoutes)

module.exports = router;
const User = require('./User')
const Pet = require('./Pet')
const PetPlaydate = require('./PetPlaydate')
const Playdate = require('./Playdate')

User.hasMany(Pet, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Pet.belongsTo(User, {
    foreignKey: 'user_id',
})

Pet.belongsToMany(Playdate, {
    through: {
        model: PetPlaydate
    },

    as: 'pet_playdates'
})

Playdate.belongsToMany(Pet, {
    through: {
        model: PetPlaydate
    },
    as: 'playdate_pets'
})

module.exports = {User, Pet, PetPlaydate, Playdate}
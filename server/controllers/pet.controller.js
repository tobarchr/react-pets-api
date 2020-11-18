const Pet = require("../models/pet.model");

module.exports.findAllPets = (req,res) =>{
    Pet.find()
        .then(allPets => res.json({pets: allPets}))
        .catch(err => res.json({message: "Something went wrong!",error: err}))
}

module.exports.findOnePet = (req,res) =>{
    Pet.findOne({_id: req.params._id})
        .then(onePet => res.json({pet: onePet}))
        .catch(err => res.json({message: "Something went wrong!",error: err}))
}

module.exports.createPet = (req,res) =>{
    Pet.create(req.body)
        .then(newPet => res.json({pet: newPet}))
        .catch(err => res.json({message: "Something went wrong!",error: err}))
}

module.exports.deletePet = (req,res) =>{
    Pet.remove({_id: req.params._id})
        .then(res.json({message: "Pet has been removed"}))
        .catch(err => res.json({message: "Something went wrong!",error: err}))
}

module.exports.updatePet = (req,res) =>{
    Pet.findOneAndUpdate({_id: req.params._id},
        {$set: {
            name: req.body.name,
            type: req.body.type,
            description: req.body.description,
            skill_1: req.body.skill_1,
            skill_2: req.body.skill_2,
            skill_3: req.body.skill_3,
        }},{runValidators: true, context: 'query'})
        .then(allPets => res.json({pets: allPets}))
        .catch(err => res.json({message: "Something went wrong!",error: err}))
}
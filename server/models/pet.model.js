const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;


const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Gotta have a pet name"],
        minlength: [3, "Pet name must be at least 3 characters long"],
        index: true, 
        unique: true
    },
    type: {
        type: String,
        required: [true, "Gotta have a pet name"],
        minlength: [3, "Pet name must be at least 3 characters long"]
    },
    description: {
        type: String,
        required: [true, "Gotta have a pet name"],
        minlength: [3, "Pet name must be at least 3 characters long"]
    },
    skill_1: {
        type: String,
    },
    skill_2: {
        type: String,
    },
    skill_3: {
        type: String,
    },
},{timestamps:true})

const Pet = mongoose.model("Pet", PetSchema);

PetSchema.plugin(uniqueValidator, { message: 'Error, expected {VALUE} to be unique.' });

module.exports = Pet;
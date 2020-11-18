const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Gotta have a pet name"],
        minlength: [3, "Pet name must be at least 3 characters long"],
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

module.exports = Pet;
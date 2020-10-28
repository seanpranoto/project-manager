const mongoose = require("mongoose");
const uniquieValidator=require("mongoose-unique-validator");

const PirateSchema = new mongoose.Schema({
    project: { type: String, required: [true, "Project is required"], minlength:[3, "Project must be at least 3 cahracters long"], unique:[true, "Project must be unique"]},
    dueDate: { type: String, required: [true, "Due date is required"]},
    status: { type: String, required: [true, "status is required"]},
}, { timestamps: true });

PirateSchema.plugin(uniquieValidator);

module.exports = mongoose.model("Pirate", PirateSchema);
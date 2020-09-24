const mongoose = require("mongoose");

// Define schema
var Schema = mongoose.Schema;

var unitSchema = new Schema({
    unit: { type: String, required: true },
    week: [{
        number: String,
        count: Number,
        questions: {
            C1: String,
            B1: String,
            SR1: String,
            A1: String,
            A2: String,
            O1: String,
            improvements: [{ type: String }]
        }
    }],
})



module.exports = mongoose.model("Unit", unitSchema);;
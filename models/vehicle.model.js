/**
 * Vehicle Schema
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let vehicleSchema = new Schema({
    merk: String,
    tipe: String,
    price: {
        type: Number,
        default: 0
    },
    author: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

let Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;

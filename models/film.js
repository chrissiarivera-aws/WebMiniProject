var mongoose = require("mongoose");

var filmSchema = new mongoose.Schema({
    imdbID: String,
    title: String,
    description: String,
    rating: Number,
    length: String,
    genre: String,
    image: String
});

module.exports = mongoose.model("Film", filmSchema);
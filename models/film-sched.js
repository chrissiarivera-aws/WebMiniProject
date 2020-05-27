var mongoose = require("mongoose");

var filmScheduleSchema = new mongoose.Schema({
    movie_id: String,
    date: Date,
    time: String,
    cinema_no: Number,
    reserved: [
        {
           type: mongoose.Schema.Types.ObjectId,
           ref: "Reserved"
        }
    ]
});

module.exports = mongoose.model("FilmSchedule", filmScheduleSchema);
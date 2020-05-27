var mongoose = require("mongoose");

var reservedSchema = new mongoose.Schema({
    seat: String,
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    price: Number
});

module.exports = mongoose.model("Reserved", reservedSchema);
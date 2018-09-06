let mongoose = require('mongoose');

// schema setup
let campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

module.exports = mongoose.model("Campground", campgroundSchema);
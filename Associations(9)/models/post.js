let mongoose = require("mongoose");

// POST - title, content
let postSchema = new mongoose.Schema({
    title: String,
    content: String
});

// need this to be used in the require statement
module.exports = mongoose.model("Post", postSchema);
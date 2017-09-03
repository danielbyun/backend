let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app", {useMongoClient: true});

let catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

let Cat = mongoose.model("Cat", catSchema);

// adding a new cat to the database

// let george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "mean af"
// });
//
// george.save(function(err, cat){
//     if(err){
//         console.log("fuck");
//     } else {
//         console.log("good");
//         console.log(cat);
//     }
// });

// faster than the one above
Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "cute af"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});


// retrieve all cats from the database and console.log each one
Cat.find({}, function(err, cats){
    if(err){
        console.log("FUCK");
        console.log(err);
    } else {
        console.log(`yo ${cats}`);
    }
});
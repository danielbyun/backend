let express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp", {useMongoClient: true});
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// schema setup
let campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

let Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//     name: "Rainbow piss",
//     image: "https://source.unsplash.com/twukN12EN7c/",
//     description: "rainbow as hell!"
// }, function(err, campground){
//    if(err){
//        console.log(err);
//    } else {
//        console.log("newly created campground: ");
//        console.log(campground);
//    }
// });

// landing page
app.get("/", function(req, res){
   res.render("landing");
});

// INDEX - show all campgrounds
// campgrounds page that display all campgrounds
app.get("/campgrounds", function(req, res){
    // get all campgrounds from db
    Campground.find({}, function(err, allCampgrounds){
       if(err){
           console.log(err);
       } else {
           res.render("index", {campgrounds: allCampgrounds});
       }
    });
});

// CREATE - add new campground to database
// post route (form) for the user to submit a campground
app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    let name            = req.body.name,
        image           = req.body.image,
        description     = req.body.description,
        newCampground   = {name: name, image: image, description: description};

    // create a new campground and save to database
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            // redirect back to campgrounds page (get)
            res.redirect("/campgrounds");
        }
    });
});

// NEW - show form to create new campground
// show the form that will send the data to the Post Route above
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    // find the campground with provided id
    Campground.findById(req.params.id, function(err, foundCampground){
       if(err){
           console.log(err);
       } else {
           // render show template with that campground
           res.render("show", {campground: foundCampground});
       }
    });
});

// server listen
app.listen("3000", function(){
    console.log("The yelpcamp server has been connected");
});
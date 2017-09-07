let express = require("express");
let app = express();
let bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// campground array
let campgrounds = [
    {
        name: "Salmon Creek",
        image: "https://source.unsplash.com/uOi3lg8fGl4/"
    },
    {
        name: "Granite Hill",
        image: "https://source.unsplash.com/J8KMIolTmGA/"
    },
    {
        name: "Mountain Goat's Rest",
        image: "https://source.unsplash.com/90aVA1r9PEo/"
    },
    {
        name: "NightLights Bitch",
        image: "https://source.unsplash.com/MEBqI9fzqao"
    },
    {
        name: "Santa's Balls",
        image: "https://source.unsplash.com/QLi7bGPxwtM"
    }
];


// landing page
app.get("/", function(req, res){
   res.render("landing");
});


// campgrounds page that display all campgrounds
app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});


// post route (form) for the user to submit a campground
app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = {name: name, image: image};
    campgrounds.push(newCampground);

    // redirect back to campgrounds page (get)
    res.redirect("/campgrounds");
});


// show the form that will send the data to the Post Route above
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});


// server listen
app.listen("3000", function(){
    console.log("The yelpcamp server has been connected");
});
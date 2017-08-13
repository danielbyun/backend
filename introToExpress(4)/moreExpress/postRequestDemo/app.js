let express = require("express");
let app = express();
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

// set default javascript file extension to ejs
app.set("view engine", "ejs");

let friends = ["mark", "tony", "anthony", "dick", "richard", "matt"];

// root route
app.get("/", function(req, res){
   res.render("home");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});

// post route when adding data
app.post("/addfriend", function(req, res){
    // object that contains all the requests from the body
    // need body parser
    let newFriend = req.body.newfriend;
    friends.push(newFriend);

    // redirect the page to the identified page, after everything has gone through
    res.redirect("/friends");
});

// listen to server
app.listen(3000, function(){
    console.log("server connected");
});
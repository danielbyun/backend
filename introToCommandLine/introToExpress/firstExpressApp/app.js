let express = require("express");
let app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("hi there");
});

// "/bye" => "goodbye!"
app.get("/bye", function(req, res){
   res.send("goodbye");
});

// "/dog" => "woof"
app.get("/dog", function(req, res){
    console.log("someone made a request to a dog");
    res.send("woof");
});

// subreddit example
// we put colon in front of anything we want it to be a variable
app.get("/r/:subredditName", function(req, res){
    // to get the value the user input
    console.log(req.params);

    res.send(`welcome my child to the subreddit of ${req.params.subredditName}`);
});

// example 2
app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
    console.log(req.params);
   res.send(`welcome to the comment section of ${req.params.subredditName}, ${req.params.title}`);
});

// all errors
app.get("*", function(req, res){
    res.send("wtf brah");
});

// tell express to listen for requests (start server)
app.listen("3000", function(){
   console.log("connected");
});
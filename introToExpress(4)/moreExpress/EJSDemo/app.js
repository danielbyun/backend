let express = require('express');
let app = express();

// link to the assets
app.use(express.static("public"));

// file extension set to ejs automatically
app.set("view engine", "ejs");

// root route
app.get("/", function(req, res){
    res.render("home");
});

// fallinlovewith/thing
app.get("/fallinlovewith/:thing", function(req, res){
   let thing = req.params.thing;
   res.render("love", {
       thingVar: thing
   });
});

app.get("/posts", function(req, res){
    let posts = [
        {
            title: "Post 1",
            author: "Susie",
        },
        {
            title: "Post 2",
            author: "Maggie",
        },
        {
            title: "Post 3",
            author: "Mary",
        }
    ];
    res.render("posts", {
        posts: posts
    });
});

// listen to the local host server
app.listen(3000, function(){
    console.log('server connected');
});
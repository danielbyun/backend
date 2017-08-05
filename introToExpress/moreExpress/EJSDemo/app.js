let express = require('express');
let app = express();

// root route
app.get("/", function(req, res){
    res.render("home.ejs");
});

// fallinlovewith/thing
app.get("/fallinlovewith/:thing", function(req, res){
   let thing = req.params.thing;
   res.render("love.ejs", {
       thingVar: thing
   });
});

// listen to the local host server
app.listen(3000, function(){
    console.log('server connected');
});
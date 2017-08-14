let express = require("express");
let app = express();
let request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("search");
});

app.get("/results", function(req, res){
    let search = req.query.search;
    let url = `https://yts.ag/api/v2/list_movies.json?quality=1080p&limit=100&query_term=${search}`;

    request(url, function(error, response, body){
       if(!error && response.statusCode === 200){
           let movies = JSON.parse(body);
           res.render("results", {movieData: movies});
       }
    });
});

app.listen(3000, function(){
    console.log("server connected");
});
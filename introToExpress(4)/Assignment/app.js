let express = require("express");
let app = express();

// Visiting "/" should print "Hi there, welcome to my assignment"
app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment");
});

// Visiting "/speak/pig" should print "oink"
// Visiting "/speak/cow" should print "moo"
// Visiting "/speak/dog" should print "woof"
app.get("/speak/:animal", function(req, res){
    let sounds = {
        pig: "oink",
        cow: "moo",
        dog: "woof"
    };
    let input = req.params.animal;
    let output = sounds[input];

    // if(input === "dog"){
    //    output = ("woof");
    // } else if(input === "cow"){
    //     output = ("moo");
    // } else if(input === "pig"){
    //     output = ("oink");
    // }
    res.send(`The ${input} says "${output}."`);
});

// Visiting "/repeat/hello/3" should print "hello hello hello"
// Visiting "/repeat/hello/5" should print "hello hello hello hello hello"
// Visiting "/repeat/blah/2" should print "blah blah

// res.send only sends once! (same as return)
app.get("/repeat/:greeting/:rep", function(req, res){
    let greeting = req.params.greeting;
    let rep = req.params.rep;
    let output = " ";

    for (let i = 0; i < rep; i++){
        output += (`${greeting} `);
    }
    res.send(`${rep} ${output} `);
});

app.get("*", function(req, res){
   res.send("Sorry, page not found... what are you doing with your life?");
});

app.listen("3000", function(){
    console.log("server connected");
});
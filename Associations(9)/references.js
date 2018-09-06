let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2", {useMongoClient: true});

// in node u need ./ to direct to the current directory
let Post = require("./models/post");
let User = require("./models/user.js");


// User.create ({
//     email: "bob@gmail.com",
//     name: "Bob"
// });

// Post.create ({
//    title: "how to cook a burger",
//    content: "just learn it and practice it duh"
// }, function(err, post){
//    console.log(post);
// });

// create a post
Post.create({
   title: "how to cook a burger pt.4",
   content: "JUST Dew IT"
}, function(err, post){
    // find the user
   User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
      if(err){
          console.log(err);
      } else {
          // take that post, and push it to the beginning
          foundUser.posts.unshift(post);
          // save the post
          foundUser.save(function(err, data){
              if(err){
                  console.log(err);
              } else {
                  // print the data
                  console.log(data);
              }
          });
      }
   });
});

// find user
// find all posts for that user
// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });
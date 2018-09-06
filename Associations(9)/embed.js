let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo", {useMongoClient: true});

// POST - title, content
let postSchema = new mongoose.Schema({
    title: String,
    content: String
});
let Post = mongoose.model("Post", postSchema);

// USER - email, name
let userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
let User = mongoose.model("User", userSchema);

// new user

// let newUser = new User({
//     email: "abcdef@gmail.com",
//     name: "hermoine granger"
// });
//
// newUser.posts.push({
//     title: "how to brew polyjuice potion",
//     content: "ya just mix it up ya see"
// });
//
// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// newUser.save(function(err, user){
//    if(err){
//        console.log(err);
//    } else {
//        console.log(user);
//    }
// });

// new post

// let newPost = new Post({
//    title: "reflections on Apples",
//    content: "they are pretty good, and pretty good in the mornings"
// });
// newPost.save(function(err, post){
//    if(err){
//        console.log(err);
//    } else {
//        console.log(post);
//    }
// });


// findOne() finds ONE matching, not the entire data
User.findOne({name: "hermoine granger"}, function(err, user){
    if (err){
        // console.log(err);
    } else {
        user.posts.push({
           title: "3 things i really hate",
           content: "harry potter, voldemort, me not being the smartest one in the room"
        });
        user.save(function(err, user){
           if (err){
               console.log(err);
           } else {
               console.log(user);
           }
        });
    }
});
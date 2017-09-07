# Databases

==================================================================================
## Intro To Databases

* What is a database?
    * A collection of information / data
    * Has an interface
* SQL (relational) vs. NoSQL (non-relational)
==================================================================================


==================================================================================
# Intro to MongoDB

* What is MongoDB?
* Why are we using it?
* Let's install it!
==================================================================================


==================================================================================
# Our First Mongo Commands

* mongod
* mongo
* help
* show dbs
* use
* insert
* find
* update
* remove

example1:
db.dobs.insert()

db = db that we're on, demo
dogs = collection that will be created if it doesn't exist yet
insert = command that will insert data into the dogs collection in this db (demo)

will come back with 'WriteResult({"nInserted" : 1})'
can be seen with 'show collections'
==================================================================================


==================================================================================
db.dogs.find() = if not passed anything, it'll return everything

// how to find something with more specificity
db.dogs.find({name: "rusty"})
==================================================================================


==================================================================================
CRUD = create, read, update, destroy
==================================================================================


==================================================================================
// how to UPDATE (takes two parameters)
db.dogs.update({name: "lulu"}, {breed: "labradoodle"}) == makes the name disappear

    // don't override everything
    db.dogs.update({name: "rusty"}, {$set: {name: "tater", isCool: true}})
==================================================================================

======================================================================================================
db.dogs.remove({"breed": "labradoodle"}).limit(1) = limits the number of the things you wnat to remove
======================================================================================================


==================================================================================
# Mongoose

* What is Mongoose?
* Why are we using it?
* Interact with a Mongo Database using Mongoose

==================================================================================


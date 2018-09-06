
==================================================================================
# Style the campgrounds page

    * add a better header/title
    * make campgroudns display in a grid
==================================================================================


==================================================================================
# Style the Navbar and form

    * add a navbar to all templates
    * style the new campground form
==================================================================================


==================================================================================
# Add Mongoose

    * install and configure mongoose
    * setup campground model
    * use campground model inside of our routes
==================================================================================


==================================================================================
ORDER IS IMPORTANT IN THE ROUTES

# Show Page

    * Review the RESTful routes we've seen so far
    * Add description to our campground model
    * Show db.collection.drop() -- drops(delete) everything in the collection
    * Add a show route/template

# RESTful Routes

name     url       verb    description
/////////////////////////////////////////////////////////////
INDEX   /dogs      GET     Display a list of all dogs
NEW     /dogs/new  GET     Show form to make a new dog
CREATE  /dogs      POST    Add new dog to database
SHOW    /dogs/:id  GET     Shows info about one dog
==================================================================================


==================================================================================
# Refactor Mongoose Code
    * Create a models directory
    * Use module.exports
    * Require everything correctly!
==================================================================================

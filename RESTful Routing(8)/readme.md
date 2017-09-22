# RESTful Routing

## Introduction
    * Define REST and explain WHY it matters
    * List all 7 RESTful routes
    * Show example of RESTful routing in practice

REST - a mapping between HTTP routes and CRUD

BLOG

CREATE   /blogs
READ     /readAllBlogs
UPDATE   /updateBlog/:id
DESTROY  /destroyBlog/:id


RESTful Routes - VERRRYY IMPORTANT (Try building an app using this route)
A table of all 7 RESTful routes

NAME    |     PATH        |  HTTP Verb |                      Purpose                       |   Mongoose Method        |
========================================================================================================================
INDEX   |  /dogs          |    GET     |  List all dogs                                     |   Dog.find()
NEW     |  /dogs/new      |    GET     |  Show me new dog form                              |   N/A
CREATE  |  /dogs          |    POST    |  Create a new dog, then redirect somewhere         |   Dog.create()
SHOW    |  /dogs/:id      |    GET     |  Show info about one specific dog                  |   Dog.findById()
EDIT    |  /dogs/:id/edit |    GET     |  Show edit form for one dog                        |   Dog.findById()
UPDATE  |  /dogs/:id      |    PUT     |  Update a particular dog, then redirect somewhere  |   Dog.findByIdAndUpdate()
DESTROY |  /dogs/:id      |    DELETE  |  Delete a particular dog, then redirect somewhere  |   Dog.findByIdAndRemove()

# Blog Index
    * Setup the Blog App
    * Create the Blog model
    * Add INDEX route and template

# Basic Layout
    * Add Header and Footer Partials
    * Include Semantic UI
    * Add simple Nav

# Putting the C in CRUD
    * Add NEW route
    * Add NEW template
    * Add CREATE route
    * Add CREATE template

# SHOWtime
    * Add Show route
    * Add Show template
    * Add links to show page
    * Style show template

# Edit/Update
    * Add Edit Route
    * Add Edit Form
    * Add Update Route
    * Add Update Form
    * Add Method-Override *** BC HTML forms don't implement PUT request yet
        - ?_method=PUT
        - uses POST method but treats it as a PUT request
        - npm method-override --save

# DESTROY
    * Add Destroy Route
    * Add Edit and Destroy Links

## Final Updates (avoiding script tag that could possibly be injected by user)
    * Sanitize blog body
        - npm express-sanitizer --save
    * Style Index
    * Update REST Table



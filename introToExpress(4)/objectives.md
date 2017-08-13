# Introduction to Express

* What is a framework? How is it different from a library?
    - library: when you call a library, you are in control
    - framework: framework calls you
* What is Express?
    - web development framework (node)
* Why are we using Express?
    - most popular
    - lightweight framework (doesn't hide much from you)


# Our First Express App!!!!

* Review an existing app (DogDemo)
* Review HTTP response/request lifecycle
* Create our own simple Express app!


# NPM init and package.json

* Use the `--save` flag to install packages
    - `--save -dev` (i thought)
* Explain what the package.json file does
* use `npm init` to create a new package.json


# More Routing

* Show the `*` route matcher
* Write routes containing route parameters
* Discuss route order
    - matters as heck yo


# Rendering HTML and Templates

* Use res.render() to render HTML(from an EJS file)
* Explain what EJS is and why we use it
    - ejs:
        - embedded javascript
* Pass variables to EJS templates
    - create directory called 'views'
    - thats what express looks for


# EJS Control Flow

* Show examples of control flow in EJS templates
* Write if statements in an EJS file
* Write loops in an EJS file

    - types:
        - <%= =>
            - the value that is returned will be rendered to the page and will be added to the HTML
            - I love <%= 5 + 5 =>
                - I love 10
        - <% %>
            - if there are (logic, control flows, loops) we don't want that in the HTML


# Styles and Partials

* Show how to properly include public assets
* Properly configure our app to use EJS
* Use partials to dry up our code!


# Post Requests

* Write post routes, and test them with Postman
* Use a form to send a post request
* Use body parser to get form data
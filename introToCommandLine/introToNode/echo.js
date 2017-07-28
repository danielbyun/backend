// NODE EXERCISE

/*
* Using the command line, create a file 'echo.js'
* Inside the file, write a function named 'echo' that takes 2 arguments, a string and a number
* It should print out the string, number of times from the argument
* */

function echo(str, num){
    for(let i = 0; i < num; i++){
        console.log(str);
    }
}

echo("Echo!!!", 10);
echo("Tater Tots", 3);
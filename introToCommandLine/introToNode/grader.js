// NODE EXERCISE 2
// AVERAGE GRADE

// create a new file, 'grader.js'

/*
* in the file define a new function named 'average'
* it should take a single parameter: an array of test scores (all numbers)
* it should return the average score in the array, rounded to the nearest whole number
* */

let scores = [90, 98, 89, 100, 100, 86, 94];
console.log(`the average of the first test batch is: ${average(scores)}`);

let scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(`the average of the second test batch is: ${average(scores2)}`);

function average(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    let average = (total/arr.length);
    return Math.round(average);
}

// add all of them and divide by the array.length;
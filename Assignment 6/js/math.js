/*eslint-env browser*/

// // STEP 1
// var yourNum = prompt("Enter a number");
// window.console.log(Math.abs(yourNum));


// // STEP 2
// var yourNum = prompt("Enter a number with at least 1 decimal (example: 99.9)");
// window.console.log(Math.ceil(yourNum));


// // STEP 3
// var yourNum = prompt("Enter a number with at least 1 decimal (example: 99.9)");
// window.console.log(Math.floor(yourNum));


// // STEP 4  -- STUCK ON THIS ONE
// // Create a string variable that prompts the user for 5 numbers
// var str = prompt("Enter 5 numbers delimited by commas, (example: 1,2,3,4,5)\nDo not put spaces between them");

// // Create an array variable to pass our user inputs
// var strArray = [];;

// // Split function can separate user inputs by targeting whatever is in the quotes
// // Pass the split string inputs to the array
// strArray= str.split(",");

// // Test to see if the inputs were passed to the array
// // Join the inputs with a space to show that the commas were removed by being targeted in split function
// console.log("User inputs still in string type: "+ strArray.join(" "));

// //Convert the string type data to number type data. We do this while creating a new array for numbers
// var numArray = strArray.map(Number);

// console.log("This is the numArray parsed from the string type data " + numArray.join(" "));

// // Find max and min functions
// var maxNum = Math.max.apply(null, strArray);
// var minNum = Math.min.apply(null, strArray);

// // Display the maximum and minimum values
// console.log("This is the max: " + maxNum + " This is the min: " + minNum);


// // STEP 5
// var yourNum = prompt("Enter a number");
// window.console.log("The square root of the number your entered is " + Math.sqrt(yourNum));



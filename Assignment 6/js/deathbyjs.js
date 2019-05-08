/*eslint-env browser*/

// //STEP 1
// // Create a function that accepts a string value passed to it then sorts it
// function sortString(str) {
// 	// Create a new array
// 	var unsortedArray = [];

// 	// Take the passed string and split its values into the array
// 	unsortedArray = str.split('');
	
// 	// Use .join function on the array to show that is has been created from the passed string values
// 	console.log("This is the string " + unsortedArray.join(""));
	
// 	// Use an array sort function to sort the letters
// 	// Create a new sorted array using the sort function on the array
// 	var sortedArray = unsortedArray.sort();
	
// 	// Display the sorted array
// 	console.log("This is the sorted array of letters " + sortedArray);
// }
	
// 	// Call the function and pass a string value into it
// 	sortString("alessandra derniat");
// 	sortString("the quick brown fox");
// 	sortString("banana hammock");


// //STEP 2
// // Got help here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

// // RegExp function
// function toUpperFunction(str) {
// 	return str.replace(/\w\S*/g, function(txt) {
// 	return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
// 	});
// }
// console.log(toUpperFunction("the quick brown fox"));


// // STEP 3
// function vowelFunction(str) {
// 	var vowelBank = "aeiouAEIOU"; // A variable with all the vowels
// 	var vowelCounter = 0; // A counter for the vowels
	
// 	for (var i = 0; i < str.length; i++) { // A for-loop to iterate through the letters in the string
// 		if (vowelBank.indexOf(str[i]) !== -1) { // For every vowel add 1 to the vowel counter for every vowel to compensate for computer starting with 0
// 		vowelCounter += 1;
// 		}
// 	}
// 		return vowelCounter; // Get the results
// }

// // Pass a string in the the vowelFunction and log the result
// console.log(vowelFunction("supercalifragilisticexpealidocious"));
// console.log(vowelFunction("Alessandra Derniat"));
// console.log(vowelFunction("The quick brown fox."));
// console.log(vowelFunction("A bee ate my knee."));


// //STEP 4
// function randomGenerator(length) {
// 	var text = ""; // A blank string variable to hold the random characters
// 	var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()"; // The characters from which to generate the random string
// 	for (var i = 0; i < length; i++) {
// 		text += charList.charAt(Math.floor(Math.random() * charList.length));
// 	}
// 	return text;
// }
// console.log(randomGenerator(8));


// //STEP 5
// 	function longestName(countryName) {
// 		return countryName.reduce(function(i, country) { //used reduce() to apply a function to every element in the array to reduce the array to a single value
// 	  return i.length > country.length ? i: country;
//   }, ""); //end function
// }

// // Pass the array into the longestName function and log the result 
// console.log("The longest country name is: " + longestName(["Canada", "Chile", "USA", "Guatemala", "Brazil"]));

/*eslint-env browser*/

// //STEP 1
// var yourName = prompt("Enter your first name.");
// alert("The number of letters in your first name is " + yourName.length + ".");


// //STEP 2
// var yourName = prompt("Enter your first name.");
// var yourNum = prompt("Enter a number from 1 to " + yourName.length);
// var theLetter = alert(yourName.charAt(yourNum - 1) + " is the letter in the number " + yourNum + " position in your name.");


// //STEP 3
// var yourFirstName = prompt("Enter your first name.");
// var yourLastName = prompt("Enter your last name.");
// alert("Your name is: " + yourFirstName + " " + yourLastName);



// //STEP 4
// var myStr = "The quick brown fox jumps over the lazy dog.";
// alert("The index of the word fox is: " + myStr.indexOf("fox") + ".");


// //STEP 5
// var myStr = "The quick brown fox jumps over the lazy fox.";
// alert("The last index of the word fox is: " + myStr.lastIndexOf("fox") + ".");


// //STEP 6
// var myStr = "The quick brown fox jumps over the lazy dog.";
// var yourFullName = prompt("Enter your full name.");
// var myStrNew = myStr.slice(0, 31) + yourFullName + ".";
// alert(myStrNew);


//STEP 7
// var myStr = "The quick brown fox jumps over the lazy dog.";
// var yourWord = prompt("Enter a word.");
// var isThere = myStr.indexOf(yourWord);

// if (isThere === -1) {
//   alert("The word " + yourWord + " is not contained in the sentence: The quick brown fox jumps over the lazy dog.");
// }
// else {
//   alert("The word " + "'" + yourWord + "'" + " begins at index number " + isThere + " in the sentence: The quick brown fox jumps over the lazy dog.");
// }

      // // STEP 7 ALTERNATE METHOD
// var myStr = "The quick brown fox jumps over the lazy dog.";
// var yourWord = prompt("Enter a word.");
// var isThere = myStr.match(yourWord);

// if (isThere === null) {
//   alert("Your word was not found in the sentence: " + myStr);
// }
// else {
//   alert("Your word is in the sentence: " + myStr);
// }


// //STEP 8
// var old_string = "The quick brown fox jumps over the lazy dog";
// var whereStart = old_string.indexOf("the lazy dog");
// var new_string = old_string.slice(whereStart);
// alert(new_string.toUpperCase());


// //STEP 9
// var myStr = "       THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG       ";
// alert(myStr.trim().toLowerCase());


// //STEP 10
// var myStr = "the quick brown fox jumps over the lazy dog";
// alert(myStr.charAt(0).toUpperCase().concat(myStr.slice(1)));
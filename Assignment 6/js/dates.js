/*eslint-env browser*/

// //STEP 1
// var whichMo = prompt("For which month do you want to know how many days it has?\nEnter the month number (January = 1).");
// whichMo = Number(whichMo);

// if (whichMo === 12) {
//   var startDate = new Date();
//   startDate.setMonth(0);
//   startDate.setDate(1);
//   startDate.setFullYear(2020);
//   // window.console.log(startDate);  
  
//   var endDate = new Date();
//   endDate.setMonth(whichMo - 1);
//   endDate.setDate(1);
//   endDate.setFullYear(2019);
//   // window.console.log(endDate);

//   var numDays = startDate - endDate;
//   // window.console.log(numDays);

//   var daysInMo = Math.ceil(numDays / 86400000);
//   window.console.log("There are " + daysInMo + " days in the month you entered.");
// } 
// else if (whichMo === 11) {
//   var startDate = new Date();
//   startDate.setMonth(whichMo);
//   startDate.setDate(1);
//   startDate.setFullYear(2019);
//   // window.console.log(startDate);  
  
//   var endDate = new Date();
//   endDate.setMonth(whichMo - 1);
//   endDate.setDate(1);
//   endDate.setFullYear(2019);
//   // window.console.log(endDate);

//   var numDays = startDate - endDate;
//   // window.console.log(numDays);

//   var daysInMo = Math.floor(numDays / 86400000);
//   window.console.log("There are " + daysInMo + " days in the month you entered.");
// }
// else {
//   var startDate = new Date();
//   startDate.setMonth(whichMo);
//   startDate.setDate(1);
//   startDate.setFullYear(2019);
//   // window.console.log(startDate);

//   var endDate = new Date();
//   endDate.setMonth(whichMo - 1);
//   endDate.setDate(1);
//   endDate.setFullYear(2019);
//   // window.console.log(endDate);

//   var numDays = startDate - endDate;
//   // window.console.log(numDays);

//   var daysInMo = Math.ceil(numDays / 86400000);
//   window.console.log("There are " + daysInMo + " days in the month you entered.");
// }


// //STEP 2
// var yourDate = prompt("Enter a date in this format: January 01, 2019");
// var theDate = new Date(yourDate);
// nameMo = theDate.getMonth();
// if (nameMo === 0) {
//   window.console.log("The date you entered has the month of January");
// }
// else if (nameMo === 1) {
//   window.console.log("The date you entered has the month of February");
// }
// else if (nameMo === 2) {
//   window.console.log("The date you entered has the month of March");
// }
// else if (nameMo === 3) {
//   window.console.log("The date you entered has the month of April");
// }
// else if (nameMo === 4) {
//   window.console.log("The date you entered has the month of May");
// }
// else if (nameMo === 5) {
//   window.console.log("The date you entered has the month of June");
// }
// else if (nameMo === 6) {
//   window.console.log("The date you entered has the month of July");
// }
// else if (nameMo === 7) {
//   window.console.log("The date you entered has the month of August");
// }
// else if (nameMo === 8) {
//   window.console.log("The date you entered has the month of September");
// }
// else if (nameMo === 9) {
//   window.console.log("The date you entered has the month of October");
// }
// else if (nameMo === 10) {
//   window.console.log("The date you entered has the month of November");
// }
// else {
//   window.console.log("The date you entered has the month of December");
// }


// //STEP 3
// var yourDate = prompt("Enter a date in this format: January 01, 2019");
// var theDay = new Date(yourDate);
// nameDay = theDay.getDay();

// if (nameDay === 0 || nameDay === 6) {
//   window.console.log("The date you entered is on a weekend!");
// }
// else {
//   window.console.log("The date you entered is NOT on a weekend!");
// }


// //STEP 4
// var today = new Date();
// var yesterday = today.getDate() - 1;
// // window.console.log(yesterday);

// if (yesterday === 0) {
//   window.console.log("Yesterday was Sunday");
// }
// else if (yesterday === 1) {
//   window.console.log("Yesterday was Monday");
// }
// else if (yesterday === 2) {
//   window.console.log("Yesterday was Tuesday");
// }
// else if (yesterday === 3) {
//   window.console.log("Yesterday was Wednesday");
// }
// else if (yesterday === 4) {
//   window.console.log("Yesterday was Thursday");
// }
// else if (yesterday === 5) {
//   window.console.log("Yesterday was Friday");
// }
// else {
//   window.console.log("Yesterday was Saturday");
// }


// //STEP 5
// var today = new Date();
// var dayOfWeek = today.getDay();

// if (dayOfWeek === 0) {
//   window.console.log("S");
// }
// else if (dayOfWeek === 1) {
//   window.console.log("M");
// }
// else if (dayOfWeek === 2) {
//   window.console.log("T");
// }
// else if (dayOfWeek === 3) {
//   window.console.log("W");
// }
// else if (dayOfWeek === 4) {
//   window.console.log("T");
// }
// else if (dayOfWeek === 5) {
//   window.console.log("F");
// }
// else {
//   window.console.log("S");
// }

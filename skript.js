//Request a length of a side of square from a user and display the perimeter of the square in the console.

let squareLength = prompt ('Please enter a length of a side of square');
perimeter = 4 * squareLength;
console.log(perimeter);


//Request a user's year of birth, count their age, and display the result to the console. Store the current 
//year as constant.

let birthYear = prompt ('Please enter your birth year');
const currentYear = 2020;
age = currentYear - birthYear;
console.log(age);


//Request a distance in kilometers between two cities from a user, and the time they want to cover it within. 
//Count the speed needed to be on time. 

let  distance = prompt ('Please enter the distance from your location to your destination');
let  time = prompt ('Please enter the time you would like to cover your travel within');
speed = distance / time;
alert(speed);


//Create a simple currency converter. A user types in USD and the progrom converts them to EUR. The exchange 
//rate should be stored as a constant. Then display the result in the console.

let currencyUsd = prompt ('Please enter the amount of USD you would like to convert');
const convertRate = 0.91;
console.log(currencyUsd * convertRate);


//A user types in the values of a and b for the formula a * x + b = 0. The program has to calculate the x and 
//display it in the console.

let a = prompt ('Please enter a number');
let b = prompt ('please enter another number');
let result = a * x + b === 0;
let x = (result - b) / a ===0; 
console.log(result)


//Request current time from a user in format HH:mm(HH is hour in a day from 00 to 23, mm are minutes in hour)
//and display how many hours and minutes left until tomorrow.

let currentTime = prompt ('Please enter your current time in format HH:mm(HH is hour in a day from 00 to 23, mm are minutes in hour');
let hrLeft = 24:00 - currentTime;
alert(hrLeft);
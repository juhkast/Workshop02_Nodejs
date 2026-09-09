// VS Code is used to write JavaScript, while the browser runs it and shows output in the Developer Tools Console.
// JavaScript can also run outside the browser using Node.js, but in this course we will start by running JavaScript in the browser.
// Extensions (Ctrl+Shift+X) → search “Live Server” → Install
// Live Server is optional. It opens your website in a local development server and automatically refreshes the page when you save changes. 
// Use this if you ger error messages in the console when you try to run JavaScript in the browser. You can also run JavaScript without Live Server, 
// but you will need to refresh the page manually after saving changes.
// Use const by default. Use let when the value needs to change.


// STEP 1: Print text to the browser console is string ""

console.log("Hello World!");

// STEP 2: Variables

// Store text values in variables
const userName = "Juho";
const favoriteAnimal = "Blue Elephant";

// Print the variables to the console
console.log("My name is " + userName);
console.log("My favorite animal is " + favoriteAnimal);

// STEP 3: User interaction

// Display a pop-up message

alert("Welcome to the JavaScript Basics!");


// Ask the user for their name

const visitorName = prompt("What is your name?");


// Print the user's answer

console.log(visitorName);


// Create a greeting using the user's answer

console.log("Hello " + visitorName + "! Welcome to the JavaScript Basics!");

// Ask the user for their favorite animal
const visitorFavoriteAnimal = prompt("What is your favorite animal?");

console.log(visitorFavoriteAnimal);

// Create a sentence using both answers
console.log(visitorName + "'s favorite animal is " + visitorFavoriteAnimal + "!"
);

// ⭐⭐ BONUS Ask the user for their favorite animal.If their favorite animal is "Blue Elephant", print: Great choice! That's my favorite animal too!
// ⭐⭐ BONUS Otherwise, print: Nice! Your favorite animal is [animal]. Can you figure out how to do this using if / else?

const visitorFavoriteAnimal = prompt("What is your favorite animal?");

if (visitorFavoriteAnimal === "Blue Elephant") {
   console.log("Great choice! That's my favorite animal too!");
} else {
}
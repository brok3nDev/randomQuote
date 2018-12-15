/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/

let quotes = [
  {quote: “Defining myself is one of the most difficult challenges I face.”, source: "Carol Moseley-Braun" },
  {quote: “Hate is too great a burden to bear. It injures the hater more than it injures the hated.”, source: "Coretta Scott King" },
  {quote: “In recognizing the humanity of our fellow beings we pay ourselves the highest tribute.”, source: "Thurgood Marshall" },
  {quote: “Whatever we believe about ourselves and our ability comes true for us.”, source: "Susan L. Taylor" },
  {quote: “Imagination is more important than knowledge.”, source: "Albert Einstein" },

];



/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/

// function getRandomQuote(quotes){
//   var random = Math.floor(Math.random());

// }

function getRandomQuote(min_value , max_value) {
    
  let random_number = Math.random() * (max-min) + min;
   return Math.floor(random_number);
}
function getArray(array) {
   return array[ getRandomQuote(0,array.length)];
}


/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote(message) {
  var result = getRandomQuote();
  var message = "<p class='quote'>" + result.quote + "</p>" +
    "<p class='source'>" + result.source + "</p>";
  document.getElementById('quote-box').innerHTML = message;

}


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
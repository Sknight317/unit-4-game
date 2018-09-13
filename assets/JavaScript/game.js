
//This is where we establish the target number 
randomTarget = Math.floor(Math.random() * 12 + 19);
console.log(randomTarget);
    
//This is where we set the number to guess header to match the target number.
//This also allows us to change the html and put the target number inside of the html.
$("#number-to-guess").text(randomTarget);

 
// Created a counter 
 var counter = 0;

 $("#totalScore").text(counter);

 var Wins = 0;
 $("#winCounter").text(Wins);   
 var Losses = 0;
 $("#LossCounter").text(Losses);
// Created an array of numbers.
 var crystalNum = [];


    // Created a for loop that creates 4 random numbers between 1 and 12. 
    for (var i = 0; i < 4; i++) {
    numRandom = Math.floor(Math.random() * 12 + 1);
    //The random numbers are pushed to the empty array crystalNum
    crystalNum.push(numRandom);
    }
// Checks if it's working
console.log(crystalNum)




// Made an on-click event that responds to button clicks of the blue crystal image.
 $(".Blue").on("click", function() {


    // Add the crystal value to the user's counter
    // Every time the user clicks a crystal, the counter will be increased by the random number assigned to the crystal.
    counter = counter + crystalNum[0];

    //Updates the counter html
    $("#totalScore").text(counter);

// If the counter (or numbers the user has guessed) equals the random target number..
if (counter === randomTarget) {
    alert("You Win!!")
    Wins++;
    // Update the number of wins on the page
    $("#winCounter").text(Wins); 
    resetGame();
}
// If the user's counter is greater than the target number, alert that the user loses.
else if (counter >= randomTarget) {
    alert("You Lose :(")
    Losses++;
    // Update the number of losses on the page
    $("#LossCounter").text(Losses);
    resetGame();
}
  });

// Made an on-click event that responds to button clicks of red crystal image.
  $(".Red").on("click", function() {
    counter = counter + crystalNum[1];

    $("#totalScore").text(counter);
if (counter === randomTarget) {
    alert("You Win!!")
    Wins++;
    $("#winCounter").text(Wins); 
    resetGame();
}
// If the user's counter is greater than the target number, alert that the user loses.
else if (counter >= randomTarget) {
    alert("You Lose :(")
    Losses++;
    $("#LossCounter").text(Losses);
    resetGame();
}

  });



// Made an on-click event that responds to button clicks of green crystal image.
$(".green").on("click", function() {
    counter = counter + crystalNum[2];

    $("#totalScore").text(counter);

if (counter === randomTarget) {
    alert("You Win!!")
    Wins++;
    $("#winCounter").text(Wins); 
    resetGame();
}
// If the user's counter is greater than the target number, alert that the user loses.
else if (counter >= randomTarget) {
    alert("You Lose :(")
    Losses++;
    $("#LossCounter").text(Losses);
    resetGame();
}
  });



// Made an on-click event that responds to button clicks of purple crystal image.
$(".purple").on("click", function() {
    counter = counter + crystalNum[3];

    $("#totalScore").text(counter);
if (counter === randomTarget) {
    alert("You Win!!")
    Wins++;
    $("#winCounter").text(Wins); 
    resetGame();
}
// If the user's counter is greater than the target number, alert that the user loses.
else if (counter >= randomTarget) {
    alert("You Lose :(")
    Losses++;
    $("#LossCounter").text(Losses);
    resetGame();
}
});

// Function to reset the game
function resetGame() {
    // Creates a new target number
    randomTarget = Math.floor(Math.random() * 12 + 19);
    $("#number-to-guess").text(randomTarget);
    crystalNum = [];
    counter = 0;
    $("#totalScore").text(counter);
    // For loop to create a new set of 4 random numbers
    for (var i = 0; i < 4; i++) {
        numRandom = Math.floor(Math.random() * 12 + 1);
        crystalNum.push(numRandom);
        }
    // Checks if it's working
    console.log(crystalNum)
}

  
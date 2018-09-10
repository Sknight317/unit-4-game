//This is where we establish the target number

 
randomTarget = Math.floor(Math.random() * 40 + 10);
    
//This is where we set the number to guess header to match the target number.
//This also allows us to change the html and put the target numebr inside of the html.
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

for (var i = 0; i < 4; i++) {
    numRandom = Math.floor(Math.random() * 4 + 1);
    crystalNum.push(numRandom);
}

// Checks if it's working
console.log(crystalNum)


// Made an on-click event that responds to button clicks of blue crystal image.
 $(".Blue").on("click", function() {


    // Add the crystal value to the user's counter
    // Every time the user clicks a crystal, the counter will be increased by the random number assigned to the crystal.
    counter = counter + crystalNum[0];
// Clicking the button triggers an alert message.
    alert("Your new score is: " + counter);
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

// Made an on-click event that responds to button clicks of red crystal image.
  $(".Red").on("click", function() {
    counter = counter + crystalNum[1];
// Clicking the button triggers an alert message.
    alert("Your new score is: " + counter);
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



// Made an on-click event that responds to button clicks of red crystal image.
$(".green").on("click", function() {
    counter = counter + crystalNum[2];
// Clicking the button triggers an alert message.
    alert("Your new score is: " + counter);
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



// Made an on-click event that responds to button clicks of red crystal image.
$(".purple").on("click", function() {
    counter = counter + crystalNum[3];
// Clicking the button triggers an alert message.
    alert("Your new score is: " + counter);
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



function resetGame() {}

  
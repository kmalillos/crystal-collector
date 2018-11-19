//The random number shown at the start of the game should be between 19 - 120.
//Each crystal should have a random hidden value between 1 - 12.

// --- Variables ---

var targetScore = 0; 
var userScore = 0;
var wins = 0;
var losses = 0; 

var crystalArray = [
    "assets/images/crystal-1.jpg",
    "assets/images/crystal-2.jpg",
    "assets/images/crystal-3.jpg",
    "assets/images/crystal-4.jpg"
];

// --- Functions ---

    // to CREATE crystal images
function createCrystals() {
    for (var i=0; i<crystalArray.length; i++) {
    var randomVal = Math.floor(Math.random()*12 + 1);
        var img = $("<img>")
            img.addClass('crystal-img');
            img.attr('id', 'crystal-'+(i+1));
            img.attr('src', crystalArray[i]);
            img.attr('val', randomVal)
        $("#crystals").append(img);
    }
}

    // for TARGET SCORE to get a RANDOM NUM between 19-120 (120-19 = 101)
function targetScoreSelector () {
    targetScore = Math.floor(Math.random()*101 + 19); 
        // console.log("Target Score: " + targetScore);
    $("#targetScore-text").text(targetScore);
}

    // to UPDATE crystal values after each game
function updateCrystals() {
    for (var i=0; i<crystalArray.length; i++) {
        var randomVal = Math.floor(Math.random()*12 + 1);
        $("#crystal-"+ i).attr('val', randomVal)
    }
}

    // to RESET game
function resetGame () {
    updateCrystals();
    targetScoreSelector();
    userScore=0;
    $("#userScore-text").text(userScore);
}



// --- Main Process ---

createCrystals();

targetScoreSelector();

$(".crystal-img").on("click", function () {
    //console.log("This is a crystal");

    //make user score based on random crystal values
    var crystalVal = $(this).attr('val');
        console.log("Crystal Value: " + crystalVal);

    userScore += parseInt(crystalVal);
        // console.log("User Score: " + userScore);
    $("#userScore-text").text(userScore);

    if (userScore === targetScore) {
        alert("You win!");
        wins++;
        $("#wins-text").text(wins);
        resetGame();

    } else if (userScore > targetScore) {
        alert("Final User Score: " + userScore + ". You busted! Try again!");
        losses++;
        $("#losses-text").text(losses);
        resetGame();
    }

});
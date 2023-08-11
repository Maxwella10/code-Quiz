// Declared variables
var highScoreDiv = document.querySelector("#highscores");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// Event listener to clear scores
clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});
// Retreives local stroage
var allScores = localStorage.getItem("scores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initial + " " + allScores[i].score;
        highScoreDiv.appendChild(createLi);
    }
}
// Event listener to move to index page
goBack.addEventListener("click", function() {
    window.location.replace("./index.html");
});
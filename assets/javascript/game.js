// When the game starts, the player will choose a character by clicking on the fighter's picture. The player will fight as that character for the rest of the game.
// The player must then defeat all of the remaining fighters. Enemies should be moved to a different area of the screen.
// The player chooses an opponent by clicking on an enemy's picture.
// Once the player selects an opponent, that enemy is moved to a defender area.

// The player will now be able to click the attack button.

// Whenever the player clicks attack, their character damages the defender. The opponent will lose HP (health points). These points are displayed at the bottom of the defender's picture. 
// The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their HP. These points are shown at the bottom of the player character's picture.

// The player will keep hitting the attack button in an effort to defeat their opponent.

// When the defender's HP is reduced to zero or below, remove the enemy from the defender area. The player character can now choose a new opponent.

// The player wins the game by defeating all enemy characters. The player loses the game the game if their character's HP falls to zero or below.

var characters = [
    {
        name : "Capt. James T. Kirk",
        image : "assets/images/kirk.jpg",
        attack : Math.floor(Math.random()*10)+5,
        health: 100
    },
    {
        name : "Spock The Vulcan",
        image : "assets/images/spock.jpg",
        attack : Math.floor(Math.random()*10)+5,
        health: 100
    },
    
    {
        name : "Klingon",
        image : "assets/images/klingon.jpg",
        attack : Math.floor(Math.random()*10)+5,
        health: 100
    },
    
    {
        name : "Khan Noonien Singh",
        image : "assets/images/khan.jpg",
        attack : Math.floor(Math.random()*10)+5,
        health: 100
    },
]

var selectedChar;
var enemyChar;
var enemy = [];
var targetNum = Math.floor(Math.random()*100+50);
var currentVal = 0;
var wins = 0;
var loss = 0;

function reset(){
    targetNum = Math.floor(Math.random()*100+50);
    currentVal = 0;
}



$(characters).each(function(i, e){
    $(".container-fluid").append("<div class='card' id='charCard' value = " + e.attack + " >\
    <div class='card-header'>" + e.name + "</div>\
    <div class='card-body'>\
    <img src=" + e.image + " class = image>\
    </div>\
    <div class='card-footer' > " + e.attack + "</div>\
    </div>")
})
$(".scoreboard").html("<div class='card' id='charCard' value = " + wins + " ><h4> Wins: " + wins + " </h4></div>")
$(".lossboard").html("<div class='card' id='charCard' value = " + loss + " ><h4> Loss: " + loss + " </h4></div>")
$(".attack").html("<div class='card' id='charCard' value = " + targetNum + " ><h2> Target: " + targetNum + " </h2></div>")


$(".card").click(function(){
    console.log($(this).attr("value"));
    console.log(targetNum);

    // $(this).hide();
    currentVal +=  parseInt($(this).attr("value"))
    console.log(currentVal);
    if (currentVal == targetNum){
        // Winner
        alert("You Win!")
        wins ++
        reset()
        $(".scoreboard").html("<div class='card' id='charCard' value = " + wins + " ><h4> Wins: " + wins + " </h4></div>")
    }
    if (currentVal > targetNum){
        // Loser
        alert("You Lose!")
        loss ++
        reset()
        $(".lossboard").html("<div class='card' id='charCard' value = " + loss + " ><h4> Loss: " + loss + " </h4></div>")
    }
});





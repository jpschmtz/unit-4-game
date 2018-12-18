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
        name : "kirk",
        image : "assets/images/kirk.jpg",
        attack : "21",
        health: "100"
    },
    {
        name : "spock",
        image : "assets/images/spock.jpg",
        attack : "50",
        health: "100"
    },
    
    {
        name : "klingon",
        image : "assets/images/klingon.jpg",
        attack : "99",
        health: "100"
    },
]


// $(characters).each(function(i, e){
//     $(".container").append("<li><img src='" + e.image + "' data-attack='" + e.attack + "' data-health='" + e.health + "'></li>")
// })
$(characters).each(function(i, e){
    $(".container").append("<div class= character style= max-width: 100%;>\
    <div class=card-header bg-transparent border-success>" + e.name + "</div>\
    <div class='card-body text-primary'>\
    <img src=" + e.image + " class = image>\
    </div>\
    <div class='card-footer bg-transparent border-success'>" + e.attack + "<br>" + e.health + "</div>\
    </div>")
})

/* <div class="character" style="max-width: 18rem;">
<div class="card-header bg-transparent border-success">Name</div>
<div class="card-body text-primary">
    <img src=".jpg">
</div>
<div class="card-footer bg-transparent border-success">HP</div>
</div> */

var $characters = $(".characters li img");

$characters.on("click", function(){
    console.log($(this).attr("data-attack"));
})

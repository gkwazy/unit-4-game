var bulbasaur = {
    name: "Bulbasaur",
    type: "grass",
    health: 120,
    attack: 25,
    living: true,
    img: "assets/images/Bulbasaur.png",
}
var chamander = {
    name: "Chamander",
    type: "fire",
    health: 120,
    attack: 25,
    living: true,
    img: "assets/images/Chamander.png",
}
var squirtle = {
    name: "Squirtle",
    type: "water",
    health: 120,
    attack: 25,
    living: true,
    img: "assets/images/Squirtle.png",
}
var enemyBulbasaur = {
    name: "Bulbasaur",
    type: "grass",
    health: 120,
    attack: 25,
    living: true,
    img: "assets/images/Bulbasaur.png",
}
var enemyChamander = {
    name: "Chamander",
    type: "fire",
    health: 120,
    attack: 25,
    living: true,
    img: "assets/images/Chamander.png",
}
var enemySquirtle = {
    name: "Squirtle",
    type: "water",
    health: 120,
    attack: 25,
    living: true,
    img: "assets/images/Squirtle.png",
}
var fightingPokemon = bulbasaur;
var waitingPokemonTop = chamander;
var waitingPokemonBottom = squirtle;
var enemyFightingPokemon = enemyChamander;
var waitingEnemyPokemonTop = enemyBulbasaur;
var waitingEnemyPokemonBottom = enemySquirtle;

$("#topPokemon").on("click", function () {
    change("top");
});

$("#bottomPokemon").on("click", function () {
    change("bottom");
});

$("#attack").on("click", function () {
    attack(fightingPokemon, enemyFightingPokemon);
});

function attack(attackingPokemon, defendingPokemon) {
    defendingPokemon.health = defendingPokemon.health -
        (attackingPokemon.attack + Math.floor(Math.random() * 15));
    console.log("pokemon attacked " + defendingPokemon.health);
    console.log("attack in the button");
    var healthPercent = Math.round(100 * (enemyFightingPokemon.health / 120));
    console.log(healthPercent);
    document.getElementById("enemyHealth").style.width = healthPercent + "%";
    console.log(enemyFightingPokemon.health);
    console.log(document.getElementById("enemyHealth").style.width);
}

function change(position) {
    console.log("methond called")
    if (position == "top") {
        var tempPokemon;
        tempPokemon = fightingPokemon;
        fightingPokemon = waitingPokemonTop;
        waitingPokemonTop = tempPokemon;
        document.getElementById("fightingPokemon").src = fightingPokemon.img;
        document.getElementById("topPokemon").src = waitingPokemonTop.img;
        console.log("top")
    }
    else if (position == "bottom") {
        var tempPokemon;
        tempPokemon = fightingPokemon;
        fightingPokemon = waitingPokemonBottom;
        waitingPokemonBottom = tempPokemon;
        console.log(fightingPokemon + " " + tempPokemon + " " + waitingPokemonBottom)
        document.getElementById("fightingPokemon").src = fightingPokemon.img;
        document.getElementById("bottomPokemon").src = waitingPokemonBottom.img;
        console.log("bot")
    }
    else {
        alert("error!!!!!!!!!!!!!!");
    }


    console.log(fightingPokemon)
    console.log(tempPokemon)
    console.log(waitingPokemonBottom)
    console.log(waitingPokemonTop)
}
function changeEnemy(position) {
    console.log("methond called")
    if (position == "top") {
        var tempPokemon;
        tempPokemon = fightingPokemon;
        fightingPokemon = waitingPokemonTop;
        waitingPokemonTop = tempPokemon;
        document.getElementById("fightingPokemon").src = fightingPokemon.img;
        document.getElementById("topPokemon").src = waitingPokemonTop.img;
        console.log("top")
    }
    else if (position == "bottom") {
        var tempPokemon;
        tempPokemon = fightingPokemon;
        fightingPokemon = waitingPokemonBottom;
        waitingPokemonBottom = tempPokemon;
        console.log(fightingPokemon + " " + tempPokemon + " " + waitingPokemonBottom)
        document.getElementById("fightingPokemon").src = fightingPokemon.img;
        document.getElementById("bottomPokemon").src = waitingPokemonBottom.img;
        console.log("bot")
    }
    else {
        alert("error!!!!!!!!!!!!!!");
    }


    console.log(fightingPokemon)
    console.log(tempPokemon)
    console.log(waitingPokemonBottom)
    console.log(waitingPokemonTop)
}
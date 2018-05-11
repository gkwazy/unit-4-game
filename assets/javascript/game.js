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
    attack(fightingPokemon, enemyFightingPokemon, 1);
    computerAction(enemyFightingPokemon, fightingPokemon);

});

function computerAction(enemy, player) {
    var choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0: attack(enemyFightingPokemon, fightingPokemon, 2)
            break;
        case 1: changeEnemy();
            break;
        case 2: changeEnemy();
            break;
    }
}

function attack(attackingPokemon, defendingPokemon, personAttacking) {
    defendingPokemon.health = defendingPokemon.health -
        (attackingPokemon.attack + Math.floor(Math.random() * 15));
    console.log("pokemon attacked " + defendingPokemon.health);
    console.log("attack in the button");
    console.log(healthPercent);
    if (personAttacking == 1) {
        var healthPercent = Math.round(100 * (enemyFightingPokemon.health / 120));
        document.getElementById("enemyHealth").style.width = healthPercent + "%";
        console.log(enemyFightingPokemon.health);
        console.log(document.getElementById("enemyHealth").style.width);
    }
    else if (personAttacking == 2) {
        var healthPercent = Math.round(100 * (fightingPokemon.health / 120));
        document.getElementById("yourHealth").style.width = healthPercent + "%";
        console.log("your dude " + fightingPokemon.health);
        console.log(document.getElementById("yourHealth").style.width);
    }

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
    var healthPercent = Math.round(100 * (fightingPokemon.health / 120));
    document.getElementById("yourHealth").style.width = healthPercent + "%";
    console.log("your dude " + fightingPokemon.health);
    console.log(document.getElementById("yourHealth").style.width);
}
function changeEnemy() {
    console.log("methond called")
    var computerSwitch = Math.floor(Math.random() * 2);

    if (computerSwitch == 0) {
        var tempPokemon;
        tempPokemon = enemyFightingPokemon;
        enemyFightingPokemon = waitingEnemyPokemonTop;
        waitingEnemyPokemonTop = tempPokemon;
        document.getElementById("enemyFightingPokemon").src = enemyFightingPokemon.img;
        document.getElementById("waitingEnemyPokemonTop").src = waitingEnemyPokemonTop.img;
        console.log("waitingEnemyPokemonTop")
    }
    else if (computerSwitch == 1) {
        var tempPokemon;
        tempPokemon = enemyFightingPokemon;
        enemyFightingPokemon = waitingEnemyPokemonBottom;
        waitingEnemyPokemonBottom = tempPokemon;
        console.log(enemyFightingPokemon + " " + tempPokemon + " " + waitingPokemonBottom)
        document.getElementById("enemyFightingPokemon").src = enemyFightingPokemon.img;
        document.getElementById("waitingEnemyPokemonBottom").src = waitingEnemyPokemonBottom.img;
        console.log("fdafd bot")
    }



    console.log(fightingPokemon)
    console.log(tempPokemon)
    console.log(waitingPokemonBottom)
    console.log(waitingPokemonTop)
}
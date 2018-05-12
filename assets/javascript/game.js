
var bulbasaur = {
    name: "Bulbasaur",
    type: "grass",
    health: 120,
    attack: 5,
    living: true,
    img: "assets/images/Bulbasaur.png",
}
var chamander = {
    name: "Chamander",
    type: "fire",
    health: 120,
    attack: 5,
    living: true,
    img: "assets/images/Chamander.png",
}
var squirtle = {
    name: "Squirtle",
    type: "water",
    health: 120,
    attack: 5,
    living: true,
    img: "assets/images/Squirtle.png",
}
var enemyBulbasaur = {
    name: "Bulbasaur",
    type: "grass",
    health: 120,
    attack: 5,
    living: true,
    img: "assets/images/Bulbasaur.png",
}
var enemyChamander = {
    name: "Chamander",
    type: "fire",
    health: 120,
    attack: 5,
    living: true,
    img: "assets/images/Chamander.png",
}
var enemySquirtle = {
    name: "Squirtle",
    type: "water",
    health: 120,
    attack: 5,
    living: true,
    img: "assets/images/Squirtle.png",
}



var fightingPokemon = bulbasaur;
var waitingPokemonTop = chamander;
var waitingPokemonBottom = squirtle;
var enemyFightingPokemon = enemyChamander;
var waitingEnemyPokemonTop = enemyBulbasaur;
var waitingEnemyPokemonBottom = enemySquirtle;
var gamerunning = true;

computerPick();
Battling();


function Battling() {

    $("#topPokemon").on("click", function () {
        change("top");
    });

    $("#bottomPokemon").on("click", function () {
        change("bottom");
    });

    $("#attack").on("click", function () {
        attack(fightingPokemon, enemyFightingPokemon, 1);
        computerAction(enemyFightingPokemon, fightingPokemon);
        if (fightingPokemon.health < 0) {
            fightingPokemon.living = false;
            console.log("your pokmon dead")
            fightingPokemon.img = "assets/images/dead.png"
            if (waitingPokemonTop.living == true) {
                change("top")
            }
            else if (waitingPokemonBottom.living == true) {
                change("bottom")
            }
        }
        if (enemyFightingPokemon.health < 0) {
            enemyFightingPokemon.living = false;
            console.log("enemy pokmon dead")
            enemyFightingPokemon.img = "assets/images/dead.png"
            if (waitingEnemyPokemonTop.living == true) {
                changeEnemy("top")
            }
            else if (waitingEnemyPokemonBottom.living == true) {
                changeEnemy("bottom")
            }
        }


        if (!fightingPokemon.living && !waitingPokemonBottom.living && !waitingPokemonTop.living) {
            alert("You Lose!!!");
            gameOver();
        }

        if (!enemyFightingPokemon.living && !waitingEnemyPokemonBottom.living && !waitingEnemyPokemonTop.living) {
            alert("You Win");
            gameOver();
        }
    });
}



function gameOver() {

    location.reload();


}
function computerPick() {
    var choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0: changeEnemy("top");
            break;
        case 1: changeEnemy("bottom");
            break;
        case 2:
            break;
    }
}
function computerAction(enemy, player) {
    var choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0: attack(enemyFightingPokemon, fightingPokemon, 2)
            break;
        case 1: attack(enemyFightingPokemon, fightingPokemon, 2)
            break;
        case 2: attack(enemyFightingPokemon, fightingPokemon, 2)
            break;
    }
}

function attack(attackingPokemon, defendingPokemon, personAttacking) {
    defendingPokemon.health = defendingPokemon.health -
        (attackingPokemon.attack + Math.floor(Math.random() * 35));
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
    console.log("method called")
    if (position == "top") {
        var tempPokemon;
        if (waitingPokemonTop.health > 0) {
            tempPokemon = fightingPokemon;
            fightingPokemon = waitingPokemonTop;
            waitingPokemonTop = tempPokemon;
            document.getElementById("fightingPokemon").src = fightingPokemon.img;
            document.getElementById("topPokemon").src = waitingPokemonTop.img;
            console.log("top")
        }
        else (alert("You can't tade in a defeated Pokemon"))
    }
    else if (position == "bottom") {
        var tempPokemon;
        if (waitingPokemonBottom.health > 0) {
            tempPokemon = fightingPokemon;
            fightingPokemon = waitingPokemonBottom;
            waitingPokemonBottom = tempPokemon;
            console.log(fightingPokemon + " " + tempPokemon + " " + waitingPokemonBottom)
            document.getElementById("fightingPokemon").src = fightingPokemon.img;
            document.getElementById("bottomPokemon").src = waitingPokemonBottom.img;
            console.log("bot")
        }
        else (alert("You can't tade in a defeated Pokemon"))
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
        if (waitingEnemyPokemonTop.health > 0) {
            tempPokemon = enemyFightingPokemon;
            enemyFightingPokemon = waitingEnemyPokemonTop;
            waitingEnemyPokemonTop = tempPokemon;
            document.getElementById("enemyFightingPokemon").src = enemyFightingPokemon.img;
            document.getElementById("waitingEnemyPokemonTop").src = waitingEnemyPokemonTop.img;
            console.log("waitingEnemyPokemonTop")
        }
        else (alert("Computer can't tade in a defeated Pokemon"))
    }
    if (computerSwitch == 1) {
        var tempPokemon;
        if (waitingEnemyPokemonBottom.health > 0) {
            tempPokemon = enemyFightingPokemon;
            enemyFightingPokemon = waitingEnemyPokemonBottom;
            waitingEnemyPokemonBottom = tempPokemon;
            console.log(enemyFightingPokemon + " " + tempPokemon + " " + waitingPokemonBottom)
            document.getElementById("enemyFightingPokemon").src = enemyFightingPokemon.img;
            document.getElementById("waitingEnemyPokemonBottom").src = waitingEnemyPokemonBottom.img;
            console.log("fdafd bot")
        }

    }

    var healthPercent = Math.round(100 * (enemyFightingPokemon.health / 120));
    document.getElementById("enemyHealth").style.width = healthPercent + "%";
    console.log(fightingPokemon)
    console.log(tempPokemon)
    console.log(waitingPokemonBottom)
    console.log(waitingPokemonTop)
}
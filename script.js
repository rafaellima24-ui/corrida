const car = document.getElementById("car");
const enemy = document.getElementById("enemy");
const scoreText = document.getElementById("score");

let carX = 125;
let enemyX = Math.floor(Math.random()*5)*50;
let enemyY = -100;
let score = 0;
let gameOver = false;

// Controles
document.addEventListener("keydown", (e)=>{

    if(gameOver) return;

    if(e.key==="ArrowLeft" && carX>0){
        carX-=50;
    }

    if(e.key==="ArrowRight" && carX<250){
        carX+=50;
    }

    car.style.left = carX + "px";
});

// Atualização
function update(){

    if(gameOver) return;

    enemyY += 5;

    if(enemyY > 600){
        enemyY = -100;
        enemyX = Math.floor(Math.random()*5)*50;
        score++;
        scoreText.textContent = score;
    }

    enemy.style.top = enemyY + "px";
    enemy.style.left = enemyX + "px";

    // Colisão
    if(
        enemyY > 490 &&
        enemyY < 590 &&
        enemyX === carX
    ){
        gameOver = true;
        alert("Game Over!\nPontuação: " + score);
        location.reload();
    }

    requestAnimationFrame(update);
}

update();
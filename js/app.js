import Car from './car.mjs';
import Gameover from './gameover.mjs';
import Lane from './lane.mjs';
import Menu from './menu.mjs';
import { getRandom } from './utils.mjs';

let canvas, ctx;
let laneSprite, playerCarSprite, enemyCarSprite, startSprite, gameoverSprite;
let score, highScore;
let carArray = [], player_instance;
let lane_instance;
let menu_instance, gameover_instance, interval, enemy_instance;

let state = {
    current: 1,
    menu: 1,
    running: 2,
    gameover: 3
};

let reset = () => {
    score = 0;
    carArray = [];
    player_instance = new Car(2, 425, canvas, playerCarSprite, false);

    //generate enemy car
    interval = setInterval(() => {
        enemy_instance = new Car(getRandom(1, 3), -200, canvas, enemyCarSprite, true);
        carArray.push(enemy_instance);//carArr holds enemy car
        //console.log(carArray);
    }, 1000);
}

let start = () => {
    canvas = document.querySelector('.canvas');
    ctx = canvas.getContext('2d');

    laneSprite = new Image();
    laneSprite.src = '../assets/lane.png';

    playerCarSprite = new Image();
    playerCarSprite.src = '../assets/player.png';

    enemyCarSprite = new Image();
    enemyCarSprite.src = '../assets/enemy.png';

    startSprite = new Image();
    startSprite.src = '../assets/start.png';

    gameoverSprite = new Image();
    gameoverSprite.src = '../assets/gameover.png';

    lane_instance = new Lane(canvas, laneSprite);
    menu_instance = new Menu(canvas, startSprite);
    gameover_instance = new Gameover(canvas, gameoverSprite);

    loop();
}

//update function
let update = () => {
    if (state.current == state.running) {
        lane_instance.update();

        carArray.forEach((car) => {
            car.update();
        });
    };
}

//draw function
let draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    lane_instance.draw(ctx);

    if (state.current == state.menu) {
        menu_instance.draw(ctx);
    }
    else if (state.current == state.running) {
        player_instance.draw(ctx);
        carArray.forEach((car) => {
            car.draw(ctx);
        });

        //draw score
        ctx.font = "25px Verdana";

        ctx.fillStyle = 'green';
        ctx.fillText(`Score: ${score}`, 460, 45);
    }
    else if (state.current == state.gameover) {
        player_instance.draw(ctx);
        carArray.forEach((car) => {
            car.draw(ctx);
        });
        gameover_instance.draw(ctx);
    }
}

//loop
let loop = () => {
    update();
    draw();
    requestAnimationFrame(loop);
}

document.addEventListener('DOMContentLoaded', start);

document.addEventListener('click', (e) => {
    if (state.current == state.menu) {
        if (menu_instance.isButtonClicked(e)) {
            state.current = state.running;
            reset();
        }
    }
    else if (state.current == state.gameover) {
        if (gameover_instance.isButtonClicked(e)) {
            state.current = state.running;
            reset();
        }
    }
});

document.addEventListener('keypress', (e) => {
    if (state.current == state.running) {
        if (e.key == 'a') { //left arrow
            player_instance.moveLeft();
        }
        else if (e.key == 'd') { //right arrow
            player_instance.moveRight();
        }
    }
});
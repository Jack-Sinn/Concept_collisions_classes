import bubble from "./sprite.js";

const board = document.getElementById("board");
const ctx = board.getContext("2d");
let bubbles = [];
let bump = new Audio('/.stone.mp3');


function setup(){

    for (let i = 0; i < 10; i++){
        bubbles[i] = new bubble((Math.random()*board.width),(Math.random()*board.height));
        console.log(bubbles)
    }
}

function gameloop(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,board.width,board.height);
    for (let i = 0; i < bubbles.length-1; i++){
        bubbles[i].draw(ctx);
        bubbles[i].randommovement();
        bubbles[i].edge(board);
        for(let j=i+1;j<bubbles.length-1;j++){
            bubbles[i].intersect(bubbles[j]);
        }
    }

}

setup();
setInterval(gameloop,1000/30);
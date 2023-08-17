import { base, gamepiece } from "./sprite.js";

const board = document.getElementById("board");
const ctx = board.getContext("2d");
let bubbles = [];
let players = [];



function setup(){

    for (let i = 0; i < 12; i++){
        bubbles[i] = new base((Math.random()*board.width),(Math.random()*board.height));


        players[i] = new gamepiece((Math.random()*board.width),(Math.random()*board.height),'rock');
        players[i].piece = players[i].pieces[Math.round(Math.random()*(players[i].pieces.length-1))];//
        players[i].pieceatt();
        board.width = ((window.innerWidth)*.9);
        board.height = ((window.innerHeight)*.9);
    }
    console.log(bubbles);
    console.log(players);
}

function gameloop(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,board.width,board.height);
    for (let i = 0; i < bubbles.length; i++){
        bubbles[i].draw(ctx);
        bubbles[i].randommovement();
        bubbles[i].edge(board);
        for(let j=i+1;j<bubbles.length;j++){
            bubbles[i].intersect(bubbles[j]);
        }
        bubbles[i].edge(board);
        bubbles[i].intersect(players[0]);
    }
    for (let i = 0; i < players.length; i++){
        players[i].draw(ctx);
        players[i].randommovement();
        players[i].edge(board);
        for(let j=0;j<players.length;j++){
            players[i].intersect(players[j]);
        }
    }
}

setup();
setInterval(gameloop,1000/30);
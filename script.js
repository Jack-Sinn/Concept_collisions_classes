import { base, gamepiece } from "./sprite.js";

const board = document.getElementById("board");
const ctx = board.getContext("2d");
let bubbles = [];
let players = [];
let speed=0;


export function setup(blocks,scropa,spd){
    board.width = ((window.innerWidth)*.9);
    board.height = ((window.innerHeight)*.9);

    for (let i = 0; i < blocks; i++){
        bubbles[i] = new base((Math.random()*board.width),(Math.random()*board.height));
    }
    for (let i = 0; i < scropa; i++){
        players[i] = new gamepiece((Math.random()*board.width),(Math.random()*board.height),'rock');
        players[i].piece = players[i].pieces[Math.round(Math.random()*(players[i].pieces.length-1))];//
        players[i].pieceatt();
    }
    console.log(bubbles);
    console.log(players);
    speed=spd;
    setInterval(gameloop,1000/30);
}
function gameloop(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,board.width,board.height);
    if(bubbles.length>0){
    for (let i = 0; i < bubbles.length; i++){
        bubbles[i].draw(ctx);
        bubbles[i].randommovement(speed);
        bubbles[i].edge(board);
        for(let j=i+1;j<bubbles.length;j++){
            bubbles[i].intersect(bubbles[j]);
        }
        bubbles[i].edge(board);
        bubbles[i].intersect(players[0]);
    }}
    if(players.length>0){
    for (let i = 0; i < players.length; i++){
        players[i].draw(ctx);
        players[i].randommovement(speed);
        players[i].edge(board);
        for(let j=0;j<players.length;j++){
            players[i].intersect(players[j]);
        }
    }}
}

//setup();

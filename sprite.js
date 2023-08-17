
export class base{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.color = 'rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')';
        this.sound = new Audio("");
    }
    randommovement(speed){
        this.x += (Math.round(Math.random()*speed));
        this.x -= (Math.round(Math.random()*speed));
        this.y += (Math.round(Math.random()*speed));
        this.y -= (Math.round(Math.random()*speed));
    }
    draw(ctx){
        ctx.strokeStyle ="white";
        ctx.fillStyle=this.color;
        ctx.strokeRect(this.x-25,this.y-25,this.width,this.height);
        ctx.fillRect(this.x-25,this.y-25,this.width,this.height);
    }
    intersect(other){
        if (Math.abs(this.x-other.x) < 50  &&  Math.abs(this.y-other.y) < (this.height+other.height)/2){
            this.color = 'rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')'
            other.color = 'rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')'
        }
    }
    edge(board){
        if(this.x < this.width/2){this.x =this.width/2};
        if(this.x > board.width-(this.width/2)) {this.x = board.width-(this.width/2)};
        if(this.y < this.height/2){this.y=this.height/2}
        if(this.y > board.height-(this.height/2)){this.y = board.height-(this.height/2)};
    }

    }

export class gamepiece{
    constructor(x,y,piece){
        this.x = x;
        this.y = y;
        this.piece=piece;
        this.width = 50;
        this.height = 50;
        this.image = new Image(this.width,this.height);
        this.sound = new Audio("");
        this.sounds = [new Audio('./stone.mp3'),new Audio('./crumbling_paper.mp3'),new Audio('./scissors-a.mp3')];
        this.pieces=['rock','paper','scissors'];

    }
    pieceatt(){
        if (this.piece=='rock'){this.image.src = './rock.png';this.sound=this.sounds[0]};
        if (this.piece=='paper'){this.image.src = './paper.png';this.sound=this.sounds[1]};
        if (this.piece=='scissors'){this.image.src = './scissor.png';this.sound=this.sounds[2]};
    }

    
    draw(ctx){
        ctx.drawImage(this.image,this.x-25,this.y-25,this.width,this.height);
    }
    intersect(other){
        if (Math.abs(this.x-other.x) < 50  &&  Math.abs(this.y-other.y) < (this.height+other.height)/2){
            if(this.piece == 'rock' && other.piece == 'scissors'){other.piece = 'rock'; other.pieceatt(); this.sound.play();};
            if(this.piece == 'scissors' && other.piece == 'paper'){other.piece = 'scissors'; other.pieceatt(); this.sound.play();};
            if(this.piece == 'paper' && other.piece == 'rock'){other.piece = 'paper'; other.pieceatt(); this.sound.play();};
        }
    }
    randommovement(speed){
        this.x += (Math.round(Math.random()*speed));
        this.x -= (Math.round(Math.random()*speed));
        this.y += (Math.round(Math.random()*speed));
        this.y -= (Math.round(Math.random()*speed));
    }
    convert(other){other.piece = this.piece; other.pieceatt();};
    edge(board){
        if(this.x < this.width/2){this.x =this.width/2};
        if(this.x > board.width-(this.width/2)) {this.x = board.width-(this.width/2)};
        if(this.y < this.height/2){this.y=this.height/2}
        if(this.y > board.height-(this.height/2)){this.y = board.height-(this.height/2)};
    }
}


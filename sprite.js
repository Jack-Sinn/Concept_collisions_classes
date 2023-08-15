export default class bubble{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.color = 'rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')';
        this.bump = new Audio('./stone.mp3');
    }
    
    randommovement(){
        this.x += (Math.round(Math.random()*10));
        this.x -= (Math.round(Math.random()*10));
        this.y += (Math.round(Math.random()*10));
        this.y -= (Math.round(Math.random()*10));
    }
    draw(ctx){
        //ctx.fillRect(this.x-(this.width/2),this.y-(this.width/2),this.x+(this.width/2),this.y+(this.width/2))
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
        if(this.x < this.width/2){this.x =this.width/2; this.bump.play();};
        if(this.x > board.width-(this.width/2)) {this.x = board.width-(this.width/2); this.bump.play();};
        if(this.y < this.height/2){this.y=this.height/2; this.bump.play();};
        if(this.y > board.height-(this.height/2)){this.y = board.height-(this.height/2); this.bump.play();};
    }

    }


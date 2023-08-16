
const assetimg = [
    './rock.png',
    './scissor.png',
    './paper.png',
    './grass-texture-background.jpg'
]
const assetsnd = ['./stone.mp3',
'./scissors-a.mp3',
'./crumbling_paper.mp3',
'./Generic Battle Music.mp3'];
const body = document.getElementsByTagName('body');
function imageloader(){
    
    assetimg.forEach(value => {
        const img = document.createElement('img');
        img.src=value;
        img.onload = function(){console.log(img); body[0].appendChild(img);};
    })
}
function soundloader(){
    
    assetsnd.forEach(value => {
        const snd = document.createElement('audio');
        snd.src=value;
        snd.oncanplay = function(){console.log(snd); body[0].appendChild(snd);};
    })}
imageloader();
soundloader();
console.log(body);
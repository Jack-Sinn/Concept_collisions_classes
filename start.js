import { setup } from './script.js'

const startbut = document.getElementById('start');
const startnum = document.getElementById('startnum');
const startnum2 = document.getElementById('startnum2');
const startspd = document.getElementById('startspd');
const script = document.createElement('script');
const body = document.getElementById('body');
const txnum = document.getElementById('txnum');
const txnum2 = document.getElementById('txnum2');
const txspd = document.getElementById('txspd');


script.src='./script.js';
script.type='module';


startbut.style.border = "3px solid #e74c3c";
//startbut.style.minWidth= "300px";
//startbut.style.minHeight= "100px";
startbut.innerHTML="Start";
startbut.style.fontSize='5vh';


startbut.onclick = () => {
    startnum.remove();
    startnum2.remove();
    startspd.remove();
    txnum.remove();
    txnum2.remove();
    txspd.remove();
    body.appendChild(script);
    startbut.remove();
    setup(startnum.value,startnum2.value,startspd.value);
}

setInterval(valuecheck, 50);

function valuecheck(){
if (startnum.value < 0){startnum.value=0};
if (startnum2.value < 0){startnum2.value=0};
if (startspd.value < 0){startspd.value=0};
}
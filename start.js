const startbut = document.getElementById('start');
const startnum = document.getElementById('startnum');
const startnum2 = document.getElementById('startnum2');
const startspd = document.getElementById('startspd');
const script = document.createElement('script');
const body = document.getElementById('body');

script.src='./script.js';
script.type='module';


startbut.style.border = "3px solid #e74c3c";
startbut.style.minWidth= "300px";
startbut.style.minHeight= "100px";
startbut.innerHTML="Start";
startbut.style.fontSize='5vh';


startbut.onclick = () => {
    startnum.remove();
    startnum2.remove();
    startspd.remove();
    body.appendChild(script);
    startbut.remove();
}

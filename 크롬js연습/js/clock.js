const clock =document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    //number에는 padstart불가능 padstart(길이,여백에 채울 문자)
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock,1000);//1초마다
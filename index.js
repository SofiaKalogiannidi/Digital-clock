const hours=document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");
const ampm=document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am="AM";

    if(h>12){
        h=h-12;
        am="PM";
    }
    hours.innerText=h;
    minutes.innerText=m;
    seconds.innerText=s;
    ampm.innerText=am;
    setTimeout(updateClock,1000);
}

updateClock();
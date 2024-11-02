var hitrn=0;
var score=0;
function makebubble() {
var clutter="";
for( let i=1;i<=800;i++){
    var rn=Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${rn}</div>`;
}
document.querySelector("#bpanel").innerHTML=clutter;
}
function runtimer(){
    var time=60;
    var settimer=setInterval(function(){
        if (time>0){
            document.querySelector("#Time").textContent=time;
            time--;
        }
        else{
            clearInterval(settimer);
            document.querySelector("#bpanel").textContent=`<h3>GAME OVER</h3>`;
        }
    },1000);
}
function setnewhit() {
     hitrn=Math.floor(Math.random()*10);
document.querySelector("#hit").textContent=hitrn;
}

function Increasescore(){
    score+=10;
    document.querySelector("#Score").textContent=score;
}
document.querySelector("#bpanel")
.addEventListener("click",function(details){
    clickednum=(Number(details.target.textContent));
    if (clickednum ===hitrn) {
    Increasescore();
    setnewhit();
    makebubble();
    }
})
window.onload =function(){

makebubble();
runtimer();
setnewhit();
Increasescore();
}


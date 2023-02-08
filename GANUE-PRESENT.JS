let num1 = document.getElementById("num1"),
num2 = document.getElementById("num2"),
btnstart=document.getElementById("btnstart");
 let initialnum =document.getElementById("initialnum").innerText=51;
let totalnum=0;
running();
stoprunning();
addrun();

function running(){
        btnstart.innerText="Next Number";
num1.innerText=Math.floor(Math.random()*100);
num2.innerText=Math.floor(Math.random()*100);
return num1 + num2;
function addrun(){
    let runad = num1.innerText + num2.innerText;
    totalnum +=runad;
    return  totalnum +=runad;
}

}
let nn=document.getElementById("nn").innerText=mi;

function stoprunning(){
    btnstart.innerText="Start Game";
num1.innerText=2;
num2.innerText=0;
alert.innerText="Hey"
}
stoprunning()
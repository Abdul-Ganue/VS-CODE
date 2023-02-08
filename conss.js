// let s="*";
// for(let i = 0;i<5;i++){
//     console.log(s);
//     for(let j = 20;j>10;j-=5){console.log(s+s);
// }
// for(let e = 0;e<5;e++){
//     console.log(s);
//     }
// }
function setup(){
    createCanvas(600,400);
}
function draw(){
    background(0);
    strokeweight(4);
    stroke(255);

    for(let x =0;x<=width;x+=50){
        for (let y =0;y<=height;y+=50){
            fill(random(255), 0,random(255));
            ellipse(x, y, 25, 25);
            console.log(".")
        }
    }

}


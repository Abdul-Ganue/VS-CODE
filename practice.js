size(400, 300);
background(0);
strokeweight(2);
stroke(255);
let x=0;
let y;
while (x < weight){
    line(x,0,height);
    x=x+20;
    }
    for(y=0; y<height; y=y+20){
line(0,y,width,y);
    }
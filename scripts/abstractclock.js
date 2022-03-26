 //initializing vars
 let hrUnit = 0; 
 let minUnit = 0;
 let secUnit = 0;
 let hrWidth = 0;
 let minWidth = 0; 
 let secWidth = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw(){

    setBackground();

    let x = width/2;
    let y = height/2;

    let circles = [];
    
    noStroke();
    noLoop();
    for(let i=0; i < 3; i++){
        circles.push(new ClockHand());
        circles[i].display(x,y,i);
    }

    loop();
}

function setBackground() {
    let c1;
    let currentHour = hour();
    
    if(currentHour >= 6 && currentHour <= 18){ //sunrise to sunset (6am to 6pm)
        c1 = color(66, 106, 140);
    }else{
        c1 = color(11, 36, 19);
    }

    background(c1);
}

function ClockHand(){
    
    let currentHour = hour();
    let m = minute();
    let s = second();
    // let currentHour = 2;
    // let m = 0; testing vars
    // let s = 0;
    let c2;
    let c3;
    let c4;

    //circle colors
    if(currentHour >= 6 && currentHour <= 18){ //sunrise to sunset (6am to 6pm)
        c2 = color(242, 202, 82);
        c3 = color(242, 131, 34);
        c4 = color(242, 102, 102);
    }else{ 
        c2 = color(4, 63, 59);
        c3 = color(63, 115, 94);
        c4 = color(223, 247, 226);
    }
    
    //max circle width (hour)
    let mxHr = height * 0.8;

    //one unit of time = one unit of width
    hrUnit = mxHr/24; 
    minUnit = hrWidth / 60;
    secUnit = minWidth / 60;

    //current widths
    //adding additional unit prevents circles from disappearing at 00:00:00
    hrWidth = (currentHour * hrUnit) + hrUnit; 
    minWidth = (m * minUnit) + minUnit; 
    secWidth = (s * secUnit) + secUnit;
    
    this.display = function(x, y, i){
        
        if(i==0){
            this.w = hrWidth; 
            this.c = c2;
        }
        else if(i==1){
            this.w = minWidth; 
            this.c = c3;
            //console.log(this.w);
        }
        else if(i==2){
            this.w = secWidth; 
            this.c = c4;
        }
        
        fill(this.c);
        circle(x, y, this.w);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function hoverBounce(){

}

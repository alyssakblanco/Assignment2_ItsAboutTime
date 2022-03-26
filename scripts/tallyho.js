let i = 0;//click count

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    let tallyColor = color(110, 61, 44);
    stroke(tallyColor);
    strokeWeight(8);
}
  
function mousePressed() {
    i++; //click counter
    let tallys = 0; //tally position start

    let ybound = height - 200;
    let xbound = width - 200;

    loop1:
    for(let y = 200; y <= ybound; y+=100){ // once the current x coordinate hits bounds, change y
    loop2:
        for(let x = 250; x <= xbound; x+=30){  //run until end of x bound

            if (tallys < i) { //run until tallys = clicks (creating new a newly visible tally at the next position)

                //making the next tally group start on new line if there's not enough space within bounds
                if((tallys%5 == 0) && (x + 122 > xbound)){//8*4 width of 4 tallys + 30*3 width of space between tallys = 32+90 = 122
                    break loop2;
                }

                tallys++; //tally counter

                if(tallys%5 == 0){ //if it's the 5th tally in a group
                    line(x - 150, y + 60, x, y);
                    
                } else {
                    line(x, y, x, y + 60);
                }  
            }    
        }
    }
    // console.log(i);
    // console.log(tallys);
}
  
function keyPressed() {
    location.reload();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    //clear();
    //background(50);
  }
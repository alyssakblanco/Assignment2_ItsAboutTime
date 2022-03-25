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

    // let y = 100;
    // let x = 100;
    let hbound = height - 200;
    let wbound = width - 200;
    //i++;

    for(let y = 200; y <= hbound; y+=100){
        for(let x = 200; x <= wbound; x+=30){  //if both x & y coordinate are within bounds

            if (tallys < i) { //run until tallys = clicks (creating new a newly visible tally at the next position)

                tallys++; //tally counter

                if(tallys%5 == 0){ //if it's the 5th tally in a group
                    line(x - 150, y + 60, x, y);
                    
                } else {
                    //tried putting an edge cas conditional here
                    // if(x+180 <)
                    line(x, y, x, y + 60);
                    //console.log("test");
                }  
            }    
        }
    }
    //can't figure out how to keep edge groups of 5 together 
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
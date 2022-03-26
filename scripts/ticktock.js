let myFont;

function preload() {
  myFont = loadFont('https://drive.google.com/file/d/1ZlAaQ2U6OdbZ1MnuVVivMlhMJc7-d0Xg/view?usp=sharing');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    let h = hour();
    let m = minute();
    let s = second();

    let c1 = color(3, 65, 89);
    let c2 = color(2, 89, 81);
    let c3 = color(2, 161, 63);
    let c4 = color(3, 188, 95);
    let c5 = color(12, 242, 93);

    background(c2);

    drawText(myFont, h, m, s, c5);

    let centerx = width/2;
    let centery = height/2;
    let dmax = height/1.5;
    fill(c1);
    noStroke();
    circle(centerx, centery, dmax);
    
    angleMode(DEGREES);
    
    let w = dmax/40;
    let tick = s*6; //seconds: unit moves 6 degrees (360/60)
    let tock = h*30; //hour: unit moves 30 degrees (360/12)
    let ticktock = m*6; //minute: one unit moves 6 degrees (360/60)
    
    translate(width / 2, height / 2);

    //minute
    push();
    fill(c3);
    rotate(ticktock);
    rect(-(w/2), 0, w, -dmax/3, 15);
    pop();

    //hour
    push();
    fill(c4);
    rotate(tock);
    rect(-(w/2), 0, w, -dmax/4, 15);
    pop();

    //seconds
    push();
    fill(c5);
    rotate(tick);
    rect(-(w/2), 0, w, -dmax/6, 15);
    pop();

}

function drawText(font, h, m, s, color) {
  if(h > 12){
      h -= 12;
  }

  let x = 50;
  let y = 100;
  let easing = 0.1;

  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;

  let time = nf(h,2) + ":" + nf(m,2) + ":" + nf(s,2);
  fill(color);
  textFont(font, 80);
  text(time, x, y);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let grado = Math.PI/180

function preload() {
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(800,800)
  rectMode(CENTER)
}

function draw() {
  // put drawing code here
  background(255)
  circle(290,300,80)
  //rotar la elipse
  strokeWeight(0)
  push()
  rotate(50*grado)
  translate(0,0)
  ellipse(410,-100,80,40)
  pop()
  push()
  rotate(-25*grado)
  translate(0,0)
  ellipse(110,460,80,40)
  pop()
  push()
  rotate(50*grado)
  translate(0,0)
  ellipse(620,-80,80,40)
  pop()
  push()
  rotate(-20*grado)
  translate(0,0)
  ellipse(365,450,80,40)
  pop()
  
  fill(255,255,0)
  circle(400,340,200)
  fill(0)
  circle(290,285,18)
  circle(280,315,18)
  fill(240,240,240)
  circle(287,288,8)
  circle(277,318,8)
  fill(0,200,0)
  circle(400,340,175)
  fill(255,120,0)
  
  ellipse(275,295,10,15)
  drawHexagon(370,290,25)
  drawHexagon(350,340,25)
  drawHexagon(370,390,25)
  drawHexagon(430,390,25)
  drawHexagon(450,340,25)
  drawHexagon(430,290,25)
  drawHexagon(400,340,25)
  
  strokeWeight(1)
  line(325,218,328,228)
  line(318,218,321,228)
  line(313,222,315,230)

  line(260,375,270,370)
  line(258,386,270,380)
  line(265,393,275,387)

  line(510,285,530,280)
  line(510,295,534,288)
  line(510,305,530,298)

  line(474,424,489,440)
  line(469,434,487,452)
  line(464,442,479,456)

  strokeWeight(0)

  triangle(530,385,498,360,488,390)

}


function drawHexagon(x, y, radius) {
  fill(255, 150, 0);
  stroke(0);
  strokeWeight(0);
  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i - HALF_PI;
    let px = x + cos(angle) * radius;
    let py = y + sin(angle) * radius;
    vertex(px, py);
  }
  endShape(CLOSE);
}
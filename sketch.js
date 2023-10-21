let posX;
let posY;
let diametro;
let radio;
let fondo;
let colorPelota;
function setup() {
  createCanvas(windowWidth, windowHeight);
  // print(posX);
  // posX = 234;
  // print(posX);
  // posX = posX + 25;
  // print(posX);
  // posX = posX * 2;
  // print(posX);
  // posX = posX / 5;
  // print(posX);
  // posX *= 8;
  // print(posX);
  // posX += 1;
  // print(posX);
  // posX ++;
  posX = windowWidth / 2;
  posY = windowHeight / 2;
  // frameRate(10);
  diametro = 100;
  radio = diametro / 2;
  fondo = color(25, 200, 25);
  colorPelota = color(0);
}

function draw() {
  background(fondo);

  posX -= 10;
  if (posX < -radio) {
    diametro = random(10, 100);
    radio = diametro / 2;
    fondo = color(255, random(100, 255), 50);
    posX = windowWidth + radio;
    colorPelota = color(random(200), random(300), random(200));





  }
  fill(colorPelota);
  circle(posX, posY, diametro);
  print(posX);
}

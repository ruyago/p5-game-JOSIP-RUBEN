let game = new Game()

function setup() {
    createCanvas(900, 900);
 }
 
 function preload(){

    game.background.preload()
    game.car.preload()
 }


 function draw() {
    game.background.draw()
    game.car.draw()
 }
 
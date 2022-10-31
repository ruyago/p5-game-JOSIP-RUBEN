let game = new Game()

function setup() {
    createCanvas(900, 900);
 }
 
 function preload(){

    game.background.preload()
    game.car.preload()
    game.bus.preload()
    game.truck.preload()
    game.bike.preload()
 }


 function draw() {
    game.background.draw()
    game.car.draw()
    game.bus.draw()
    game.truck.draw()
    game.bike.draw()
   

 }
 
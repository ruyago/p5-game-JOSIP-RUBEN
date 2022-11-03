let game = new Game()
let soundTrack = document.getElementsById(soundTrack)
let pause2 = true;
 
 

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
 function startGame() {
location.reload()
 }
 
function update(){

   if(!pause2) return}

function mousePressed(){
console.log(pause2)
   pause2 = !pause2
}




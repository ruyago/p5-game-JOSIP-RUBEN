class Truck {
	constructor(){
		this.truck
        this.y = 0
        this.speed = Math.random()*7
        this.x = 220	
        this.gameOver2
	}

	preload() {

		this.truck = loadImage("./assets/background/truck.png")
    this.gameOver2 = loadSound('./assets/background/gameOver.mp3');
		
		}

    

	draw() {
      
		image(this.truck, this.x , this.y, 120, 120)
        this.y += this.speed 

        // reset 
        if (this.y >= 900) {
        this.y = 1;
        this.speed = Math.random()*6 + 3
                         
        }

       if (dist(this.x, this.y, game.car.x, game.car.y) < 113){
         strokeWeight(33)
        ellipse(450, 400, 500, 500)
            textSize(72);
            textFont('Georgia');
            text('GAME OVER', 230, 420);
          noLoop()
          resultLose.innerText  = `You still need ${7146 - (frameCount*3)} Km to arrive in Qatar. 
          Try it again.
          
          Spain => France => Slovenia => Croatia => Serbia => Bulgaria => Turkey => Syria => Jordania => South Arabia => QATAR` 
          game.truck.gameOver2.play()
        }
}

}
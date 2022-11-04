const resultLose = document.getElementById('resultLose');
class Bike {
	constructor(){
		this.bike
        this.y = 0
        this.speed = Math.random()*4
        this.x = 600
        this.gameOver3	

	}

	preload() {

		this.bike = loadImage("./assets/background/bike.png")
        this.gameOver3 = loadSound('./assets/background/gameOver.mp3');	
		}

    

	draw() {
      
		image(this.bike, this.x, this.y, 90, 90)
        this.y += this.speed 

        // reset 
       if (this.y >= 900) {
        this.y = 1;
        this.speed = Math.random()*6 + 4
                         
        }
        
        if (dist(this.x, this.y, game.car.x, game.car.y) < 85){

            strokeWeight(33)
            ellipse(450, 400, 500, 500)
            textSize(72);
            textFont('Georgia');
            text('GAME OVER', 230, 420);
             noLoop()
            resultLose.innerText  = `You still need ${7146 - (frameCount*3)} Km to arrive in Qatar.
            Try it again.
            
            Spain => France => Slovenia => Croatia => Serbia => Bulgaria => Turkey => Syria => Jordania => South Arabia => QATAR` 
            game.bike.gameOver3.play()
        }
}



}
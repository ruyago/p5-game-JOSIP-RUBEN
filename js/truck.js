class Truck {
	constructor(){
		this.truck
        this.y = 0
        this.speed = Math.random()*7
        this.x = 220	

	}

	preload() {

		this.truck = loadImage("../assets/background/truck.png")
    
		
		}

    

	draw() {
      
		image(this.truck, this.x , this.y, 120, 120)
        this.y += this.speed 

        // reset 
        if (this.y >= 900) {
        this.y = 1;
        this.speed = Math.random()*8 + 1
                         
        }

       if (dist(this.x, this.y, game.car.x, game.car.y) < 113){
         strokeWeight(33)
        ellipse(450, 400, 500, 500)
            textSize(72);
            textFont('Georgia');
            text('GAME OVER', 230, 420);
          noLoop()
          resultLose.innerText  = `You still need ${7146 - frameCount} Km to arrive Qatar. 
          Try it again.` 
          
        }
}

}
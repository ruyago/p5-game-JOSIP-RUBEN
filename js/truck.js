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
        this.speed = Math.random()*6 + 1
                         
        }

       if (dist(this.x, this.y, game.car.x, game.car.y) < 25){
        ellipse(450, 400, 500, 500)
            strokeWeight(33)
            textSize(72);
            textFont('Georgia');
            text('GAME OVER', 230, 420);
          //noLoop()
        }

        if (counter1.innerText == 7000){
            ellipse(450, 400, 500, 500)
            strokeWeight(33)
            textSize(72);
            textFont('Georgia');
            text('World Cup', 230, 420);
            //noLoop()
         }
}

}
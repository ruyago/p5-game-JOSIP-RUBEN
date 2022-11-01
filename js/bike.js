

class Bike {
	constructor(){
		this.bike
        this.y = 0
        this.speed = Math.random()*5
        this.x = 600
       
	

	}

	preload() {

		this.bike = loadImage("../assets/background/road.jpg")
       
  
		
		}

    

	draw() {
      
		image(this.bike, this.x, this.y, 90, 90)
        this.y += this.speed 

        // reset 
       if (this.y >= 900) {
        this.y = 1;
                         
        }
    
        if (dist(this.x, this.y, game.car.x, game.car.y) < 25){
            noLoop()
        }
        
}



}
class Truck {
	constructor(){
		this.truck
        this.y = 1
        this.speed = Math.random()*7
        this.x = 220
       
       
		

	}

	preload() {

		this.truck = loadImage("../assets/background/road.png")
       
  
		
		}

    

	draw() {
      
		image(this.truck, this.x , this.y, 90, 90)
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
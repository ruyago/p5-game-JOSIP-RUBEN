class Bike {
	constructor(){
		this.bike
        this.y = 100
        this.speed = Math.random()*3
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
        this.y = 100;
                         
        }
        
}

}
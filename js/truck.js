class Truck {
	constructor(){
		this.truck
        this.y = 1
        this.speed = Math.random()*5
        this.x = 200
       
       
		

	}

	preload() {

		this.truck = loadImage("../assets/background/road.png")
       
  
		
		}

    

	draw() {
      
		image(this.truck, this.x , this.y, 90, 90)
        this.y += this.speed 

        // reset 
        if (this.y >= 900) {
        this.y = 100;
                         
        }
        
}

}
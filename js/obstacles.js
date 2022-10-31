class Obstacles {
	constructor(){
		this.obstacles1
		this. x = 450
		this.y=400
        this.velocity = -1
	
		

	}

	preload() {
		this.obstacles1 = loadImage("../assets/background/road.jpg")
		
		}

	draw() {
      
	
		
		image(this.obstacles1, this.x , this.y , 90, 90)

        
    }


}

 



    

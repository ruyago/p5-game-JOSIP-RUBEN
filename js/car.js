class Car {
	constructor(){
		 this.carImage
		this. x = 250
		this. y = 600
		

	}

	preload() {
		this.carImage = loadImage("../assets/background/car.png")
		
		}

	draw() {
      
	
		
		image(this.carImage, this.x , this.y , 90, 90)
		
		

		
	}
}
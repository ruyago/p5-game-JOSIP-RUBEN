class Background {
	constructor(){
		 this.backgroundImage
		this. x = 0
		this.y=0
		this.velocity = -1

	}

	preload() {
		this.backgroundImage = loadImage("../assets/background/road.png")
		
		}

	draw() {
		

		this.y-= this.velocity
		image(this.backgroundImage, this.x , this.y , 900, 900)
		image(this.backgroundImage, this.x , this.y - 900, 900, 900);
		




		}
	
		
		
	
}


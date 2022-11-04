const counter1 = document.getElementById('counter');

class Background {
	constructor(){
		this.backgroundImage
		this. x = 0
		this.y= 0
		this.velocity = -10
		this.button
	}

	preload() {
		this.backgroundImage = loadImage("./assets/background/road2.png")
		
		}

	draw() {
		
		clear()
		this.y-= this.velocity
		image(this.backgroundImage, this.x , this.y , 900, 900)
		image(this.backgroundImage, this.x , this.y - 900, 900, 900);
		this.button

		if(this.y > 890){
			this.y = 0
		}
		

		counter1.innerText  = Math.floor(frameCount*3);
		


		}
	
		
		
	
}


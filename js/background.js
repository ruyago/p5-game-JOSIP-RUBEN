const counter1 = document.getElementById('counter');


/*let numberStart = 0;

let countdown = setInterval(update2, 1000) 

function update2() {
	numberStart++

	 if(numberStart === 7100){
	 	clearInterval(countdown);
		alert('game stop');
	}



	counter1.innerText  = numberStart;
  }
*/


console.log(counter1);

class Background {
	constructor(){
		this.backgroundImage
		this. x = 0
		this.y= 0
		this.velocity = -10
	}

	preload() {
		this.backgroundImage = loadImage("../assets/background/road.png")
		
		}

	draw() {
		
		clear()
		this.y-= this.velocity
		image(this.backgroundImage, this.x , this.y , 900, 900)
		image(this.backgroundImage, this.x , this.y - 900, 900, 900);
		

		if(this.y > 890){
			this.y = 0
		}
		

		counter1.innerText  = Math.floor(frameCount*20);
	 


		}
	
		
		
	
}


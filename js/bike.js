
class Bike {
	constructor(){
		this.bike
        this.y = 0
        this.speed = Math.random()*5
        this.x = 600
     
	

	}

	preload() {

		this.bike = loadImage("../assets/background/bike.png")
       
  
		
		}

    

	draw() {
      
		image(this.bike, this.x, this.y, 90, 90)
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
             noLoop()
        
        
        }
       /* if (counter1.innerText == 7000){
            ellipse(450, 400, 500, 500)
            strokeWeight(33)
            textSize(72);
            textFont('Georgia');
            text('World Cup', 230, 420);
            //noLoop()
         }*/
}



}
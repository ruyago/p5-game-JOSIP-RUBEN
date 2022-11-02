const resultLose = document.getElementById('resultLose');
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
        this.speed = Math.random()*8 + 3
                         
        }
        
        if (dist(this.x, this.y, game.car.x, game.car.y) < 85){

            strokeWeight(33)
            ellipse(450, 400, 500, 500)
            textSize(72);
            textFont('Georgia');
            text('GAME OVER', 230, 420);
             noLoop()
            resultLose.innerText  = `You still need ${7146 - frameCount} Km to arrive Qatar.
            Try it again.` 
        
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
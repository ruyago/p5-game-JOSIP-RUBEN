let lifes = 3;

class Bus {
	constructor(){
		this.bus
        this.y = 1
        this.speed = Math.random()*6
        this.x = 400
       
		

	}

	preload() {

		this.bus = loadImage("../assets/background/road.jpg")
       
  
		
		}

    

	draw() {
      
		image(this.bus, this.x , this.y, 90, 90)
        this.y += this.speed 

        // reset 
        if (this.y >= 900) {
        this.y = 1;
                         
        }
        

        if (dist(this.x, this.y, game.car.x, game.car.y) < 25){
          
          noLoop()
           console.log(lifes)
           
       }
    
    
    
    
    }

  


    }






    

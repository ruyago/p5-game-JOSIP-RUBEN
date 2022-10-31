class Bike {
	constructor(){
		this.bike
        this.y = 0
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

collision(carInfo) {

    // console.log("collision")

    // Get the middle of the obstacle
    let bikeX = this.x + this.width / 2
    let bikeY = this.y + this.height / 2

    // Get the middle of the car
    let carX = carInfo.x + carInfo.width / 2
    let carY = carInfo.y + carInfo.height / 2
    
    // dist(x1, y1, x2, y2) returns the distance between the objects
    if (dist(obstacleX, obstacleY, carX, carY) > 25) {
        return false
    } else {
        // Increment the score
        console.log("collision")
        return true
    }
}

}
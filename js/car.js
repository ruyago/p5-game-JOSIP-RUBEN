class Car {
	constructor(){
		 this.carImage
		this. x = 420
        this. y = 750
	}

	preload() {
		this.carImage = loadImage("../assets/background/car.png")
		
		}

	draw() {
		image(this.carImage, this.x , this.y , 90, 90)    
    }

    moveRight() {
       if (this.x < 600){
        this.x += 190
       } 
    }

    moveLeft() {
        
        if (this.x > 250){
        this.x -= 190
    }
    }

    moveUp() {
        
        if (this.y > 120){
        this.y -= 190}
    }

    moveDown() {
        if (this.y < 750){
        this.y -= -190}
    }
}

    function keyPressed() {
        if (keyCode === 39) {
            console.log("right")
            game.car.moveRight()
            
        }
    
        if (keyCode === 37) {
            game.car.moveLeft()
        }

        if (keyCode === 38) {
            console.log("top")
            game.car.moveUp()
        }
    
        if (keyCode === 40) {
            game.car.moveDown()
        }
    
    



}

    

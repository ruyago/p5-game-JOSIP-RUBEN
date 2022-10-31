class Car {
	constructor(){
		 this.carImage
		this. x = 420
        this. y = 650
	}

	preload() {
		this.carImage = loadImage("../assets/background/car.png")
		
		}

	draw() {
		image(this.carImage, this.x , this.y , 90, 90)    
    }

    moveRight() {
        this.x += 180
    }

    moveLeft() {
        this.x -= 180
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
    



}

    

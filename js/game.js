class Game {
	constructor() {
		this.background = new Background()
		
	}

	preload() {
		this.backgroundImages = [
			{ src: loadImage("./assets/background/road.png"), x: 0, speed: 0 },
            { src: loadImage("./assets/background/road2.png"), x: 0, speed: 1 },
			
		]
        this.carImage = loadImage("./assets/car/car.png")
	
	}

	draw() {
		
		this.background.draw()
        this.car.draw()

	}
}
class Car {
	constructor() {
		this.width = 100
		this.height = 140
		this.x = 0
		this.y = 600 - this.height
		this.velocity = 0
		this.score = 0
	}

	draw() {
		
		this.y += this.velocity

		// If y is lower than the top left corner of bb8 we need to set its value to the starting value
		if (this.y >= 900 - this.height) {
			this.y = 900 - this.height
		}

		image(game.playerImage, this.x, this.y, this.width, this.height)
	}

	
}
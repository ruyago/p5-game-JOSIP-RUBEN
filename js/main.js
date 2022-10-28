const game = new Game()

// Load game assets
function preload() {
	game.preload()
}

function setup() {
	createCanvas(900, 900)
}

function draw() {
	game.draw()
}

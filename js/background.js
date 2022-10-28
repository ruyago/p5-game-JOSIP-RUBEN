class Background {
    draw() {
        game.backgroundImages.forEach(function(img) {
            img.x -= img.speed
            image(img.src, img.x, 0, width, height)
            image(img.src, img.x + width, 0, width, height)
            if (img.x <= -width) img.x = 0
        })
    }
}
  this.background = new Background()
        this.player = new Player()
        this.obstacles = [];
    
    preload() {
        this.backgroundImages = [
            { src: loadImage("../assets/background/road.jpg"), x: 0, speed: 0 },
           
        ]
        this.playerImage = loadImage("../assets/player/bb8.gif")
        this.coinImage = loadImage("../assets/coins/tile000.png")
    }

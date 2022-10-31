class Background {
    draw() {
        /*game.backgroundImages.forEach(function(img) {
            img.x -= img.speed
            image(img.src, img.x, 0, width, height)
            image(img.src, img.x + width, 0, width, height)
            if (img.x <= -width) img.x = 0
        })*/
    }
}
    this.background = new Background()
        
    
    preload() {
        this.background = [
            { src: loadImage("../assets/background/road.png"), x: 0, speed: 0 },
            { src: loadImage("../assets/background/road.png"), x: 0, speed: 0 }
           
        ]

    }

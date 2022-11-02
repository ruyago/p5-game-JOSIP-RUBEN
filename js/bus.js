
let img;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let finish;
let mySoundBus;


class Bus {
	constructor(){
		this.bus
        this.y = 0
        this.speed = Math.random()*7+1
        this.x = 400
        //this.mySoundBus
    
		

	}

	preload() {

		this.bus = loadImage("../assets/background/bus.png")
        img = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/200px-Bandera_de_Espa%C3%B1a.svg.png')
        img2 = loadImage('https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg')
        img3 = loadImage('https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg')
        img4 = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/2560px-Flag_of_Croatia.svg.png')
        img5 = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/2560px-Flag_of_Serbia.svg.png')
        img6 = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/1200px-Flag_of_Bulgaria.svg.png')
        img7 = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/640px-Flag_of_Turkey.svg.png')
        img8 = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/2560px-Flag_of_Syria.svg.png')
        img9 = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/1280px-Flag_of_Jordan.svg.png')
        img10 = loadImage('https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg')
        img11 = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_Qatar_%283-2%29.svg/1024px-Flag_of_Qatar_%283-2%29.svg.png')
        finish = loadImage('https://cloudinary.fifa.com/transform/11efbf28-c08e-4a13-958f-78685fbb8a80/Qatar-2022-s-32-teams-graphic?tx=c_fill,ar_1.78,g_auto,q_auto,w_1455')
       // this.mySoundBus = loadSound('../assets/background/car.mp3');

		
		}

    

	draw() {
      
		image(this.bus, this.x , this.y, 90, 90)
            this.y += this.speed

        

        // reset 
        if (this.y >= 900) {
            this.y = 1  
            this.speed = Math.random()*6 +1
        }
       

        if (dist(this.x, this.y, game.car.x, game.car.y) < 25){
          
            
           // game.car.mySoundBus.play()
            ellipse(450, 400, 500, 500)
            strokeWeight(33)
            textSize(72);
            textFont('Georgia');
            text('GAME OVER', 230, 420);
            
            noLoop()
           
       }

       if (counter1.innerText > 1){
        
        image(img, 10, 50, 100, 50);
        image(img, 800, 50, 100, 50);
        image(img, 10, 400, 100, 50);
        image(img, 800, 400, 100, 50)
        image(img, 10, 800, 100, 50);
        image(img, 800, 800, 100, 50);
        }

        if (counter1.innerText > 600){
        
            image(img2, 10, 50, 100, 50);
            image(img2, 800, 50, 100, 50);
            image(img2, 10, 400, 100, 50);
            image(img2, 800, 400, 100, 50)
            image(img2, 10, 800, 100, 50);
            image(img2, 800, 800, 100, 50);
            }

            if (counter1.innerText > 1200){
        
                image(img3, 10, 50, 100, 50);
                image(img3, 800, 50, 100, 50);
                image(img3, 10, 400, 100, 50);
                image(img3, 800, 400, 100, 50)
                image(img3, 10, 800, 100, 50);
                image(img3, 800, 800, 100, 50);
                }    

                if (counter1.innerText > 1800){
        
                    image(img4, 10, 50, 100, 50);
                    image(img4, 800, 50, 100, 50);
                    image(img4, 10, 400, 100, 50);
                    image(img4, 800, 400, 100, 50)
                    image(img4, 10, 800, 100, 50);
                    image(img4, 800, 800, 100, 50);
                    }   

                    if (counter1.innerText > 2400){
        
                        image(img5, 10, 50, 100, 50);
                        image(img5, 800, 50, 100, 50);
                        image(img5, 10, 400, 100, 50);
                        image(img5, 800, 400, 100, 50)
                        image(img5, 10, 800, 100, 50);
                        image(img5, 800, 800, 100, 50);
                        }   

                        if (counter1.innerText > 3000){
        
                            image(img6, 10, 50, 100, 50);
                            image(img6, 800, 50, 100, 50);
                            image(img6, 10, 400, 100, 50);
                            image(img6, 800, 400, 100, 50)
                            image(img6, 10, 800, 100, 50);
                            image(img6, 800, 800, 100, 50);
                            }   

                            if (counter1.innerText > 3600){
        
                                image(img7, 10, 50, 100, 50);
                                image(img7, 800, 50, 100, 50);
                                image(img7, 10, 400, 100, 50);
                                image(img7, 800, 400, 100, 50)
                                image(img7, 10, 800, 100, 50);
                                image(img7, 800, 800, 100, 50);
                                }   
                                if (counter1.innerText > 4200){
        
                                    image(img8, 10, 50, 100, 50);
                                    image(img8, 800, 50, 100, 50);
                                    image(img8, 10, 400, 100, 50);
                                    image(img8, 800, 400, 100, 50)
                                    image(img8, 10, 800, 100, 50);
                                    image(img8, 800, 800, 100, 50);
                                    }   

                                    if (counter1.innerText > 4800){
        
                                        image(img9, 10, 50, 100, 50);
                                        image(img9, 800, 50, 100, 50);
                                        image(img9, 10, 400, 100, 50);
                                        image(img9, 800, 400, 100, 50)
                                        image(img9, 10, 800, 100, 50);
                                        image(img9, 800, 800, 100, 50);
                                        } 
                                        
                                        if (counter1.innerText > 5400){
        
                                            image(img10, 10, 50, 100, 50);
                                            image(img10, 800, 50, 100, 50);
                                            image(img10, 10, 400, 100, 50);
                                            image(img10, 800, 400, 100, 50)
                                            image(img10, 10, 800, 100, 50);
                                            image(img10, 800, 800, 100, 50);
                                            }   

                                            if (counter1.innerText > 6000){
        
                                                image(img11, 10, 50, 100, 50);
                                                image(img11, 800, 50, 100, 50);
                                                image(img11, 10, 400, 100, 50);
                                                image(img11, 800, 400, 100, 50)
                                                image(img11, 10, 800, 100, 50);
                                                image(img11, 800, 800, 100, 50);
                                                }   

                                                 

      //  if (counter1.innerText > 70){
           // ellipse(50, 50, 900, 900)}

       if (counter1.innerText > 7146){

        image(finish, 0, 0, 900, 900);
        /*ellipse(450, 400, 500, 500)
        strokeWeight(33)
        textSize(72);
        textFont('Georgia');
        text('World Cup', 230, 420);*/
        noLoop()
	 }

     
    
    
    
    }

  


    }






    

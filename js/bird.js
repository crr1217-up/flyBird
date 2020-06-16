const birdDom = document.getElementsByClassName("bird")[0];
const birdStyles = window.getComputedStyle(birdDom);
const birdWidth = parseFloat(birdStyles.width);
const birdHeight = parseFloat(birdStyles.height);
const birdLeft = parseFloat(birdStyles.left);
const gameHeight = document.getElementsByClassName("game")[0].clientHeight;


class Bird extends Rectangle { 
    constructor(top,speedy) { 
        super(birdWidth, birdHeight, birdLeft, top, 0, speedy, birdDom);
        this.aSpeed = 230;//加速度
        this.maxHeight = gameHeight - birdHeight - landHeight;
        this.swing = 1;
        this.timer = null;
    }
    move(duration) { 
        super.move(duration);
        let a = this.aSpeed * duration;
        this.speedy += a;
        this.startFly();
    }
    onmove() { 
        if (this.top < 0) {
            this.top = 0;
        } else if(this.top > this.maxHeight){ 
            this.top = this.maxHeight;
        }
    }
    upFly() { 
        this.speedy = -150;
    }
    startFly() { 
        if (this.timer) { 
            return false;
        }
        this.timer=setInterval(() => {
            this.swing++;
            if (this.swing == 4) {
                this.swing = 1;
            }
            birdDom.className = "bird swing" + this.swing;
        }, 200);
    
    }
    stopFly() { 
        clearInterval(this.timer);
        this.timer = null;
    }

}

// const bird1 = new Bird(100,50);
// setInterval(() => {
//     bird1.move(16 / 1000);
    
    
// }, 16);
// bird1.startFly();

class Game { 
    constructor() { 
        this.time = 16;
        this.duration = 16 / 1000;
        this.timer = null;
        this.sky1 = new Sky();
        this.land1 = new Land();
        this.bird1 = new Bird(100, 50);
        this.pipe = new Producer();
        this.stop = false;
    }
    move() { 
        if (this.timer) { 
            return false;
        }
        if (this.stop) { 
            window.location.reload();
        }
        this.pipe.startProduce();
        this.timer = setInterval(() => { 
            this.sky1.move(this.duration);
            this.land1.move(this.duration);
            this.bird1.move(this.duration);          
            this.pipe.pipeArr.forEach((pipe) => {
                pipe.move(this.duration);
            });
            if (this.isOver()) { 
                this.stopMove();
                this.stop = true;
            }

        },this.time)
    }
    stopMove() { 
        clearInterval(this.timer);
        this.timer = null;
       
        this.bird1.stopFly();
        this.pipe.stopProduce();
    }
    testCrash(th1,th2) { 
        const center1x = th1.left + th1.width / 2;
        const center1y = th1.top + th1.height / 2;
        const center2x = th2.left + th2.width / 2;
        const center2y = th2.top + th2.height / 2;
        if (
            (Math.abs(center1y - center2y) <= th1.height / 2 + th2.height / 2 )&&
            (Math.abs(center1x - center2x) <= th1.width / 2 + th2.width / 2)
        ) {
            return true;
        }
        return false;
    }
    isOver() { 
        if (this.bird1.top === this.bird1.maxHeight) {
            console.log("游戏结束！");
            return true;
        }
        // console.log("是");
        for (let i = 0; i < this.pipe.pipeArr.length;i++) { 
            const pipeGro = this.pipe.pipeArr[i];
            if (
                this.testCrash(this.bird1, pipeGro.pipeT) ||
                this.testCrash(this.bird1, pipeGro.pipeB)
            ) {
                console.log("游戏结束！");
                return true;
            }
        }
        return false;
    }

    controlByKey() { 
        window.onkeydown = (e) => { 
            if (e.key == "Enter") {
                // console.log(this.timer);
                if (this.timer) {
                    this.stopMove();
                } else {
                    this.move();
                }
            } else if (e.key == " ") { 
                this.bird1.upFly();
            }
        }
    }
}
const gameStart = new Game();
gameStart.controlByKey();
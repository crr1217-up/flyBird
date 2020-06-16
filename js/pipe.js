const pipeDom = document.getElementsByClassName("pipe")[0];
const gameWidth = document.getElementsByClassName("game")[0].clientWidth;

class Pipe extends Rectangle {
	constructor(height, left, top,dom) {
		super(52, height, left, top, -100, 0, dom);
    }
    onmove() { 
        if (this.left<=-this.width) { 
            this.dom.remove();
        }
    }
    
}
function range(min,max) { 
    return Math.floor(Math.random() * (max - min) + min);
}
class Pipes { 
    constructor() { 
        this.spaceH = 150;
        this.minHeight = 80;
        this.maxHeight = gameHeight - this.minHeight - this.spaceH - landHeight;
        
        const upHeight = range(this.minHeight, this.maxHeight);
        const downHeight = gameHeight - upHeight - this.spaceH - landHeight;
        
        const pipeUp = document.createElement("div");
        pipeUp.className = "pipe pipeUp";
        const pipeDown = document.createElement("div");
        pipeDown.className = "pipe pipeDown";

        this.upTop = landTop - upHeight;
        this.left = gameWidth;
        
        this.pipeT = new Pipe(upHeight, this.left, this.upTop, pipeUp);
        this.pipeB = new Pipe(downHeight, this.left, 0, pipeDown);
        pipeDom.appendChild(pipeUp);
        pipeDom.appendChild(pipeDown);
    }
    move(duration) { 
        this.pipeT.move(duration);
        this.pipeB.move(duration);
    }
    useless() { 
        return this.pipeT.left<=-gameWidth;
    }
    
}

class Producer { 
    constructor() { 
        this.timer = null;
        this.pipeArr = [];
    }
    startProduce() {
        if (this.timer) { 
            return false;
        }
        this.timer = setInterval(() => {
            this.pipeArr.push(new Pipes());
            for (let i = 0; i < this.pipeArr.length; i++) {
                const pipe = this.pipeArr[i];
                if (pipe.useless()) {
                    this.pipeArr.splice(i, 1);
                }
            }
        }, 1500);
    }
    stopProduce() { 
        clearInterval(this.timer);
        this.timer = null;
    }
}

const skyDom = document.getElementsByClassName("sky")[0];
const skyStyles = window.getComputedStyle(skyDom);
const skyWidth = parseFloat(skyStyles.width);
const skyHeight = parseFloat(skyStyles.height);

class Sky extends Rectangle { 
    constructor() { 
        super(skyWidth, skyHeight,0,0,-50,0,skyDom); 
    }

    onmove() { 
        if (this.left <= -skyWidth / 2) {
            this.left = 0;
        }
    }
}
// const sky1 = new Sky();
// setInterval(() => {
//     sky1.move(16/1000);
// }, 16);
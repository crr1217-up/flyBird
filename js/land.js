const landDom = document.getElementsByClassName("land")[0];
const landStyles = window.getComputedStyle(landDom);
const landWidth = parseFloat(landStyles.width);
const landHeight = parseFloat(landStyles.height);
const landTop = parseFloat(landStyles.top);

class Land extends Rectangle { 
    constructor() { 
        super(landWidth, landHeight, 0, landTop, -100, 0, landDom);
    }
    onmove() { 
         if (this.left <= -landWidth / 2) {
            this.left = 0;
        }
    }
}
// const land1 = new Land();
// setInterval(() => {
//     land1.move(16/1000);
// }, 16);
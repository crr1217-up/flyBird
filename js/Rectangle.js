/**
 * 矩形宽高，横纵坐标，横向纵向速度，dom对象
*/
class Rectangle { 
    constructor(width,height,left,top,speedx,speedy,dom) { 
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.speedx = speedx;
        this.speedy = speedy;
        this.dom = dom;
        this.render();
    }
    move(duration) { 
        
        this.left += this.speedx * duration;
        this.top += this.speedy * duration;
        if (this.onmove) {
            this.onmove();
        }
        this.render();
    }
    render() { 
        this.dom.style.width = this.width + "px";
        this.dom.style.height = this.height + "px";
        this.dom.style.left = this.left + "px";
        this.dom.style.top = this.top + "px";
        
    }

}
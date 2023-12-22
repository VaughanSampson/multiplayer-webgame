class Position { 

    constructor(x, y) {
        this.set(x, y);
    } 

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    add(x, y) {
        this.x += x;
        this.y += y;
    }

    set(x, y) {
        this.x = x;
        this.y = y;
    }
    
}
function Size(width = 80, heigth = 60) {
    this.width = width;
    this.heigth = heigth;
}
Size.prototype.resize = function(newWidth, newHeigth) {
    this.width = newWidth;
    this.heigth = newHeigth;
}

function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}
Position.prototype.resize = function(newX, newY) {
    this.x = newX;
    this.x = newY;
}

class ProgramWindow {
    constructor(size = new Size(), position = new Position()) {
        this.screenSize = new Size(800, 600);
        this.size = size;
        this.position = position;
    }
    resize(newSize) {
        if (newSize.width <= 1) {
            newSize.width = 1
        }
        if (newSize.heigth <= 1) {
            newSize.heigth = 1
        }
        if (newSize.width + this.position.x > this.screenSize.width) {
            newSize.width = this.screenSize.width
        }
        if (newSize.heigth + this.position.y > this.screenSize.heigth) {
            newSize.heigth = this.screenSize.heigth
        }
        this.size = newSize
    }
    move(newPosition) {
        if (newPosition.x < 0) {
            newPosition.x = 0
        }
        if (newPosition.y < 0) {
            newPosition.y = 0
        }
        if (newPosition.x + this.size.width > this.screenSize.width) {
            newPosition.x = this.screenSize.width - this.size.width
        }
        if (newPosition.y + this.size.heigth > this.screenSize.heigth) {
            newPosition.y = this.screenSize.heigth - this.size.heigth
        }
        this.position = newPosition
    }
}


function changeWindow(programWindow) {
    programWindow.position = new Position(100, 150)
    programWindow.size = new Size(400, 300)
    return programWindow
}


ventana = new ProgramWindow()
ventana.resize(new Size(801, 801))
console.log(ventana)
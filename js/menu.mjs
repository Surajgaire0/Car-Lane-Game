function Menu(canvas, sprite) {
    this.width = 143;
    this.height = 50;
    this.x = 230;
    this.y = 200;
    this.canvas = canvas;
    this.sprite = sprite;

    this.isButtonClicked = (e) => {
        if (this.x < e.offsetX && this.x + this.width > e.offsetX &&
            this.y < e.offsetY && this.y + this.height > e.offsetY) {
            return true;
        };
        return false;
    };

    this.draw = (ctx) => {
        ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);

        ctx.font = "25px Verdana";

        ctx.fillStyle = 'green';
        ctx.fillText("Instructions", 230, 450);

        ctx.fillStyle = 'blue';
        ctx.fillText("Use A and D key to move the car", 60, 500);
    }
}

export default Menu;
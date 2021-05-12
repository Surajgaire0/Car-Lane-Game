function Lane(canvas, sprite) {
    this.x = 0;
    this.y = -canvas.height;
    this.dy = 2;
    this.canvas = canvas;
    this.sprite = sprite;

    this.update = () => {
        this.y = (this.y + this.dy);
        if (this.y >= 0) {
            this.y = -this.canvas.height;
        }
    }

    this.draw = (ctx) => {
        ctx.drawImage(sprite, this.x, this.y, this.canvas.width, this.canvas.height * 2);
    };
}

export default Lane;
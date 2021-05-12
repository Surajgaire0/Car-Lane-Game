function Lane(canvas, sprite) {
    this.x = 0;
    this.y = -canvas.height / 2;
    this.dy = 5;
    this.canvas = canvas;
    this.sprite = sprite;

    this.update = () => {
        this.y = (this.y + this.dy);
        if (this.y >= 0) {
            this.y = -this.canvas.height / 2;
        }
    }

    this.draw = (ctx) => {
        ctx.drawImage(sprite, this.x, this.y, this.canvas.width, this.canvas.height * 1.5);
    };
}

export default Lane;
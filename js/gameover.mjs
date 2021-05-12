function Gameover(canvas, sprite) {
    this.width = 385;
    this.height = 320;
    this.x = 100;
    this.y = 100;
    this.canvas = canvas;
    this.sprite = sprite;

    this.isButtonClicked = (e) => {
        if (this.x + 127 < e.offsetX && this.x + 250 > e.offsetX &&
            this.y + 280 < e.offsetY && this.y + 330 > e.offsetY) {
            return true;
        };
        return false;
    }

    this.draw = (ctx, score = 0, high = 0) => {
        ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);

        ctx.font = "25px Verdana";

        ctx.fillStyle = 'red';
        ctx.fillText(score, 400, 250);
        ctx.fillText(high, 400, 314);
    }
}

export default Gameover;
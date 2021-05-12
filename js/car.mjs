function Car(laneNum, y_pos, canvas, sprite, is_enemy = true) {
    this.laneNum = laneNum;
    this.y = y_pos;
    this.canvas = canvas;
    this.sprite = sprite;
    this.is_enemy = is_enemy;
    this.x = (this.laneNum - 1) * this.canvas.width / 3 + this.canvas.width / 9;
    this.dy = 2;
    this.width = 75;
    this.height = 125;
    this.crosses = true;

    this.setX = () => {
        this.x = (this.laneNum - 1) * this.canvas.width / 3 + this.canvas.width / 9;
    }

    this.moveRight = () => {
        if (this.laneNum < 3) {
            this.laneNum++;
            this.setX();
        }
    }

    this.moveLeft = () => {
        if (this.laneNum > 1) {
            this.laneNum--;
            this.setX();
        }
    }

    this.update = () => {
        this.y = this.y + this.dy;
        this.dy = this.dy + 0.05;
    }

    this.draw = ctx => {
        ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
}

export default Car;
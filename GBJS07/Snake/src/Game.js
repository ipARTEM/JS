
class Game {
    constructor() {
        this.tickIdentifier = null;
        this.messageEI = document.getElementById("message");
    }

    init(settings, status, board, snake, menu, food, score) {
        this.settings = settings;
        this.status = status;
        this.board = board;
        this.snake = snake;
        this.menu = menu;
        this.food = food;
        this.score = score;
    }

    run() {

        this.score.setToWin(this.settings.winLength);

        let game = this;
        let newStartFn = this.start.bind(game);

        this.menu.addButtonsClickListeners(newStartFn, this.pause.bind(this));

        document.addEventListener("keydown", this.pressKeyHandler.bind(this));
    }

    start() {
        console.log("start");

        if (this.status.isPaused()) {
            this.status.setPlaying();
            this.tickIdentifier = setInterval(this.doTick.bind(this), 1000 / this.settings.speed);

        }
    }

    pause() {
        console.log("pause");

        if (this.status.isPlaying()) {
            this.status.setPaused();
            clearInterval(this.tickIdentifier);
        }

    }

    doTick() {
        this.snake.performStep();

        this.score.setCurrent(this.snake.body.length);

        //if (this.isGameLost()) {          //метод устарел
        //    return;
        //}

        if (this.isSnakeStepperOntoItself()) {
            return;
        }

        if (this.isGameWon()) {
            return;
        }

        if (this.board.isHeadOnFood()) {
            this.snake.increaseBody();
            this.food.setNewFood();
        }

        this.board.clearBoard();
        this.food.setFood();
        this.board.renderSnake();
    }

    //метод проверка на выигрыш
    isGameWon() {
        if (this.snake.body.length == this.settings.winLength) {
            clearInterval(this.tickIdentifier);
            this.setMessage("You have won!!!");
            return true;
        }
        return false;
    }

    isSnakeStepperOntoItself() {
        let cellArr = this.snake.body.map(function (cellCoords) {
            return cellCoords.x.toString()+":" + cellCoords.y.toString();
        });
        let head = cellArr.shift();
        if (cellArr.includes(head)) {
            clearInterval(this.tickIdentifier);
            this.setMessage("You have lost!!!");
            return true;
        }
        return false;
    }

    //метод проверки проигрыша в игре
    //isGameLost() {
    //    if (this.board.isNextStepToWall(this.snake.body[0])) {
    //        clearInterval(this.tickIdentifier);
    //        this.setMessage("You have lost!!!");
    //        return true;
    //    }
    //    return false;
    //}

    pressKeyHandler(event) {
        switch (event.key) {
            case "ArrowUp":
                this.snake.changeDirection("up");
                break;

            case "ArrowDown":
                this.snake.changeDirection("down");
                break;

            case "ArrowLeft":
                this.snake.changeDirection("left");
                break;

            case "ArrowRight":
                this.snake.changeDirection("right");
                break;
        }
    }

    setMessage(text) {
        this.messageEI.innerText = text;
    }
}
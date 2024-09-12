
class Board {
    constructor() {
        this.boardEl = document.getElementById("game");
    }

    init(settings, snake) {
        this.settings = settings;
        this.snake = snake;
    }

    // метод отрисовывает игровое поле
    renderBoard() {
        this.boardEl.innerHTML = "";
        for (let row = 0; row < this.settings.rowsCount; row++) {

            let tr = document.createElement("tr");
            this.boardEl.appendChild(tr);

            for (let col = 0; col < this.settings.colsCount; col++) {

                let td = document.createElement("td");
                tr.appendChild(td);

            }
        }
    }

    //метод отрисовывает змейку
    renderSnake() {
        const snakeBodyElems = this.getSnakeBodyElems(this.snake.body);

        if (snakeBodyElems) {
            snakeBodyElems.forEach(function (tdEl) {
                tdEl.classList.add("snakeBody");
            })
        }
    }

    //метод отчисти игрового пол€
    clearBoard() {
        const tdElems = document.querySelectorAll("td");
        tdElems.forEach(function (td) {
            td.className = "";
        })
    }

    //получаем €чейку таблицы
    getCellEl(x, y) {
        return this.boardEl.querySelector(`tr:nth-child(${y}) td:nth-child(${x})`);
    }

    //получаем набор тегов td, представл€ющих тело змейки
    getSnakeBodyElems(bodyCoords) {
        if (bodyCoords.length > 0) {
            let bodyElems = [];
            for (let value of bodyCoords) {
                let elem = this.getCellEl(value.x, value.y);
                bodyElems.push(elem);
            }
            return bodyElems;
        }
        return null;
    }

    //проверка €вл€етс€ ли следующий шаг, шаг в стену
    isNextStepToWall(nextCellCoords) {
        let nextCell = this.getCellEl(nextCellCoords.x, nextCellCoords.y);
        return nextCell === null;
    }

    //метод рисует еду на игровом поле
    renderFood(coords) {
        const foodCell = this.getCellEl(coords.x, coords.y);
        foodCell.classList.add("food");
    }

    //метод провер€ет съела ли змейка еду
    isHeadOnFood() {
        return this.boardEl.querySelector(".food").classList.contains("snakeBody");
    }
}
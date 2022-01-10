
let renderer = {

    //Метод рисует игровое поле и игрока на игровом поле
    renderBoard() {
        let result = this.generateBoard();
        document.body.insertAdjacentHTML("afterbegin", result);
        this.renderUserPosition(player);
    },

    // Метод генерирует игровое поле на основании размеров в конфиге
    generateBoard() {
        let board = "";
        for (let y = 0; y < config.rowsCount; y++) {
            board += "<tr>";
            for (let x = 0; x < config.colsCount; x++) {
                board +=`<td data-x="${x}" data-y="${y}"></td>`;
            }
            board += "</tr>";

        }
        return `<table><tbody>${board}</tbody></table>`;
    }

    
};
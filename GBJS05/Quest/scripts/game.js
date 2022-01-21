renderer.renderBoard();

//Обрабатываем события нажатия на клавишу
window.addEventListener("keydown", function (event) {
    mover.makeStep(event);
});
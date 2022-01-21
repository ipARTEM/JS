
let player = {
    x: 0,
    y: 0,

    // ћетод задает новое расположение пользовател€
    changePosition(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    },
};
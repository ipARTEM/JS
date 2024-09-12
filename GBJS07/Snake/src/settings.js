
class Settings {
    /*
     @param{Object} params - параметры игры
     @param{number} params.rowCount - количество строк игрового пол€
     @param{number} params.colsCount - количество колонок игрового пол€
     @param{number} params.speed - скорость перемещени€ змейки
     @param{number} params.winLength - длина дл€ выигрыша
     @throws{Error} ошибка
     */

    init(params) {
        let defaultParams = { rowsCount: 21, colsCount: 21, speed: 2, winLength: 50 };

        Object.assign(defaultParams, params);

        if (defaultParams.rowsCount < 10 || defaultParams.rowsCount > 30) {
            throw new Error("Ќеверные настройки, значение rowsCount должно быть в диапазоне от 10 до 30")
        }
        this.rowsCount = defaultParams.rowsCount;     // копирование с заменой начина€ с конечного параметра {speed: 2, winLength: 50}

        if (defaultParams.colsCount < 10 || defaultParams.colsCount > 30) {
            throw new Error("Ќеверные настройки, значение colsCount должно быть в диапазоне от 10 до 30")
        }
        this.colsCount = defaultParams.colsCount;

        if (defaultParams.speed < 1 || defaultParams.speed > 10) {
            throw new Error("Ќеверные настройки, значение speed должно быть в диапазоне от 1 до 10")
        }
        this.speed = defaultParams.speed;

        if (defaultParams.winLength < 5 || defaultParams.winLength > 150) {
            throw new Error("Ќеверные настройки, значение colsCount должно быть в диапазоне от 5 до 50")
        }
        this.winLength = defaultParams.winLength;

    }

}

class Settings {
    /*
     @param{Object} params - ��������� ����
     @param{number} params.rowCount - ���������� ����� �������� ����
     @param{number} params.colsCount - ���������� ������� �������� ����
     @param{number} params.speed - �������� ����������� ������
     @param{number} params.winLength - ����� ��� ��������
     @throws{Error} ������
     */

    init(params) {
        let defaultParams = { rowsCount: 21, colsCount: 21, speed: 2, winLength: 50 };

        Object.assign(defaultParams, params);

        if (defaultParams.rowsCount < 10 || defaultParams.rowsCount > 30) {
            throw new Error("�������� ���������, �������� rowsCount ������ ���� � ��������� �� 10 �� 30")
        }
        this.rowsCount = defaultParams.rowsCount;     // ����������� � ������� ������� � ��������� ��������� {speed: 2, winLength: 50}

        if (defaultParams.colsCount < 10 || defaultParams.colsCount > 30) {
            throw new Error("�������� ���������, �������� colsCount ������ ���� � ��������� �� 10 �� 30")
        }
        this.colsCount = defaultParams.colsCount;

        if (defaultParams.speed < 1 || defaultParams.speed > 10) {
            throw new Error("�������� ���������, �������� speed ������ ���� � ��������� �� 1 �� 10")
        }
        this.speed = defaultParams.speed;

        if (defaultParams.winLength < 5 || defaultParams.winLength > 150) {
            throw new Error("�������� ���������, �������� colsCount ������ ���� � ��������� �� 5 �� 50")
        }
        this.winLength = defaultParams.winLength;

    }

}
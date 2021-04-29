/* eslint-disable */
import { Presenter } from '../presenter/presenter';
jest.mock('../presenter/presenter');
const testOptions1 = {
    containerClass: '.container',
    minValue: 500,
    maxValue: 1000,
    range: true,
    isVertical: false,
    fromVal: 600,
    toVal: 800,
    sliderStep: 1,
    units: 'F',
    showValues: true,
    handlerWidth: 14,
    sliderParams: {
        height: 300,
        width:  300
    },
    sliderCoordinates: {
        left: 0,
        top: 0
    }
}

describe('Тестирование Presenter', function () {
    it('Создание экземпляра класса Presenter', () => {
        const presenter = new Presenter(testOptions1);
        expect(presenter).toBeDefined();
    });
});
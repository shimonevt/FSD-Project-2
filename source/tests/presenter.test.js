/* eslint-disable */
import $ from 'jquery';
import { Panel } from '../panel/panel';
import { Presenter } from '../presenter/presenter';
jest.mock('../panel/panel')
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
const container = document.createElement('div');
container.classList.add('container')
$('body').append(container);
const presenter = new Presenter(testOptions1);
const panel = new Panel(testOptions1);
presenter.panel = panel;
describe('Тестирование Presenter', function () {
    it('Создание экземпляра класса Presenter', () => {
        expect(presenter).toBeDefined();
    });
});
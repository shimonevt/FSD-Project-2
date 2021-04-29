/* eslint-disable */
import { test } from 'mocha';
import {view,viewBody,viewBar, viewHandlers, viewScale,handlerValues} from './test-import';
const renderData1 = {
    coordinates : ['vertical', 'bottom: ', 'height: '],
    barPosition: 10,
    barSize: 20,
    isRange: true,
    rangeTo: 100,
    rangeFrom: 20,
    showValues: false,
    values: [''],
    valuesPosition: [],
    maxValue: 1000,
    minValue: 0
}
const renderData2 = {
    coordinates : ['horizontal', 'left: ', 'width: '],
    barPosition: 10,
    barSize: 20,
    isRange: true,
    rangeTo: 100,
    rangeFrom: 20,
    showValues: false,
    values: [''],
    valuesPosition: [],
    maxValue: 1000,
    minValue: 0
}
describe('Тестирование View', function () {
    it('Создается экземпляр класса View', () => {
        expect(view).toBeDefined();
    });
   
});
describe('Тестирование функций View',()=>{
    it('Проверка работы updateParameters',()=>{
        expect(view.updateParameters()).not.toBeNull();
    })
    it('Проверка работы renderView(вертикальный случай)',()=>{
        view.getChanges(renderData1);
        expect(view.slider.classList.contains('vertical')).toBe(true);
    })
    it('Проверка работы renderView(горизонтальный случай)',()=>{
        view.getChanges(renderData2);
        expect(view.slider.classList.contains('vertical')).not.toBe(true);
    })
})
describe('Тестирование subView',()=>{
    it('',()=>{
        expect(viewBody).toBeDefined();
    })
    it('',()=>{
        expect(viewBar).toBeDefined();
    })
    it('',()=>{
        expect(viewHandlers).toBeDefined();
    })
    it('',()=>{
        expect(viewScale).toBeDefined();
    })
    it('',()=>{
        expect(handlerValues).toBeDefined();
    })
})
describe('Проверка работы ViewBar',function () {
    const coordinates = ['','']
     it('Создание обьекта класса ViewBar',()=>{
    })
    it('Проверка функции viewBar.update()',()=>{
    //update(coordinates:string[], barPosition:number, barSize:number) //вызов самой функции и затем проверка css или style-свойств
    })
})
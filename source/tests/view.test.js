/* eslint-disable */
import { test } from 'mocha';
import {view,viewBody,viewBar, viewHandlers, viewScale,handlerValues, renderData1, renderData2} from './test-import';
import {handler} from '../view/viewHandlers';

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
describe('Тестирование клика',()=>{
        let clickOnSlider = new MouseEvent('click',{
            clientX:100,
            clientY: 0
        });
        viewBody.sliderBody.dispatchEvent(clickOnSlider);
        expect(viewBody.checkClickTarget(clickOnSlider.target)).toBe(true);    
})
describe('Проверка работы drap-n-drop',()=>{
        const { rangeFrom } = viewHandlers;
        const mouseDownOnHandler = new MouseEvent('mousedown',{
            clientX:100,
            clientY: 0
        })
        const MouseMoveWithHandler = new MouseEvent('mousemove',{
            clientX: 101,
            clientY: 0
        })
        const mouseUpOnHandler = new MouseEvent('mouseup');
        rangeFrom.dispatchEvent(mouseDownOnHandler);
        document.dispatchEvent(MouseMoveWithHandler);
        document.dispatchEvent(mouseUpOnHandler);        
})
viewBody.renderViewComponents(renderData1);
describe('Проверка работы ViewScale при различных ширинах',()=>{
    const {coordinates, maxValue, minValue} = renderData1;
        viewScale.update(coordinates, maxValue, minValue);
    it('Проверка работы ViewScale.changeScaleDisplay при ширине 160px',()=>{
        viewScale.changeScaleDisplay(160);
        expect(viewScale.units[1].classList.contains('hidden')).toBe(true);    
    })
    it('Проверка работы ViewScale.changeScaleDisplay при ширине 200px',()=>{
        viewScale.changeScaleDisplay(200);
        expect(viewScale.units[3].classList.contains('hidden')).toBe(false);    
    })
    it('Проверка работы ViewScale.changeScaleDisplay при ширине 300px',()=>{
        viewScale.changeScaleDisplay(300);
        expect(viewScale.units[2].classList.contains('hidden')).toBe(false);    
    })
    it('Проверка работы ViewScale.changeScaleDisplay при ширине 500px',()=>{
        viewScale.changeScaleDisplay(500);
        expect(viewScale.units[0].classList.contains('hidden')).toBe(false);    
    }) 
})
describe('Проверка работы ViewValues',()=>{
    const {fromVal, toVal}= handlerValues;
    it('Создается экземпляр класса ViewValues',()=>{
        expect(handlerValues).toBeDefined();
    })
    it('Проверка работы showValues',()=>{
        handlerValues.showValues(renderData1.showValues,renderData1.isRange);
        expect(fromVal.classList.contains('hidden')).toBe(true);
        handlerValues.showValues(true,true);
        expect(fromVal.classList.contains('hidden')).toBe(false);
        handlerValues.showValues(true,false);
        expect(toVal.classList.contains('hidden')).toBe(false);
    })
})
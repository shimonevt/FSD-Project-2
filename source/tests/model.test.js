/* eslint-disable */

import {Model} from '../model/model'
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
const testOptions2 = {
    containerClass: '.container',
    minValue: 500,
    maxValue: 1000,
    range: false,
    isVertical: false,
    fromVal: 600,
    toVal: 1100,
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
const model1 = new Model(testOptions1)
const model2 = new Model(testOptions2)
/* Unit tests */
describe('Создание экземпляра Model',()=>{
    expect(model1).toBeDefined();
})
describe('Тестирование функций Model',()=>{
    it('Model1.calcCurrentPosition',()=>{
        expect(model1.calcCurrentPosition({left:60,top:0})).toBe(20);
    })
    it('Model1.calcCurrentValue',()=>{
        expect(model1.calcCurrentValue(20)).toBe(600);
    })
    it('Model1.calcBarSize',() =>{
        expect(model1.calcBarSize(20)).toBe(25);
        expect(model1.calcBarSize(0)).toBe(0);
        expect(model2.calcBarSize(1000)).toBe(100);
    })
    it('Model.calcBarPosition',()=>{
        expect(model1.calcBarPosition(400,500,1000)).toBe(0);
    })
})



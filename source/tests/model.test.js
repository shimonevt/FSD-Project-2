/* eslint-disable */

import {Model} from "../model/model"
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
const testOptions2= {
    containerClass: '.container',
    minValue: 1000,
    maxValue: 5000,
    range: false,
    isVertical: true,
    fromVal: 600,
    toVal: 800,
    sliderStep: 1,
    units: 'A',
    showValues: true,
    handlerWidth: 14,
    sliderParams: {
        height: 320,
        width:  320
    },
    sliderCoordinates: {
        left: 0,
        top: 50
    }
}
const model1 = new Model(testOptions1)
const model2 = new Model(testOptions2)

/* Unit tests */

describe('Тестирование функций model1: Model',()=>{
    test('Model1.calcCurrentPosition',()=>{
        expect(model1.calcCurrentPosition({left:60,top:0})).toBe(20)
    })
    test('Model1.calcCurrentValue',()=>{
        expect(model1.calcCurrentValue(20)).toBe(600)
    })
    test('Model1.calcBarSize',() =>{
        expect(model1.calcBarSize(20)).toBe(25)
    })
    
})
describe('Тестирование функций model2: Model',()=>{
    test('Model2.calcCurrentPosition',()=>{
        expect(model2.calcCurrentPosition({left:0,top:100})).toBe(85)
    })
    test('Model2.calcCurrentValue',()=>{
        expect(model2.calcCurrentValue(30)).toBe(2200)
    })
    test('Model2.calcBarSize',() =>{
        expect(model2.calcBarSize(40)).toBe(0)
    })
})


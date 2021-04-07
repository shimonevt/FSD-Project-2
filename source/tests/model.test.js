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
    minValue: 5000,
    maxValue: 1000,
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
describe('Testing model1',()=>{
    test('Model1.calcCurrentPosition',()=>{
        expect(model1.calcCurrentPosition({left:60,top:0})).toBe(16)
        
    })
    
})
describe('Testing model2',()=>{
    test('Model2.calcCurrentPosition',()=>{
        expect(model2.calcCurrentPosition({left:0,top:100})).toBe(85)
    })
})


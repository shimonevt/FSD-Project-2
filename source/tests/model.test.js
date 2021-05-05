/* eslint-disable */

import {Model} from '../model/model';
import {handler} from '../view/viewHandlers';
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
    minValue: 800,
    maxValue: 1000,
    range: false,
    isVertical: false,
    fromVal: 660,
    toVal: 650,
    sliderStep: 1,
    units: '',
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
const testOptions3 = {
    containerClass: '.container',
    minValue: 800,
    maxValue: 1000,
    range: false,
    isVertical: false,
    fromVal: 650,
    toVal: 650,
    sliderStep: 1,
    units: '',
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
const model1 = new Model(testOptions1);
const model2 = new Model(testOptions2);
const model3 = new Model(testOptions3);
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
    })
    it('Model.calcBarPosition',()=>{
        expect(model1.calcBarPosition(400,500,1000)).toBe(0);
    })
    it('Model.getViewParameters',()=>{
        const { sliderParams, sliderCoordinates, handlerWidth} = testOptions1;
        model1.getViewParameters(sliderParams,sliderCoordinates,handlerWidth)
        expect(model1.state.handlerWidth).not.toBeNull();
    
    })
    it('Model.clickTreatment',()=>{
        model1.clickTreatment({top: 0,left: 10});
        expect(model1.state.fromVal).toBe(600); 
    })
    it('Model.dragNDropTreatment',()=>{
        model2.dragNDropTreatment({top:0, left:305, info : handler.rangeTo});
        expect(model2.state.fromVal).toBe(660);
    })
    it('model.getData',()=>{
        model1.getData(testOptions2);
        expect(model1.state.range).toBe(false);
    }) 
    it('model1.loadInitData',()=>{
        model1.loadInitData(testOptions2);
        expect(model1.state.range).toBe(false);
    })   
    it('model.sendStyleForRender',()=>{
        model2.sendStylesForRender(testOptions2);
        expect(model2.state.fromVal).toBe(660);
    })    
})



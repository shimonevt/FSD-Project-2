/* eslint-disable */
import $ from 'jquery';
import { Model } from '../model/model';
import { Panel } from '../panel/panel';
import { Presenter } from '../presenter/presenter';
import { View } from '../view/view';
const container1 = $('<div class="container"></div>');
$('body').append(container1);

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
    containerClass: '.container-2',
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
const view = new View(testOptions1.containerClass);
const {viewBody} = view;
const { sliderBody, viewBar, viewHandlers, handlerValues, viewScale } = viewBody;
export { view, viewBody, sliderBody, viewBar, viewHandlers, viewScale, handlerValues, renderData1, renderData2};
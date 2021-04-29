/* eslint-disable */
import $ from 'jquery';
import { Model } from '../model/model';
import { Panel } from '../panel/panel';
import { Presenter } from '../presenter/presenter';
import { View } from '../view/view';
const container = $('<div class="container"></div>');
$('body').append(container);

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

const view = new View(testOptions1.containerClass);
const {viewBody} = view;
const { sliderBody, viewBar, viewHandlers, handlerValues, viewScale } = viewBody;
export {view, viewBody, sliderBody, viewBar, viewHandlers, viewScale, handlerValues};
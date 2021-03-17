import '../view/view.scss'
import $ from 'jquery'
import {Slider} from '../slider/slider'
$(document).ready(function(){
    let container =  new Slider({
        rangeClass: '.container',
        minValue: 0,
        maxValue: 500,
        range : true,
        isVertical: false,
        fromVal: 50,
        toVal : 400,
        sliderStep: 1,
        units: '$',
        showValues: true
    });
    let cont2 = new Slider({
        rangeClass: '.container-2',
        range : false,
        minValue: 50,
        maxValue : 600,
        toVal: 100
    });
})
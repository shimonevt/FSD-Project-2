import './index.scss'
import $ from 'jquery'
import '../slider/slider'
$(document).ready(function(){
    $('.container').rangeSlider({
        containerClass: '.container',
        minValue: 0,
        maxValue: 500,
        range : true,
        isVertical: false,
        fromVal: 50,
        toVal : 400,
        sliderStep: 1,
        units: '$',
        showValues: false
    })
    $('.container-2').rangeSlider({
        containerClass: '.container-2',
        minValue: 0,
        maxValue: 600,
        range : false,
        isVertical: false,
        fromVal: 50,
        toVal : 400,
        sliderStep: 1,
        units : 'F',
        showValues: false
    });
        
    $('.container-3').rangeSlider({
        containerClass: '.container-3',
        minValue: 0,
        maxValue: 500,
        range : true,
        isVertical: true,
        fromVal: 50,
        toVal : 400,
        sliderStep: 1,
        units: '$',
        showValues: false
    });
})
import './index.scss'
import $ from 'jquery'
import '../slider/slider'
$(document).ready(function(){
    $('.container').rangeSlider({})
    $('.container-2').rangeSlider({
        minValue: 0,
        maxValue: 600,
        isRange : false,
        isVertical: false,
        fromVal: 50,
        toVal : 400,
        sliderStep: 1,
        units : 'F',
        showValues: false
    });
        
    $('.container-3').rangeSlider({
        minValue: 0,
        maxValue: 1000,
        isVertical: true,
        fromVal: 50,
        toVal : 400,
        sliderStep: 1,
        units: '$',
        showValues: false
    });
})
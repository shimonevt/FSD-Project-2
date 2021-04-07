import $ from 'jquery'
import { ISliderOptions, sliderOptionsDefault } from '../options/options'
import {Presenter} from '../presenter/presenter'
interface jQuery {
    rangeSlider (options:ISliderOptions): JQuery
}
(function($){
    $.fn.extend({
        rangeSlider: function (options:ISliderOptions=sliderOptionsDefault) {
            const initOptions:ISliderOptions = {}
            options.containerClass = `.${this[0].classList.value}`
            for(const key in options,sliderOptionsDefault){
                if(options[key] === undefined){
                   initOptions[key] = sliderOptionsDefault[key]
                }else {
                    initOptions[key] = options[key]
                }
            }
            const presenter = new Presenter(initOptions)     
        }
    })
   
})(jQuery);
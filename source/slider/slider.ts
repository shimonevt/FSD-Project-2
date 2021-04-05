import $ from 'jquery'
import { ISliderCoordinates, ISliderOptions, sliderOptionsDefault } from '../options/options'
import {Presenter} from '../presenter/presenter'
interface jQuery {
    rangeSlider (options:ISliderOptions): JQuery
}
(function($){
    $.fn.extend({
        rangeSlider: function (options:ISliderOptions=sliderOptionsDefault) {
            const presenter = new Presenter(options)     
        }
    })
   
})(jQuery);
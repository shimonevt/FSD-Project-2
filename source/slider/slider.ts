import $ from 'jquery'
import { ISliderOptions, sliderOptionsDefault} from '../options/options'
import { Model } from '../model/model'
import {View}from '../view/view'
import '../presenter/presenter'
/*interface JQuery {
    rangeSlider: JQuery;
}
(($: JQuerySupport) => {
    $.fn.rangeSlider = function(options: ISliderOptions) {
        const view = new View(options)
        const model = new Model()
        return new rangeSlider(view,model)
    };
})(jQuery);
*/
export class Slider {
    private view: View
    private model: Model
    private options : ISliderOptions 
    constructor(options:ISliderOptions = sliderOptionsDefault){
        this.options = options
        this.model = new Model(options)
        this.view = new View(options)
    } 
}
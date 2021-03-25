import $ from 'jquery'
import { ISliderCoordinates, ISliderOptions } from '../options/options'
import {Presenter} from '../presenter/presenter'
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
    private presenter : Presenter 
    constructor(options : ISliderOptions){
        this.presenter = new Presenter(options)
    } 
}
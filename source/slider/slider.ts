import {View} from '../view/view'
import {sliderOptions, sliderOptionsDefault} from 'source/model/model'
export class Slider {
    private options : sliderOptions = sliderOptionsDefault
    constructor(options:sliderOptions){
        this.options = options
    } 
}
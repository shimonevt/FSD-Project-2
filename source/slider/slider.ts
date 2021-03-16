import {sliderOptions, sliderOptionsDefault} from '../model/model'
import { Model } from '../model/model'
import {View}from '../view/view'
import '../presenter/presenter'
export class Slider {
    private model: Model
    private view: View
    private options : sliderOptions 
    constructor(options:sliderOptions = sliderOptionsDefault){
        this.options = options
        this.model = new Model(options)
        this.view = new View(options)
    } 
}
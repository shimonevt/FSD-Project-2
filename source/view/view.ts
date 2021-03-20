import $ from 'jquery'
import {sliderOptions, sliderOptionsDefault} from '../options/options'
import {addEventListeners, sliderInit}from '../presenter/presenter'
import { ViewBody } from './viewBar/viewBar'
import { getElement,createElementSlider } from '../functions/functions'

    export class View  {
        private options:sliderOptions
        private container : Element
        private slider : Element
        private viewBody : ViewBody
        constructor(options:sliderOptions = sliderOptionsDefault){
            this.options = options 
            this.container = getElement(this.options.rangeClass)
            if (options.isVertical) {
                this.slider = createElementSlider('range-slider','vertical')
            }else {
                this.slider = createElementSlider('range-slider')
            }            
            this.viewBody = new ViewBody(this.slider,this.options)
            this.slider.append(this.viewBody.getSliderBody)
            this.container.append(this.slider)
            sliderInit(this.slider,this.options)
            addEventListeners(this.slider,this.options)
        }
    }   
    


import $ from 'jquery'
import {ISliderCoordinates, ISliderOptions} from '../options/options'
import {addEventListeners, sliderInit}from '../presenter/presenter'
import { ViewBar } from './viewBar/viewBar'
import { getElement,createElementSlider } from '../functions/functions'

    export class View  {
        private options: ISliderOptions
        private container : HTMLElement
        private slider : HTMLElement
        private viewBody : ViewBar
        private sliderCoords: ISliderCoordinates
        private data : ISliderOptions
        constructor(options: ISliderOptions){
            this.options = options
            this.container = getElement(options.rangeClass)
            this.options.isVertical == true ? this.slider = createElementSlider(['range-slider','vertical']) :this.slider = createElementSlider(['range-slider'])
            this.init();
            //sliderInit(this.slider,this.options)
            //addEventListeners(this.slider,this.options)
        }
        init() {
            this.createSlider()
            this.setOptions()
        }
        createSlider(){
            
            this.viewBody = new ViewBar(this.options)
            this.slider.append(this.viewBody.getSliderBody)
            this.container.append(this.slider)
        }   
        setOptions(){
            this.data = this.options
        }
        sendDataFromViewToPresenter() {
            return this.data
        }
        renderView(){
            
        }
    }


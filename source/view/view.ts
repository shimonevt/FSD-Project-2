import $ from 'jquery'
import {ISliderCoordinates, ISliderOptions, sliderOptionsDefault} from '../options/options'
import { ViewBar } from './viewBar/viewBar'
import { createElementSlider } from '../functions/functions'
import { IRenderValues } from '../model/model'

    export class View  {
        private options: ISliderOptions
        private container : Element
        private slider : HTMLElement
        private sliderBody : HTMLElement
        private progressBar : HTMLElement
        private maxVal: HTMLElement
        private minVal: HTMLElement
        private rangeTo : HTMLElement
        private rangeFrom : HTMLElement
        private sliderCoords: ISliderCoordinates
        constructor(options: ISliderOptions = sliderOptionsDefault){
            this.options = options
            this.container = document.querySelector(options.containerClass)
            this.slider = createElementSlider(['range-slider'])
            this.init();
            //sliderInit(this.slider,this.options)
            //addEventListeners(this.slider,this.options)
        }
        init() {
            this.createSlider()
            this.getHandlerWidth()
            this.getSliderWidth()
        }
        createSlider(){
            this.container.append(this.slider)
            this.sliderBody = createElementSlider(['slider__body'])
            this.progressBar = createElementSlider(['progress__bar'])
            this.maxVal = createElementSlider(['bar__max-value'])
            this.minVal = createElementSlider(['bar__min-value'])
            this.rangeTo = createElementSlider(['bar__range','to'])
            this.sliderBody.append(this.maxVal)
            this.sliderBody.append(this.minVal)
            this.sliderBody.append(this.progressBar) 
            this.sliderBody.append(this.rangeTo)
            this.rangeFrom = createElementSlider(['bar__range','from'])
            this.sliderBody.append(this.rangeFrom)
            this.maxVal = createElementSlider(['range__values','max-value'])
            this.sliderBody.append(this.maxVal)   
            this.minVal = createElementSlider(['range__values','min-value'])
            this.sliderBody.append(this.minVal)
            this.slider.append(this.sliderBody)
        } 
        sendDataFromViewToPresenter() {
            return this.options
        }
        getHandlerWidth(){
            this.options.handlerWidth = parseInt(getComputedStyle(this.rangeTo).width)
        }
        getSliderWidth(){
            this.options.sliderWidth = parseInt(getComputedStyle(this.slider).width)
        }
        addEventListeners(){}
        getChanges(val: IRenderValues){
            this.renderView(val)
        }
        renderView(values:IRenderValues){
            if(values.coordinates[0] == 'vertical'){ 
               this.slider.classList.add('vertical')
            }else{
               this.slider.classList.remove('vertical') 
            }
            this.progressBar.setAttribute('style',`${values.coordinates[1]}${values.barPosition}%;${values.coordinates[2]}${values.barSize}%`)
            values.isRange ? (this.rangeFrom.setAttribute('style',`${values.coordinates[1]} ${values.rangeFrom}%`),this.rangeFrom.classList.remove('hidden')):
                 (this.rangeFrom.setAttribute('style',`${values.coordinates[1]} ${values.rangeFrom}%`),this.rangeFrom.classList.add('hidden'))
            this.rangeTo.setAttribute('style',`${values.coordinates[1]} ${values.rangeTo}%`)
            values.showValues ? this.showValues(false,values.isRange) :this.showValues(true,values.isRange)
            this.maxVal.innerHTML = values.values[0],this.minVal.innerHTML = values.values[1]
            this.minVal.setAttribute('style',`${values.coordinates[1]} ${values.valuesPosition[0]}%`),
            this.maxVal.setAttribute('style',`${values.coordinates[1]} ${values.valuesPosition[1]}%`)
            
        }
        showValues(show: boolean,showBoth: boolean){
            if (show&&showBoth) {this.maxVal.classList.remove('hidden'),this.minVal.classList.remove('hidden')}
            else if(show&&showBoth==false){this.maxVal.classList.remove('hidden'),this.minVal.classList.add('hidden')}
            else  {this.maxVal.classList.remove('hidden'),this.minVal.classList.remove('hidden')}
        }
    }   
    
        
    


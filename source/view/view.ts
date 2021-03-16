import {sliderOptions, sliderOptionsDefault} from '../model/model'
import {addEventListeners}from '../presenter/presenter'
import $ from 'jquery'
    
    
    export class View  {
        private options:sliderOptions
        private slider : Element
        private sliderBody : Element
        private progressBar : Element
        private rangeFrom : Element
        private rangeTo : Element
        private container : Element
        constructor(options:sliderOptions){
            this.options = options 
            this.container = getElement(options.rangeClass);
            this.slider = createElementSlider(false,'range-slider')
            this.sliderBody = createElementSlider(true,'slider__body')
            this.progressBar = createElementSlider(true,'progress__bar')
            this.rangeTo = createElementSlider(true,'bar__range','to')
            this.sliderBody.append(this.progressBar) 
            this.sliderBody.append(this.rangeTo)
            if(options.range) {
                this.rangeFrom = createElementSlider(true,'bar__range','from')
                this.sliderBody.append(this.rangeFrom)
            }
            this.slider.append(this.sliderBody)
            this.container.append(this.slider)
            addEventListeners(this.slider,this.options)     
        }
    }    
   
    export function getElement(selector:string):Element{
        const elem = document.querySelector(selector);
        if (elem == null) {
            throw Error(`Не удалось найти ${selector}`)
        } else {
            return elem
        }
    }
    export function createElementSlider(isClickable: Boolean,...selector:[string]):HTMLElement {
        const elem = document.createElement('div')
        
        for (let i=0;i<selector.length;i++) {
            elem.classList.add(selector[i])
        }
        return elem
    }

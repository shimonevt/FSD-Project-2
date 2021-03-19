import {sliderOptions, sliderOptionsDefault} from '../model/model'
import {sliderInit}from '../presenter/presenter'
import $ from 'jquery'
    
    
    export class View  {
        private options:sliderOptions
        private slider : Element
        private sliderBody : Element
        private progressBar : Element
        private rangeFrom : Element
        private minVal: Element
        private showMinVal : Element
        private showMaxVal : Element
        private maxVal : Element
        private rangeTo : Element
        private container : Element
        constructor(options:sliderOptions = sliderOptionsDefault){
            this.options = options 
            this.container = getElement(options.rangeClass);
            this.slider = createElementSlider('range-slider')
            this.sliderBody = createElementSlider('slider__body')
            this.progressBar = createElementSlider('progress__bar')
            this.rangeTo = createElementSlider('bar__range','to')
            
            this.maxVal = createElementSlider('bar__max-value')
            setVal(this.maxVal,this.options.maxValue,options.units)
            this.minVal = createElementSlider('bar__min-value')
            setVal(this.minVal,this.options.minValue,options.units)
            this.sliderBody.append(this.maxVal)
            this.sliderBody.append(this.minVal)
            this.sliderBody.append(this.progressBar) 
            this.sliderBody.append(this.rangeTo)
            if(options.range) {
                this.rangeFrom = createElementSlider('bar__range','from')
                this.sliderBody.append(this.rangeFrom)
            }
            if (options.showValues) {
                this.showMaxVal = createElementSlider('range__values','max-value')
                this.sliderBody.append(this.showMaxVal)
                 if(options.range) {     
                     this.showMinVal = createElementSlider('range__values','min-value')
                     this.sliderBody.append(this.showMinVal)
                 }
                 
            }
            this.slider.append(this.sliderBody)
            this.container.append(this.slider)
            sliderInit(this.slider,this.options)   
        }
    }    
    export function setVal(elem:Element,text: any,units: string| undefined) {
            if (text == undefined) {
                throw Error(`Не введено значение для ${elem.classList}`)
            } else {
                if (units == undefined) {
                    elem.innerHTML = text + ''
                } else{
                    elem.innerHTML = text + `${units}`
                }
                
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
    export function createElementSlider(...selector:[string]):HTMLElement {
        const elem = document.createElement('div')
        
        for (let i=0;i<selector.length;i++) {
            elem.classList.add(selector[i])
        }
        return elem
    }

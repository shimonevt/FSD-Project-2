import {sliderOptions, sliderOptionsDefault} from '../model/model'
import * as $ from 'jquery'
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
        this.slider = createElementSlider('range-slider')
        this.sliderBody = createElementSlider('slider__body')
        this.progressBar = createElementSlider('progress__bar')
        this.rangeTo = createElementSlider('bar__range','to')
        this.rangeFrom = createElementSlider('bar__range','from')
        if(options.showValues) {

        }
       
        
        this.sliderBody.append(this.progressBar) 
        this.sliderBody.append(this.rangeTo)
        this.sliderBody.append(this.rangeFrom)
        this.slider.append(this.sliderBody)
        this.container.append(this.slider)
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

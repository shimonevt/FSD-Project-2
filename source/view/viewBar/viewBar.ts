import { ISliderOptions, sliderOptionsDefault } from "../../options/options"
import { createElementSlider, setVal } from '../../functions/functions'

export class ViewBar {
    private options: ISliderOptions
    private sliderBody : HTMLElement
    private progressBar : HTMLElement
    private maxVal: HTMLElement
    private minVal: HTMLElement
    private rangeTo : HTMLElement
    private rangeFrom : HTMLElement
    get getSliderBody() {
        return this.sliderBody
    }
    constructor(options:ISliderOptions){
        this.options = options
        this.init()
        }
        init(){
            this.createViewBar()
            this.progressBar.setAttribute('style',`${this.getWidth()}`)
            this.setInitHandlerPosition()
            this.showValues()
        }   
        createViewBar(){
            this.sliderBody = createElementSlider(['slider__body'])
            this.progressBar = createElementSlider(['progress__bar'])
            this.maxVal = createElementSlider(['bar__max-value'])
            this.maxVal.innerHTML = setVal(this.options.maxValue,this.options.units)
            this.minVal = createElementSlider(['bar__min-value'])
            this.minVal.innerHTML = setVal(this.options.minValue,this.options.units)
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
        }
        getWidth(){
            let size,direction
            this.options.isVertical == true ? (direction ='bottom:',size=`height:`) : (direction = 'left: ',size = 'width: ')
            if (this.options.range) {
               return `${size} ${100*(this.options.toVal-this.options.fromVal)/(this.options.maxValue-this.options.minValue)}%; ${direction} ${100*(this.options.fromVal/(this.options.maxValue-this.options.minValue))}%` 
            } else {
                return `${size} ${100*(this.options.toVal)/(this.options.maxValue-this.options.minValue)}%`
            }   
        }
        setInitHandlerPosition(){
            let direction
            this.options.isVertical == true ? (direction ='bottom:') : (direction = 'left: ')
            this.rangeTo.setAttribute('style',`${direction} ${100*(this.options.toVal/(this.options.maxValue-this.options.minValue))}%`)
            if (this.options.range) {    
               this.rangeFrom.setAttribute('style',`${direction} ${100*(this.options.fromVal/(this.options.maxValue-this.options.minValue))}%`) 
            } else {
                this.rangeFrom.classList.add('hidden')
            }
        }
        showValues(){
            if(!this.options.showValues) {
                this.maxVal.classList.add('hidden')
                this.minVal.classList.add('hidden')
            }else {
                if(!this.options.range) {
                    this.minVal.classList.add('hidden')
                }
            }
        }
}
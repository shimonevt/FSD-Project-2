import { sliderOptions, sliderOptionsDefault } from "../../options/options"
import { createElementSlider, setVal } from '../../functions/functions'

export class ViewBody {
    private options: sliderOptions
    private sliderBody : Element
    private progressBar : Element
    private maxVal: Element
    private minVal: Element
    private rangeTo : Element
    private rangeFrom? : Element
    get getSliderBody() {
        return this.sliderBody
    }
    constructor(slider:Element,options:sliderOptions){
        this.options = options
        this.sliderBody = createElementSlider('slider__body')
        this.progressBar = createElementSlider('progress__bar')
        this.maxVal = createElementSlider('bar__max-value')
        setVal(this.maxVal,options.maxValue,options.units)
        this.minVal = createElementSlider('bar__min-value')
        setVal(this.minVal,options.minValue,options.units)
        this.rangeTo = createElementSlider('bar__range','to')
        this.sliderBody.append(this.maxVal)
        this.sliderBody.append(this.minVal)
        this.sliderBody.append(this.progressBar) 
        this.sliderBody.append(this.rangeTo)
            if(options.range) {
                this.rangeFrom = createElementSlider('bar__range','from')
                this.sliderBody.append(this.rangeFrom)
            }
            if (options.showValues) {
                this.maxVal = createElementSlider('range__values','max-value')
                this.sliderBody.append(this.maxVal)
                 if(options.range) {     
                     this.minVal = createElementSlider('range__values','min-value')
                     this.sliderBody.append(this.minVal)
                 }
                 
            }
        }   
}
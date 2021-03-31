import { EventEmitter } from "../eventEmitter/eventEmitter";
import { ISliderOptions } from "../options/options";

export class Panel extends EventEmitter{
    options: ISliderOptions
    container: HTMLElement
    header: HTMLElement
    panel : HTMLElement
    listeners: Array<Element>
    constructor(options: ISliderOptions){
        super()
        this.listeners = []
        this.options = options
        this.container = document.querySelector(this.options.containerClass)!
        this.header = this.container.parentElement!.querySelector('p.range-name')!
        this.container = document.querySelector(options.containerClass)!
         $(this.header).text(this.options.containerClass)
        this.panel = this.container.parentElement!.querySelector('.panel-container')!
         this.init()        
    }
    getData(options: ISliderOptions) {
        this.options = options
    }
    init(){
         this.setValues()
         this.addPanelListeners()
         this.subscribe('values-ready-for-panel',(data:ISliderOptions)=>{this.getData(data)})
    }
    setValues(){
        let maxValue,minValue,toValue,fromValue,sliderStep,units
        this.createPanelElement(maxValue,'input.max-value',this.options.maxValue)
        this.createPanelElement(minValue,'input.min-value',this.options.minValue)
        this.createPanelElement(toValue,'input.to-val',this.options.toVal)
        this.createPanelElement(fromValue,'input.from-val',this.options.fromVal)
        this.createPanelElement(sliderStep,'input.slider-step',this.options.sliderStep)
        this.createPanelElement(units,'input.units',this.options.units)
        const isVertical = this.panel.querySelector('div.vertical > input')!
        this.checkInputs(isVertical,this.options.isVertical)
        const range = this.panel.querySelector('div.range > input')!
        this.checkInputs(range,this.options.range)
        const showValues = this.panel.querySelector('div.show-values > input')!
        this.checkInputs(showValues,this.options.showValues)
    }
    checkInputs(elem:Element,isTrue:boolean){
        isTrue  ? elem.checked = true : elem.checked = false
        this.listeners.push(elem)
    }
    createPanelElement(elem:Element,selector: string, val: number| string){
        elem = this.panel.querySelector(selector)!
        elem.value = val.toString()
        this.listeners.push(elem)
    }
    addPanelListeners(){
        this.listeners.forEach(element => {
            element.addEventListener('change',(event)=>this.handleChanges(event,element))
        });
    }
    handleChanges(ev:Event,el:Element){
        if(el.classList.contains('is-checkbox')){
            if (el.id==`vertical-${this.options.containerClass}`){
                el.checked=true? this.options.isVertical =true : this.options.isVertical= false
            }else if(el.id==`range-${this.options.containerClass}`){
                el.checked=true? this.options.range =true : this.options.range=false
            }else if(el.id==`show-values-${this.options.containerClass}`){
                el.checked=true? this.options.showValues =true : this.options.showValues = false
            }
        }else{}
        this.emit('panel-changed',this.options)
    }
    
}
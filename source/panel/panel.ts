import { EventEmitter } from "../eventEmitter/eventEmitter";
import { ISliderOptions } from "../options/options";

class Panel extends EventEmitter{
    options: ISliderOptions
    container: HTMLElement
    header: HTMLElement
    panel : HTMLElement
    listeners: Array<Element>
    constructor(options: ISliderOptions){
        super()
        this.listeners = []
        this.options = options
        this.container = document.querySelector(this.options.containerClass!)!
        this.header = this.container.parentElement!.querySelector('p.range-name')!
        this.container = document.querySelector(options.containerClass!)!
        this.header.innerHTML = this.options.containerClass!
        this.panel = this.container.parentElement!.querySelector('.panel-container')!
        this.init()        
    }
    getData(options: ISliderOptions):void {
        this.options = options
        this.updatePanel()
    }
    init():void{
         this.setValues()
         this.addPanelListeners()
         this.subscribe('send-values-for-panel',(data:ISliderOptions)=>{this.getData(data)})
    }
    setValues():void{
        let maxValue,minValue,toValue,fromValue,sliderStep,units
        this.createPanelElement(maxValue,'input.max-value',this.options.maxValue!)
        this.createPanelElement(minValue,'input.min-value',this.options.minValue!)
        this.createPanelElement(toValue,'input.to-val',this.options.toVal!)
        this.createPanelElement(fromValue,'input.from-val',this.options.fromVal!)
        this.createPanelElement(sliderStep,'input.slider-step',this.options.sliderStep!)
        this.createPanelElement(units,'input.units',this.options.units!)
        const isVertical = this.panel.querySelector('div.vertical > input')
        this.checkInputs(isVertical,this.options.isVertical)
        const isRange = this.panel.querySelector('div.range > input')
        this.checkInputs(isRange,this.options.isRange)
        const showValues = this.panel.querySelector('div.show-values > input')
        this.checkInputs(showValues,this.options.showValues)
    }
    checkInputs(elem:Element|null,isTrue:boolean):void{
        if (elem!=null){
           isTrue  ? elem.checked = true : elem.checked = false
            this.listeners.push(elem) 
        }else {
            throw Error(`${elem} is null!`)
        }
        
    }
    createPanelElement(elem:Element,selector: string, val: number| string):void{
        elem = this.panel.querySelector(selector)
        elem.value = val.toString()
        this.listeners.push(elem)
    }
    addPanelListeners():void{
        this.listeners.forEach(element => {
            element.addEventListener('change',(event)=>this.handleChanges(event,element))
        });
    }
    updatePanel():void{
        for (let i =0;i<this.listeners.length;i++){
            if(this.listeners[i].classList.contains('max-value')){
                this.listeners[i].value = this.options.maxValue
            }else if(this.listeners[i].classList.contains('min-value')) {
                this.listeners[i].value = this.options.minValue
            }else if(this.listeners[i].classList.contains('to-val')){
                this.listeners[i].value = this.options.toVal
            }else if(this.listeners[i].classList.contains('from-val')){
                this.listeners[i].value = this.options.fromVal 
            }else if(this.listeners[i].classList.contains('slider-step')){
                this.listeners[i].value = this.options.sliderStep 
            }else if(this.listeners[i].classList.contains('units')){
                this.listeners[i].value = this.options.units
            }
        }
    }
    handleChanges(ev:Event,el:HTMLElement):void{
        if(el.classList.contains('is-checkbox')){
            if (el.name=='vertical'){
                el.checked? this.options.isVertical = true : this.options.isVertical = false
            }else if(el.name=='range'){
                el.checked? this.options.isRange = true : this.options.isRange = false
            }else if(el.name=='show-values'){
                el.checked? this.options.showValues = true : this.options.showValues = false
            }
        }else{
            if (el.classList.contains('max-value')){
                this.options.maxValue = parseInt(el.value)
            }else if(el.classList.contains('min-value')) {
                this.options.minValue = parseInt(el.value)
            }else if(el.classList.contains('to-val')){
                this.options.toVal = parseInt(el.value)
            }else if(el.classList.contains('from-val')){
                this.options.fromVal = parseInt(el.value)
            }else if(el.classList.contains('slider-step')){
                this.options.sliderStep = parseInt(el.value)
            }else if(el.classList.contains('units')){
                this.options.units = el.value
            }
        }
        this.emit('panel-changed',this.options)
    }
}
export {Panel}
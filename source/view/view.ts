import $, { event } from 'jquery'
import {ISliderCoordinates, ISliderOptions, sliderOptionsDefault} from '../options/options'
import { ViewBar } from './viewBar/viewBar'
import { createElementSlider } from '../functions/functions'
import { IRenderValues } from '../model/model'
import  {Presenter} from '../presenter/presenter'
import { EventEmitter } from '../eventEmitter/eventEmitter'
    export class View extends EventEmitter   {
        private options: ISliderOptions
        private container : Element
        private slider : HTMLElement
        private sliderBody : HTMLElement
        private progressBar : HTMLElement
        private maxVal: HTMLElement
        private minVal: HTMLElement
        private rangeTo : HTMLElement
        private rangeFrom : HTMLElement
        constructor(options: ISliderOptions = sliderOptionsDefault){
            super()
            this.options = options
            this.container = document.querySelector(options.containerClass)!
            this.slider = createElementSlider(['range-slider'])
            this.init();
        }
        init() {
            this.createSlider()
            this.getHandlerWidth()
            this.getSliderWidth()
            this.getSliderCoords()
            this.addEventListeners()
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
            this.options.sliderParams = getComputedStyle(this.slider)
        }

        getAndSendClickPosition(ev: MouseEvent):void{
            if(ev.target != this.minVal&& ev.target !=this.maxVal){
              this.emit('sliderClicked',{top: ev.clientY, left: ev.clientX})
            }
            
        }
        onMouseDown(ev:MouseEvent,view: this,whichHandle:string){
            
            function onMouseMove(event:MouseEvent) {
                view.emit('handle-dragged',{top:event.clientY,left:event.clientX,info:whichHandle})
            }
            function onMouseUp() {
                document.removeEventListener('mousemove',onMouseMove)
                document.removeEventListener('mouseup',onMouseUp)
            }
            document.addEventListener('mousemove',onMouseMove)
            document.addEventListener('mouseup',onMouseUp)
        }
        addEventListeners(){
            const thisView =  this
            this.sliderBody.addEventListener('click',(ev)=>{this.getAndSendClickPosition(ev)})
            const newLocal = this.rangeTo
            newLocal.addEventListener('mousedown',(ev)=>{this.onMouseDown(ev,thisView,'rangeTo')})
            this.rangeFrom.addEventListener('mousedown',(ev)=>{this.onMouseDown(ev,thisView,'rangeFrom')})
            
        }
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
            this.minVal.innerHTML = values.values[0],this.maxVal.innerHTML = values.values[1]
            this.minVal.setAttribute('style',`${values.coordinates[1]} ${values.valuesPosition[0]}%`),
            this.maxVal.setAttribute('style',`${values.coordinates[1]} ${values.valuesPosition[1]}%`)
        }
        showValues(show: boolean,showBoth: boolean){
            if (show&&showBoth) {this.maxVal.classList.remove('hidden'),this.minVal.classList.remove('hidden')}
            else if(show&&showBoth==false){this.maxVal.classList.remove('hidden'),this.minVal.classList.add('hidden')}
            else if (show==false) {this.maxVal.classList.add('hidden'),this.minVal.classList.add('hidden')}
        }
        getSliderCoords(){
            this.options.sliderCoordinates ={
                left: this.slider.getBoundingClientRect().left,
                top: this.slider.getBoundingClientRect().top 
            }
        }
    }   
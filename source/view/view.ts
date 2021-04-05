import $, { event } from 'jquery'
import {ISliderCoordinates, ISliderOptions, ISliderParameters, sliderOptionsDefault} from '../options/options'
import { ViewBar } from './viewBar/viewBar'
import { IRenderValues } from '../model/model'
import  {Presenter} from '../presenter/presenter'
import { EventEmitter } from '../eventEmitter/eventEmitter'
    class View extends EventEmitter   {
        private container : Element
        private slider : HTMLElement
        private sliderBody : HTMLElement
        private progressBar : HTMLElement
        private maxVal: HTMLElement
        private minVal: HTMLElement
        private rangeTo : HTMLElement
        private rangeFrom : HTMLElement
        constructor(containerClass:string){
            super()
            this.container = document.querySelector(containerClass)!
            this.slider = this.createElementSlider(['range-slider'])
            this.init();
        }
        init() {
            this.createSlider()
    
            this.getSliderCoords()
            this.addEventListeners()
        }
        createSlider(){
            this.container.append(this.slider)
            this.sliderBody = this.createElementSlider(['slider__body'])
            this.progressBar = this.createElementSlider(['progress__bar'])
            this.maxVal = this.createElementSlider(['bar__max-value'])
            this.minVal = this.createElementSlider(['bar__min-value'])
            this.rangeTo = this.createElementSlider(['bar__range','to'])
            this.sliderBody.append(this.maxVal)
            this.sliderBody.append(this.minVal)
            this.sliderBody.append(this.progressBar) 
            this.sliderBody.append(this.rangeTo)
            this.rangeFrom = this.createElementSlider(['bar__range','from'])
            this.sliderBody.append(this.rangeFrom)
            this.maxVal = this.createElementSlider(['range__values','max-value'])
            this.sliderBody.append(this.maxVal)   
            this.minVal = this.createElementSlider(['range__values','min-value'])
            this.sliderBody.append(this.minVal)
            this.slider.append(this.sliderBody)
        } 
        getHandlerWidth(){
             return parseInt(getComputedStyle(this.rangeTo).width)
        }
        getSliderParams():ISliderParameters{
            return {
                height: parseInt(getComputedStyle(this.slider).height) - this.getHandlerWidth(),
                width: parseInt(getComputedStyle(this.slider).width) - this.getHandlerWidth()
            }
        }
        updateParameters(){            
            return {
                sliderParameters:  this.getSliderParams(),
                sliderCoordinates: this.getSliderCoords(),
                handlerWidth: this.getHandlerWidth()
            }
        }
        getAndSendClickPosition(ev: MouseEvent):void{
            this.updateParameters()
            if(this.checkClickTarget(ev.target!)){
              this.emit('slider-clicked',{top: ev.clientY, left: ev.clientX})
            }
        }
        checkClickTarget(target:EventTarget){
            return target != this.minVal&& target !=this.maxVal
        }
        onMouseDown(ev:MouseEvent,thisView: this,whichHandle:string){
            this.updateParameters()
            function onMouseMove(event:MouseEvent) {
                thisView.emit('handle-dragged',{top:event.clientY,left:event.clientX,info:whichHandle})
            }
            function onMouseUp() {
                document.removeEventListener('mousemove',onMouseMove)
                document.removeEventListener('mouseup',onMouseUp)
            }
            document.addEventListener('mousemove',onMouseMove)
            document.addEventListener('mouseup',onMouseUp)
            ev.target?.addEventListener('dragstart',()=>{
                return false
            })
        }
        addEventListeners(){
            const thisView =  this
            this.sliderBody.addEventListener('click',(ev)=>{this.getAndSendClickPosition(ev)})
            this.rangeTo.addEventListener('mousedown',(ev)=>{this.onMouseDown(ev,thisView,'rangeTo')})
            this.rangeFrom.addEventListener('mousedown',(ev)=>{this.onMouseDown(ev,thisView,'rangeFrom')})
            window.addEventListener('resize',()=>this.emit('window-resize',thisView.updateParameters()))
            window.addEventListener('scroll',()=>this.emit('scroll',thisView.updateParameters()))
        }
        getChanges(val: IRenderValues){
            this.renderView(val)
        }
        renderView({coordinates, barPosition, barSize, isRange, rangeTo, rangeFrom,
                    showValues, values, valuesPosition}:IRenderValues){
            if(coordinates[0] == 'vertical'){ 
               this.slider.classList.add('vertical')
            }else{
               this.slider.classList.remove('vertical') 
            }
            this.progressBar.setAttribute('style',`${coordinates[1]}${barPosition}%;${coordinates[2]}${barSize}%`)
            isRange ? (this.rangeFrom.setAttribute('style',`${coordinates[1]} ${rangeFrom}%`),this.rangeFrom.classList.remove('hidden')):
                 (this.rangeFrom.setAttribute('style',`${coordinates[1]} ${rangeFrom}%`),this.rangeFrom.classList.add('hidden'))
            this.rangeTo.setAttribute('style',`${coordinates[1]} ${rangeTo}%`)
            showValues ? this.showValues(true,isRange) :this.showValues(false,isRange)
            this.minVal.innerHTML = values[0],this.maxVal.innerHTML = values[1]
            this.minVal.setAttribute('style',`${coordinates[1]} ${valuesPosition[0]-1}%`),
            this.maxVal.setAttribute('style',`${coordinates[1]} ${valuesPosition[1]-1}%`)
        }
        showValues(show: boolean,showBoth: boolean){
            if (show==true &&showBoth== true) {this.maxVal.classList.remove('hidden'),this.minVal.classList.remove('hidden')}
            else if(show == true&&showBoth==false){this.maxVal.classList.remove('hidden'),this.minVal.classList.add('hidden')}
            else if (show==false) {this.maxVal.classList.add('hidden'),this.minVal.classList.add('hidden')}
        }
        getSliderCoords():ISliderCoordinates{
            return {
                left: this.slider.getBoundingClientRect().left,
                top: this.slider.getBoundingClientRect().top
            }
        }
        createElementSlider(selectors:Array<string>){
            const elem = document.createElement('div')
            for (let i=0;i<selectors.length;i++) {
                elem.classList.add(selectors[i])
            }
            return elem
        }
    }   
export {View}
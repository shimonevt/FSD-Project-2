import { type } from "jquery"
import { Model } from "../model/model"
import { ISliderOptions } from "../options/options"
import { View } from "../view/view"

export class Presenter {
    view : View
    model : Model 
    constructor(options:ISliderOptions) {
        this.view = new View(options)
        this.model = new Model()
        this.init()
    }
    init(){
        let initOptions = this.view.sendDataFromViewToPresenter()
        this.model.getDataFromPresenterforModel(initOptions)
        this.view.getChanges(this.model.sendChanges())
        this.view.addEventListeners((event)=>{return this.model.clickTreatment(event)},(event,whichHandler)=>{return this.model.dragNDropTreatment(event,whichHandler)})
    }
}
/*export function  sliderInit(slider: Element,options:sliderOptions) {
    let sliderBody = slider.children[0]
    let sliderBar = sliderBody.children[2]
    let rangeTo = sliderBody.children[3]
    let direction,width
    options.isVertical == true ? (direction ='bottom:',width=`height:`) : (direction = 'left: ',width = 'width: ')
    rangeTo.setAttribute('style',`${direction}`+calcInitPosition(options.toVal,options.maxValue))
    if (options.range) {
        var rangeFrom = sliderBody.children[4]
        rangeFrom.setAttribute('style',`${direction}` + calcInitPosition(options.fromVal,options.maxValue))
        let deltaValue = options.toVal - options.fromVal
        sliderBar.setAttribute('style',`${width}`+calcInitPosition(deltaValue,options.maxValue)+`;${direction}`+calcInitPosition(options.fromVal,options.maxValue))
        if (options.showValues == true) {
            let rangeMaxValue = sliderBody.children[5]
            rangeMaxValue.setAttribute('style',`${direction}`+ calcInitPosition(options.toVal,options.maxValue))
            rangeMaxValue.textContent = setVal(options.toVal,options.units)
            let rangeMinValue = sliderBody.children[6]
            rangeMinValue.setAttribute('style',`${direction}` + calcInitPosition(options.fromVal,options.maxValue))
            rangeMinValue.textContent = setVal(options.fromVal,options.units)  
        }
    } else {
        sliderBar.setAttribute('style',`${width}`+ calcInitPosition(options.toVal,options.maxValue))
        if (options.showValues == true) {
            let rangeMaxValue = sliderBody.children[4]
            rangeMaxValue.setAttribute('style',`${direction}`+calcInitPosition(options.toVal,options.maxValue))
            rangeMaxValue.textContent = setVal(options.toVal,options.units)
        }
    }
}
export function addEventListeners(slider:Element,options:sliderOptions) {
    sliderClick(slider,options)
    initDragNDrop(slider,options) // стоит унифицировать для всех ползунков
}
export function initDragNDrop(slider:Element,options:sliderOptions) {
    let sliderBody = slider.children[0]
    let rangeTo = sliderBody.children[3]
    addDragNDrop(slider,rangeTo,options.isVertical!,options.showValues!,options.range!,options.units!)
    if(options.range) {
        let rangeFrom = sliderBody.children[4]
        addDragNDrop(slider,rangeFrom,options.isVertical!,options.showValues!,options.range!,options.units!)
    }
}    
export function addDragNDrop(slider: Element,rangeHandle: Element,isVertical: boolean,showValues: boolean,range: boolean,units: string) {
        rangeHandle.addEventListener('mousedown',(ev)=>{
            let sliderBar = slider.children[0].children[2]
            let sliderParams = getComputedStyle(slider)
            let handlerParams = getComputedStyle(rangeHandle)
            let direction:string,size:string
            isVertical == true ? (direction ='bottom: ',size='height:') : (direction = 'left: ',size = 'width: ')
            ev.preventDefault()
            if (range) {
                if ($(rangeHandle).hasClass('to')) {
                   var AnotherRangeHandle = slider.children[0].children[4]
                }else {
                    var AnotherRangeHandle = slider.children[0].children[3]
                }                
                if (isVertical) {
                    var progressBarBorder = parseFloat(AnotherRangeHandle.style.bottom)
                } else {
                    var progressBarBorder = parseFloat(AnotherRangeHandle.style.left)
                }
                console.log(progressBarBorder)
            }
            if (showValues) {
                    var rangeValue = slider.children[0].children[5]
            }
            let shiftX = parseInt(handlerParams.width)/2
            let shiftY = parseInt(handlerParams.height)/2
            document.addEventListener('mousemove',onMouseMove)
            document.addEventListener('mouseup',onMouseUp)
            function onMouseMove(event:MouseEvent) {
                if(isVertical) {
                    var newPosition = 100*(slider.getBoundingClientRect().bottom- event.clientY - shiftY) / parseFloat(sliderParams.height)
                } else {
                    var newPosition = 100*(event.clientX - shiftX - slider.getBoundingClientRect().left) / parseFloat(sliderParams.width)
                }
                   let minEdge = calcBorder(sliderParams,handlerParams,isVertical,true)
                   let maxEdge = calcBorder(sliderParams,handlerParams,isVertical,false)
                   if (newPosition <= minEdge) {
                        newPosition = minEdge
                    }else if (newPosition >= maxEdge) {
                        newPosition = maxEdge
                    }              
                if(range) {   
                    rangeHandle.setAttribute('style',`${direction} ${newPosition}%`)
                    if (Math.abs(newPosition) >= Math.abs(progressBarBorder)) {
                        sliderBar.setAttribute('style',`${size} ${Math.abs(newPosition-progressBarBorder)}%; ${direction} ${progressBarBorder}%`)
                    }else{
                        sliderBar.setAttribute('style',`${size} ${Math.abs(newPosition-progressBarBorder)}%; ${direction} ${newPosition}%`)
                    }
                    if(showValues) {
                        rangeValue.setAttribute('style',`${direction} ${newPosition}%`)
                        if (isVertical) {
                            calcValue(rangeValue,newPosition,sliderParams.height,units)
                        }else {
                            calcValue(rangeValue,newPosition,sliderParams.width,units)
                        }
                    }
                }else {
                    rangeHandle.setAttribute('style',`${direction} ${newPosition}%`)
                    sliderBar.setAttribute('style',`${size} ${Math.abs(newPosition)}%`)
                }
            }         
            function onMouseUp(event:MouseEvent) {
                document.removeEventListener('mouseup', onMouseUp)
                document.removeEventListener('mousemove', onMouseMove)
            }
        });
        rangeHandle.addEventListener('dragstart', function() {
            return false;
        });
    }



export function sliderClick(slider: Element,options: sliderOptions) {
    let sliderBody = slider.children[0]

    sliderBody.addEventListener('click',function(event) {
        if (event.target == sliderBody.children[0]) {//max
            
        }else if(event.target == sliderBody.children[1]) {//min
        } else if (event.target == sliderBody||event.target == sliderBody.children[2]) {
            HandlingClickOnSliderBody(event,slider,options)           
        
        }
    })
}*/


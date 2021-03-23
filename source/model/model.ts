import { calcValue } from "../functions/functions"
import { ISliderOptions, sliderOptionsDefault } from "../options/options"

export class Model {
    private options: ISliderOptions
    constructor(options:ISliderOptions = sliderOptionsDefault) {
        this.options = options
        
    }
}
export function calcBorder(sliderParams:CSSStyleDeclaration,handlerParams:CSSStyleDeclaration,isVertical:boolean,isMin:boolean) {
    if(isVertical) {
        if(isMin){
            return 0
        }else {
            return 100*(parseFloat(sliderParams.height)-parseFloat(sliderParams.border)-parseFloat(handlerParams.height))/parseFloat(sliderParams.height)
        }
    }else {
        if(isMin){
            return 0
        }else {
            return 100*(parseFloat(sliderParams.width)-parseFloat(sliderParams.border)-parseFloat(handlerParams.width))/parseFloat(sliderParams.width)
        }
    }
}

export function calcClickPosition(ev:Event,slider:Element,isVertical:boolean,range:boolean) {
    let handlerParams = getComputedStyle(slider.children[0].children[3])
    if(isVertical){    
        let clickPosition = Math.abs(ev.clientY - slider.getBoundingClientRect().bottom  + parseFloat(handlerParams.height)/2) //number
        return 100*clickPosition/parseFloat(getComputedStyle(slider).height)
    } else {
        let clickPosition = Math.abs(ev.clientX - slider.getBoundingClientRect().left - parseFloat(handlerParams.width)/2) // number
        return 100*clickPosition/parseFloat(getComputedStyle(slider).width)
    }
}

export function HandlingClickOnSliderBody(event:Event,slider:Element,options:sliderOptions) {
        let sliderParams = getComputedStyle(slider)
        var clickPosition = calcClickPosition(event,slider,options.isVertical!,options.range!)
        let rangeTo = slider.children[0].children[3]
        let sliderBar = slider.children[0].children[2]
        let handlerParams = getComputedStyle(rangeTo)
        let direction:string,size:string
        options.isVertical == true ? (direction ='bottom: ',size='height:') : (direction = 'left: ',size = 'width: ')
        if(options.range) {
            var rangeFrom = slider.children[0].children[4]
            if (options.isVertical) {
                var rangeToPosition = parseFloat(rangeTo.style.bottom)
                var rangeFromPosition = parseFloat(rangeFrom.style.bottom)
            }else {
                var rangeToPosition = parseFloat(rangeTo.style.left)
                var rangeFromPosition = parseFloat(rangeFrom.style.left)           
            }
            if ( Math.abs(clickPosition - rangeToPosition) > Math.abs(clickPosition - rangeFromPosition)) {
                let minEdge = calcBorder(sliderParams,handlerParams,options.isVertical!,true)
                let maxEdge = calcBorder(sliderParams,handlerParams,options.isVertical!,false)
                console.log(minEdge)
                if( clickPosition <= minEdge){
                    clickPosition = minEdge 
                }else if(clickPosition >=maxEdge){
                    clickPosition = maxEdge
                }       
                rangeFrom.setAttribute('style',`${direction} ${clickPosition}%`)
                sliderBar.setAttribute('style',`${size} ${Math.abs(rangeToPosition - clickPosition)}%;${direction} ${clickPosition}%`)
                if (options.showValues){
                    let rangeMinValue = slider.children[0].children[6]
                    rangeMinValue.setAttribute('style',`${direction} ${clickPosition}%`)
                    if (options.isVertical) {
                        calcValue(rangeMinValue,clickPosition,sliderParams.height,options.units)
                    } else {
                        calcValue(rangeMinValue,clickPosition,sliderParams.width,options.units)
                    }
                }   
            }else if ( Math.abs(clickPosition - rangeToPosition) == Math.abs(clickPosition - rangeFromPosition)){
            }else {  
                let minEdge = calcBorder(sliderParams,handlerParams,options.isVertical!,true)
                let maxEdge = calcBorder(sliderParams,handlerParams,options.isVertical!,false)
                if( clickPosition <= minEdge){
                    clickPosition = minEdge 
                }else if(clickPosition >= maxEdge){
                    clickPosition = maxEdge
                }  
                rangeTo.setAttribute('style',`${direction} ${clickPosition}%`)
                sliderBar.setAttribute('style',`${size} ${Math.abs(clickPosition- rangeFromPosition)}%;${direction} ${rangeFromPosition}%`)
                if (options.showValues){
                    let rangeMaxValue = slider.children[0].children[5]
                    rangeMaxValue.setAttribute('style',`${direction} ${clickPosition}%`)
                    if (options.isVertical) {
                        calcValue(rangeMaxValue,clickPosition,sliderParams.height,options.units)
                    } else {
                        calcValue(rangeMaxValue,clickPosition,sliderParams.width,options.units)
                    }
                }
            }
        }else {
            let minEdge = calcBorder(sliderParams,handlerParams,options.isVertical!,true)
            let maxEdge = calcBorder(sliderParams,handlerParams,options.isVertical!,false)
            if (clickPosition <= minEdge) {
                 clickPosition = minEdge
            }else if (clickPosition >= maxEdge) {
                 clickPosition = maxEdge
            }              
            rangeTo.setAttribute('style', `${direction}  ${clickPosition}%`);
            sliderBar.setAttribute('style',`${size} ${clickPosition}%`)
        }
}
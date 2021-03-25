import { calcBorder, calcValue} from "../functions/functions"
import { ISliderCoordinates, ISliderOptions, sliderOptionsDefault } from "../options/options"

//какие состояния будут
    const states = {
        inital: 'init',
        click : 'click',
        drag: 'drag',
        changeValues : 'changes'
    }
    interface IStateInit {
        type: 'initial'
        data: ISliderOptions
    }
    interface IStateClick {
        type: 'clicked'
        data: ISliderOptions
    }
    interface IStore {
        storage: ISliderOptions
        getState: () =>ISliderOptions
    }
    export interface IRenderValues {
        coordinates : string[]
        barPosition: number
        barSize: number
        isRange: boolean
        rangeTo: number
        rangeFrom: number
        showValues: boolean
        values: string[]
        valuesPosition: number[]
    }
type State = IStateInit | IStateClick
export class Model {
    state: ISliderOptions
    renderValues: IRenderValues
    getDataFromPresenterforModel(options:ISliderOptions){
        this.storeData(options)
        this.renderValues =this.controlStates(this.loadInitData(options))
        //здесь уже по методам посчитать и передать css- свойства 
        //также здесь надо хранить значения
    }
    storeData(options: ISliderOptions) {
        this.state = options
    }
    calcValues(options:ISliderOptions){

    }
    controlStates(state:State){
        switch (state.type) {
            case 'initial':
                return this.sendStylesForRender(state.data) // здесь нужно вернуть обьект, определенным образом обработанный
            case 'clicked':

                break
        }
    }
    loadInitData(options:ISliderOptions):State{
        return {type: 'initial', data: options}
    }
    sendStylesForRender(currentData:ISliderOptions):IRenderValues {
        return  {
            coordinates: currentData.isVertical ? (['vertical','bottom: ','height: ']) : (['horizontal','left: ','width: ']),
            barPosition: currentData.range ?  100*(currentData.fromVal + (currentData.handlerWidth/2))/(currentData.maxValue-currentData.minValue): 0,
            barSize: (calcBorder(currentData.fromVal,currentData.toVal,currentData.maxValue - currentData.minValue,currentData.range,currentData.handlerWidth)),
            isRange: currentData.range,
            rangeTo:    100*(currentData.toVal)/(currentData.maxValue-currentData.minValue),
            rangeFrom: 100*(currentData.fromVal)/(currentData.maxValue-currentData.minValue),
            showValues: currentData.showValues,
            values: [this.setVal(currentData.fromVal,currentData.units),this.setVal(currentData.toVal,currentData.units)],
            valuesPosition: [this.setValPosition(currentData.fromVal,currentData.maxValue-currentData.minValue,currentData.handlerWidth,currentData.sliderWidth),
                            this.setValPosition(currentData.toVal,currentData.maxValue-currentData.minValue,currentData.handlerWidth,currentData.sliderWidth)]

        } 
    }
    sendChanges(){
        return this.renderValues
    }
    setVal(text: number,units: string): string  {
        if (units != undefined && text != undefined) {
            return (`${text}${units}`)
        }else if(text!= undefined){
            return text.toString()
        }              
    }
    setValPosition(val:number,minMax:number,handlerWidth:number,sliderWidth: number): number{
           return Math.ceil(100*((val/minMax)-(handlerWidth/sliderWidth)))         
    }
}

/*
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
*/
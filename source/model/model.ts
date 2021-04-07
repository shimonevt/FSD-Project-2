import { EventEmitter } from "../eventEmitter/eventEmitter"
import { ISliderCoordinates, ISliderOptions, ISliderParameters} from "../options/options"
import {checkUndefined} from '../functions/functions'
    export interface IRenderValues {
        coordinates : string[],
        barPosition: number,
        barSize: number,
        isRange: boolean,
        rangeTo: number,
        rangeFrom: number,
        showValues: boolean,
        values: string[],
        valuesPosition: number[]
    }
    class Model extends EventEmitter {
        state: ISliderOptions
        constructor(options:ISliderOptions){
            super()
            this.state = options
        }
        getDataFromPresenterforModel(data:{sliderParameters: ISliderParameters,
                                        sliderCoordinates: ISliderCoordinates,handlerWidth: number}):void{
            this.setData(data)
        }
        setData(data:{sliderParameters: ISliderParameters,
            sliderCoordinates: ISliderCoordinates,handlerWidth: number}):void {
            this.state.sliderParams = data.sliderParameters,
            this.state.sliderCoordinates = data.sliderCoordinates,
            this.state.handlerWidth = data.handlerWidth
            this.getData(this.state)
        }
        changeData(options:ISliderOptions,data:{sliderParameters: ISliderParameters,sliderCoordinates: ISliderCoordinates,
            handlerWidth: number}):void{
            this.state = options
            this.setData(data)
        }
        getData(options:ISliderOptions):void{
            this.sendStylesForRender(options)
        }
        clickTreatment(data:{top:number,left: number}):void{
            this.sendStylesForRender(this.CalcDataClick(data))
        }
        dragNDropTreatment(data:{top:number,left:number,info:string}):void{
            this.sendStylesForRender(this.CalcDataDrag(data))
        }
        loadInitData(options:ISliderOptions):void{
            this.sendStylesForRender(options)
        }
        CalcDataDrag(data:{top:number,left:number,info:string}):ISliderOptions{
            const currentPosition = this.calcCurrentPosition(data)
            const currentValue = this.calcCurrentValue(currentPosition)
            if(data.info=='rangeTo') {
            this.state.toVal = currentValue
                if(this.state.toVal>=this.state.maxValue){
                        this.state.toVal = this.state.maxValue
                }
                if(this.state.isRange){
                    if(this.state.toVal<=this.state.fromVal){
                        this.state.toVal = this.state.fromVal
                    }
                }else {
                    if(this.state.toVal<=this.state.minValue){
                        this.state.toVal = this.state.minValue
                    }
                }                                           
                return this.state
            } else {
                this.state.fromVal = currentValue
                if(this.state.fromVal>=this.state.toVal){
                    this.state.fromVal = this.state.toVal
                }else if(this.state.fromVal<=this.state.minValue){
                    this.state.fromVal = this.state.minValue
                }
                    return this.state
            }
        }
        CalcDataClick(data:{top:number,left: number}): ISliderOptions{
            const currentPosition = this.calcCurrentPosition(data)
            const currentValue = this.calcCurrentValue(currentPosition)
            const fromValPosition = this.getHandlePosition('range-to')
            const toValPosition = this.getHandlePosition('range-from')
            if(this.state.isRange){
                 if(this.state.toVal==this.state.fromVal){
                    if (currentValue - this.state.fromVal<0){
                        this.state.fromVal = currentValue
                    }else if (currentValue - this.state.toVal>0){
                        this.state.toVal = currentValue
                    }
                }else{
                    if (Math.abs(currentPosition-fromValPosition)<=Math.abs(currentPosition-toValPosition)){
                        this.state.toVal = currentValue
                    }else if(Math.abs(currentPosition-fromValPosition)>Math.abs(currentPosition-toValPosition)){
                        this.state.fromVal =  currentValue
                    }
                }
            }else {
                this.state.toVal = currentValue
            }
            return this.state
        }
    
        sendStylesForRender({minValue, maxValue, isRange, isVertical, fromVal, toVal,
                             units, showValues, handlerWidth, sliderParams}:ISliderOptions):void {
            const obj =  {
                coordinates: isVertical ? (['vertical','bottom: ','height: ']) : (['horizontal','left: ','width: ']),
                barPosition:  this.calcBarPosition(fromVal,maxValue,minValue,isRange),
                barSize:  isVertical? this.calcBarSize(fromVal,toVal,maxValue,minValue,isRange,checkUndefined(handlerWidth),checkUndefined(sliderParams?.height)):
                                      this.calcBarSize(fromVal,toVal,maxValue,minValue,isRange,checkUndefined(handlerWidth),checkUndefined(sliderParams?.width)),
                isRange: isRange,
                rangeTo:    this.getHandlePosition('range-to'),
                rangeFrom:  this.getHandlePosition('range-from'),
                showValues: showValues,
                values: [this.setVal(fromVal,units),this.setVal(toVal,units)],
                valuesPosition: [Math.abs(this.setValPosition(fromVal,maxValue-minValue,isVertical)),
                                Math.abs(this.setValPosition(toVal,maxValue-minValue,isVertical))]
            } 
            this.emit('send-values-for-panel',this.state)
            this.emit('values-ready',obj) 
        }
        setVal(text: number|undefined,units: string|undefined): string  {
            if (text!= undefined) {
                if (units!= undefined) {
                    return (`${text} ${units}`)
                }else {
                    return text.toString()
                }
            }
                return ''              
        }
        setValPosition(val:number,minMax:number,isVertical:boolean): number{
                return (isVertical? Math.ceil(100*(val/minMax)-(2*checkUndefined(this.state.handlerWidth)/checkUndefined(this.state.sliderParams?.height))) : 
                                    Math.ceil((100*(val/minMax)-(checkUndefined(this.state.handlerWidth)/checkUndefined(this.state.sliderParams?.width)))))
        } 
        getHandlePosition(whichHandle:string):number{
            if(whichHandle == 'range-to'){
                if(this.state.isRange){
                    if(this.state.toVal<=this.state.fromVal){
                        this.state.toVal = this.state.fromVal
                    }
                }
                if(this.state.toVal>= this.state.maxValue) {
                    return (100*(this.state.maxValue-this.state.minValue)/(this.state.maxValue - this.state.minValue))
                }
                else return 100*(this.state.toVal-this.state.minValue)/(this.state.maxValue-this.state.minValue)
            }else{
                if(this.state.fromVal<=this.state.minValue)  return 0
                else return 100*(this.state.fromVal-this.state.minValue)/(this.state.maxValue-this.state.minValue)
            }
        }
        calcCurrentPosition(coords:{left: number,top:number}):number{
            let cursorPosition:number
            this.state.isVertical? cursorPosition=checkUndefined(this.state.sliderCoordinates?.top) + checkUndefined(this.state.sliderParams?.height)-coords.top :
                                    cursorPosition=coords.left - checkUndefined(this.state.sliderCoordinates?.left) - checkUndefined(this.state.handlerWidth)
            return this.state.isVertical?Math.ceil(100*cursorPosition/checkUndefined(this.state.sliderParams?.height)) :
                                         Math.ceil(100*cursorPosition/checkUndefined(this.state.sliderParams?.width))
        }
        calcCurrentValue(currentPosition:number):number{
            return Math.ceil(this.state.minValue + 0.01*currentPosition*(this.state.maxValue-this.state.minValue))
        }

        calcBarPosition(value:number,maxValue:number,minValue:number,range:boolean):number{
            let barPosition = range ? Math.ceil(100*(-minValue + value)/(maxValue - minValue)): Number(0)
            if (barPosition<=0) barPosition = 0
            return barPosition
        }
        calcBarSize(fromVal:number,toVal:number,minValue:number,maxValue:number,isRange: boolean,width:number,size:number):number {
            let barSize = isRange ? Math.abs((100*(toVal - fromVal)/(minValue-maxValue))) : 
                                Math.abs(100*(toVal/(minValue-maxValue)+(width/2)/(size)))
            if(barSize>=100){
                barSize = 100
            }
            return barSize    
        }
    }
    export {Model}
module.exports = {Model}
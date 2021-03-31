import { data } from "jquery"
import { EventEmitter } from "../eventEmitter/eventEmitter"
import { calcBorder, calcValue} from "../functions/functions"
import { ISliderCoordinates, ISliderOptions, sliderOptionsDefault } from "../options/options"
import { Panel } from "../panel/panel"

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
export class Model extends EventEmitter {
    state: ISliderOptions
    renderValues: IRenderValues
    panel: Panel
    constructor(){
        super()
    }
    getDataFromPresenterforModel(options:ISliderOptions){
        this.setData(options)
        this.renderValues =this.loadInitData(options)
        this.panel = new Panel(this.state)
        this.panel.subscribe('panel-changed',(options:ISliderOptions)=>{this.sendStylesForRender(options)})
    }
    setData(options:ISliderOptions) {
        this.state = options
    }
    getData(options:ISliderOptions){
        this.sendStylesForRender(options)
    }
    clickTreatment(data:{top:number,left: number}){
        this.sendStylesForRender(this.CalcDataClick(data))
    }
    dragNDropTreatment(data:{top:number,left:number,info:string}){
        this.sendStylesForRender(this.CalcDataDrag(data))
    }
    loadInitData(options:ISliderOptions){
        this.sendStylesForRender(options)
    }
    CalcDataDrag(data:{top:number,left:number,info:string}){
        let currentPosition = this.calcCurrentPosition(data)
        let currentValue = this.calcCurrentValue(currentPosition)
        console.log(currentPosition)
        if(data.info=='rangeTo') {
        this.state.toVal = currentValue
            if(this.state.toVal>=this.state.maxValue){
                    this.state.toVal = this.state.maxValue
            }
            if(this.state.range){
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
        //в вертикальном случае где то есть ошибка
        let currentPosition = this.calcCurrentPosition(data)
        let currentValue = this.calcCurrentValue(currentPosition)
        let fromValPosition = this.setHandlePosition('range-to')
        let toValPosition = this.setHandlePosition('range-from')
        console.log(fromValPosition)
        if(this.state.range){
             if(this.state.toVal==this.state.fromVal){
                if (currentValue - this.state.fromVal < 0){
                    this.state.fromVal = currentValue
                }else if (currentValue - this.state.toVal>0){
                    this.state.toVal = currentValue
                }
            }else{
                if (Math.abs(currentPosition-fromValPosition)<=Math.abs(currentPosition-toValPosition)){
                    console.log('err')
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

    sendStylesForRender({containerClass, minValue, maxValue, range, isVertical, fromVal, toVal,
                        sliderStep, units, showValues, handlerWidth, sliderParams, sliderCoordinates}:ISliderOptions) {
        let obj =  {
            coordinates: isVertical ? (['vertical','bottom: ','height: ']) : (['horizontal','left: ','width: ']),
            barPosition: range ?  100*(fromVal)/(maxValue-minValue): Number(0),
            barSize: (calcBorder(fromVal,toVal,maxValue - minValue,range,handlerWidth!)),
            isRange: range,
            rangeTo:    this.setHandlePosition('range-to'),
            rangeFrom:  this.setHandlePosition('range-from'),
            showValues: showValues,
            values: [this.setVal(fromVal,units),this.setVal(toVal,units)],
            valuesPosition: [Math.abs(this.setValPosition(fromVal,maxValue-minValue,isVertical)),
                            Math.abs(this.setValPosition(toVal,maxValue-minValue,isVertical))]
        } 
        this.emit('values-ready',obj)
        //this.emit('values-ready-for-panel',this) <- перенести в другое место
    }
    setVal(text: number,units: string): string  {
        if (units != undefined && text != undefined) {
            return (`${text}${units}`)
        }else if(units!= undefined){
            return text.toString()
        }              
    }
    setValPosition(val:number,minMax:number,isVertical:boolean): number{
            let valuePosition = (isVertical? Math.ceil(100*(val/minMax)-(2*this.state.handlerWidth!/parseInt(this.state.sliderParams?.height!))) : 
                                Math.ceil((100*(val/minMax)-(this.state.handlerWidth!/parseInt(this.state.sliderParams?.width!)))))
           return   valuePosition
    } 
    setHandlePosition(whichHandle:string){
        if(whichHandle == 'range-to'){
            if(this.state.toVal>= this.state.maxValue) return this.state.maxValue
            else return 100*this.state.toVal/(this.state.maxValue-this.state.minValue)
        }else{
            if(this.state.fromVal<=this.state.minValue)  return this.state.minValue
            else return 100*this.state.fromVal/(this.state.maxValue-this.state.minValue)
        }
    }
    calcCurrentPosition(coords:{left: number,top:number}){
        let cursor
        this.state.isVertical? cursor=(-coords.top + this.state.sliderCoordinates?.bottom! - this.state.handlerWidth!) :
                                cursor=(coords.left - this.state.sliderCoordinates?.left! - this.state.handlerWidth!/2)
        return this.state.isVertical?(Math.ceil(100*cursor/parseFloat(this.state.sliderParams?.height!))) :
                                     100*(cursor/parseFloat(this.state.sliderParams?.width!))
    }
    calcCurrentValue(currentPosition:number){//числа
        return this.state.minValue + 0.01*currentPosition*(this.state.maxValue-this.state.minValue)
    }
}
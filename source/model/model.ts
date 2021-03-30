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
        let currentValue = this.state.isVertical?Math.ceil(((parseFloat(this.state.sliderParams?.height!) + this.state.sliderCoordinates?.top!
                                                                                             - data.top - this.state.handlerWidth!/2)/
                                            (parseFloat(this.state.sliderParams?.height!)))*(this.state.maxValue-this.state.minValue)) :
                                            Math.ceil(((data.left- this.state.sliderCoordinates?.left!-this.state.handlerWidth!/2)/
                                            (parseFloat(this.state.sliderParams?.width!)))*(this.state.maxValue-this.state.minValue))
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
        let clickPosition = this.calcCursorPosition(data)
        if(this.state.range){
            if(Math.abs(clickPosition-this.state.fromVal)>Math.abs(clickPosition-this.state.toVal)){
                this.state.toVal = Math.ceil(clickPosition) 
            }else if(this.state.toVal==this.state.fromVal){
                if (clickPosition - this.state.fromVal < 0){
                    this.state.fromVal = Math.ceil(clickPosition)
                }else if (clickPosition - this.state.toVal>0){
                    this.state.toVal = Math.ceil(clickPosition)
                }
            }else if (Math.abs(clickPosition-this.state.fromVal)<Math.abs(clickPosition-this.state.toVal)){
                this.state.fromVal = Math.ceil(clickPosition)
            }
        }else {
            this.state.toVal = Math.ceil(clickPosition)
        }
        return this.state
    }

    sendStylesForRender(currentData:ISliderOptions) {
        let obj =  {
            coordinates: currentData.isVertical ? (['vertical','bottom: ','height: ']) : (['horizontal','left: ','width: ']),
            barPosition: currentData.range ?  100*(currentData.fromVal )/(currentData.maxValue-currentData.minValue): Number(0),
            barSize: (calcBorder(currentData.fromVal,currentData.toVal,currentData.maxValue - currentData.minValue,currentData.range,currentData.handlerWidth!)),
            isRange: currentData.range,
            rangeTo:    this.setHandlePosition(currentData.toVal,currentData.maxValue,currentData.minValue,'range-to'),
            rangeFrom:  this.setHandlePosition(currentData.fromVal,currentData.maxValue,currentData.minValue,'range-from'),
            showValues: currentData.showValues,
            values: [this.setVal(currentData.fromVal,currentData.units),this.setVal(currentData.toVal,currentData.units)],
            valuesPosition: [Math.abs(this.setValPosition(currentData.fromVal,currentData.maxValue-currentData.minValue,currentData.isVertical)),
                            Math.abs(this.setValPosition(currentData.toVal,currentData.maxValue-currentData.minValue,currentData.isVertical))]
                
        } 
        console.log(this.state.showValues)
        this.emit('values-ready',obj)
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
            console.log(valuePosition)
           return   valuePosition
    } 
    setHandlePosition(value:number, maxValue: number,minValue:number,whichHandle:string){
        if(whichHandle == 'range-to'){
            if(value>= maxValue) return maxValue
            else return 100*value/(maxValue-minValue)
        }else{
            if(value<=minValue)  return minValue
            else return 100*value/(maxValue-minValue)
        }
    }
    calcCursorPosition(coords:{left: number,top:number}){
        let cursor
        this.state.isVertical? cursor=(Math.abs(coords.top - parseFloat(this.state.sliderParams!.height) - this.state.sliderCoordinates?.top! + this.state.handlerWidth!/2)) :
                                cursor=(Math.abs(coords.left - this.state.sliderCoordinates?.left! - this.state.handlerWidth!/2))
        return this.state.isVertical?((cursor/parseFloat(this.state.sliderParams?.height!))*(this.state.maxValue-this.state.minValue)) :
                                     ((cursor/parseFloat(this.state.sliderParams?.width!))*(this.state.maxValue-this.state.minValue))
    }
}
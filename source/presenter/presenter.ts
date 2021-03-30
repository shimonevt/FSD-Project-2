import { type } from "jquery"
import { EventEmitter } from "../eventEmitter/eventEmitter"
import { IRenderValues, Model } from "../model/model"
import { ISliderOptions } from "../options/options"
import { View } from "../view/view"
export class Presenter extends EventEmitter {
    view : View
    model : Model 
    constructor(options:ISliderOptions) {
        super()
        this.view = new View(options)
        this.model = new Model()
        this.init()
    }
    init(){
        this.model.subscribe('values-ready',(obj:IRenderValues)=>{this.view.getChanges(obj)})
        this.view.subscribe('sliderClicked',(data:{top:number,left: number})=>{this.model.clickTreatment(data)})
        this.view.subscribe('handle-dragged',(coords:{top:number,left:number,info:string})=>{this.model.dragNDropTreatment(coords)})
        this.model.getDataFromPresenterforModel(this.view.sendDataFromViewToPresenter())
        
        
    }
}

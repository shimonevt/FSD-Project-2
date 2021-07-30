import { data } from 'jquery';
import { EventEmitter } from '../eventEmitter/eventEmitter.ts';
import { Model } from '../model/model.ts';
import {
  ISliderCoordinates, ISliderOptions, ISliderParameters, IRenderValues,
} from '../options/options.ts';
import { View } from '../view/view.ts';

class Presenter extends EventEmitter {
    view : View

    model : Model

    constructor(options:ISliderOptions) {
      super();
      this.view = new View(options.containerClass);
      this.model = new Model(options);
      this.init();
    }

    init():void {
      this.subscribeOnEvents();
      this.model.getViewParameters(this.view.updateParameters());
    }

    subscribeOnEvents():void {
      const { model, view } = this;
      view.subscribe('slider-init', (data:{sliderParameters:ISliderParameters, sliderCoordinates: ISliderCoordinates, handlerWidth: number}) => { model.getViewParameters(data); });
      model.subscribe('send-state', (state: ISliderOptions) => { this.emit('send-state', state); });
      model.subscribe('values-ready', (obj:IRenderValues) => { view.getChanges(obj); });
      view.subscribe('slider-clicked', (data:{top:number, left: number}) => { model.clickTreatment(data); });
      view.subscribe('handle-dragged', (coords:{top:number, left:number, info:string}) => { model.dragNDropTreatment(coords); });
      view.subscribe('window-resize', (data:{sliderParameters:ISliderParameters, sliderCoordinates: ISliderCoordinates, handlerWidth: number}) => { model.getViewParameters(data); });
      view.subscribe('scroll', (data:{sliderParameters:ISliderParameters, sliderCoordinates: ISliderCoordinates, handlerWidth: number}) => { model.getViewParameters(data); });
    }

    getDataFromPanel(options:ISliderOptions) {
      this.model.sendStylesForRender(options);
    }
}
export { Presenter };

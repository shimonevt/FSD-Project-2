import { EventEmitter } from '../eventEmitter/eventEmitter.ts';
import { Model } from '../model/model.ts';
import {
  ISliderCoordinates, ISliderOptions, ISliderParameters, IRenderValues 
} from '../options/options.ts';
import { Panel } from '../panel/panel.ts';
import { View } from '../view/view.ts';

class Presenter extends EventEmitter {
    view : View

    model : Model

    panel: Panel

    constructor(options:ISliderOptions) {
      super();
      this.view = new View(options.containerClass!);
      this.model = new Model(options);
      this.panel = new Panel(options);
      this.init();
    }

    init():void {
      this.subscribeOnEvents();
      this.model.getViewParameters(this.view.updateParameters());
    }

    subscribeOnEvents():void {
      const { model, view, panel } = this;
      model.subscribe('values-ready', (obj:IRenderValues) => { view.getChanges(obj); });
      view.subscribe('slider-clicked', (data:{top:number, left: number}) => { model.clickTreatment(data); });
      view.subscribe('handle-dragged', (coords:{top:number, left:number, info:string}) => { model.dragNDropTreatment(coords); });
      view.subscribe('window-resize', (data:{sliderParameters:ISliderParameters, sliderCoordinates: ISliderCoordinates, handlerWidth: number}) => { model.getViewParameters(data); });
      view.subscribe('scroll', (data:{sliderParameters:ISliderParameters, sliderCoordinates: ISliderCoordinates, handlerWidth: number}) => { model.getViewParameters(data); });
      panel.subscribe('panel-changed', (options:ISliderOptions) => { model.getData(options); const params = view.updateParameters(); model.getViewParameters(params); });
      model.subscribe('send-values-for-panel', (state:ISliderOptions) => { panel.getData(state); });
    }
}
export { Presenter };

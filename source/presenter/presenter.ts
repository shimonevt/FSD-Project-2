import { EventEmitter } from '../eventEmitter/eventEmitter';
import { IRenderValues, Model } from '../model/model';
import { ISliderCoordinates, ISliderOptions, ISliderParameters } from '../options/options';
import { Panel } from '../panel/panel';
import { View } from '../view/view';

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
      this.model.getDataFromPresenterforModel(this.view.updateParameters());
    }

    subscribeOnEvents():void {
      this.model.subscribe('values-ready', (obj:IRenderValues) => { this.view.getChanges(obj); });
      this.view.subscribe('slider-clicked', (data:{top:number, left: number}) => { this.model.clickTreatment(data); });
      this.view.subscribe('handle-dragged', (coords:{top:number, left:number, info:string}) => { this.model.dragNDropTreatment(coords); });
      this.view.subscribe('window-resize', (data:{sliderParameters:ISliderParameters, sliderCoordinates: ISliderCoordinates, handlerWidth: number}) => { this.model.setParameters(data); });
      this.view.subscribe('scroll', (data:{sliderParameters:ISliderParameters, sliderCoordinates: ISliderCoordinates, handlerWidth: number}) => { this.model.setParameters(data); });
      this.panel.subscribe('panel-changed', (options:ISliderOptions) => { this.model.getData(options); const params = this.view.updateParameters(); this.model.setParameters(params); });
      this.model.subscribe('send-values-for-panel', (state:ISliderOptions) => { this.panel.getData(state); });
    }
}
export { Presenter };
